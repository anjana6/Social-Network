const express = require('express');
const {check,validationResult} = require('express-validator');
const User = require("../models/User");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/",auth,async(req,res) => {
    
    try {
        //console.log(req.userId);
        const user = await User.findById(req.userId).select("-password");
        //console.log(user);
        const newPost = new Post({
            text:req.body.text,
            name:user.name,
            avatar:user.avatar,
            user:req.userId

        })  ;

        const post = await newPost.save();
        res.status(200).json({post});

    } catch (err) {
        console.log(err.message);
        res.status(501).send("Server Error");
        
    }
});

router.get('/',auth,async (req,res) => {
    try {
        const post = await Post.find().sort({date:-1});
        res.status(200).json(post);

    } catch (err) {
        console.log(err.message);
        res.status(501).send("Server Error");
        
    }
})

router.get('/:id',auth,async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(401).json({error:"Post not found"})
        }
        res.status(200).json(post)
    } catch (err) {
        console.log(err.message);
        res.status(501).send('Server Error');
        
    }
})

router.delete("/:id",auth,async(req,res) =>{
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"Post Removed"})
    } catch (err){
        console.log(err.message);
        if(err.kind === "ObjectId"){
            return res.status(401).json({error:"Post not fond"})
        }
        res.status(501).send('Server Error');
    }
});

router.put("/like/:id",auth,async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.likes.filter(like => like.userId.toString() === req.userId).length >0){
            return res.status(400).json({error:"Post alredy liked"})
        }
        post.likes.unshift({user:req.userId});

        await post.save();

        res.json(post.likes);

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

router.put("/unlike/:id",auth,async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id);

        if(post.likes.filter(like => like.userId.toString() === req.userId).length === 0){
            return res.status(400).json({msg:"Post has not yet liked"});
        }
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
        
    }
})


module.exports = router;