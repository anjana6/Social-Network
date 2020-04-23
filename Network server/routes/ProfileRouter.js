const express = require('express');
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');
const Post = require('../models/Post');
const User = require('../models/User');

const router = express.Router();


router.post("/",auth,async(req,res) => {
    const {company,skills,location} = req.body;
    const profileField = {}
    profileField.user = req.user.id;
    if(company) profileField.company = company;
    if(location) profileField.location = location;
     profileField.skills = skills.split(',').map(skill => skill.trim());
    //console.log(newSkills);
     try {
        const profile = new Profile(profileField);
        await profile.save()
        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
        
    }

})

router.get('/me',auth,async (req,res) => {
    try {
        const profile = await Profile.findOne({user:req.user.id})
        .populate('user',['name','avatar']);
        console.log(profile)
        if(!profile){
            return res.status(401).json({msg:"There is no profile for you"})
        }
        res.json(profile);

    } catch (err){
        console.log(err.message);
        res.status(501).send("Sever Error");
        
    }
})

router.get('/',auth,async (req,res) => {
    try {
        const profiles = await Profile.find().populate('user',['name','avatar']);
        if(!profiles){
            return res.status(401).json({msg:"There is no developer yet"});
        }
        res.json(profiles);
    } catch (err) {
        console.log(err.message);
        res.status(501).send('Server Error');
    }
})

router.get("/user/:user_id", async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.user_id).populate('user',['name']);
        if(!profile){
            return res.status(401).json({msg:"There is no profile"});
        }
    res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
        
    } 
})

router.delete("/",auth,async(req,res) => {
    try {
        await Post.deleteMany({user: req.user.id});
        
        await Profile.findOneAndRemove({user:req.user.id});

        await User.findOneAndRemove({_id:req.user.id});
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
        
    }
})

module.exports = router;