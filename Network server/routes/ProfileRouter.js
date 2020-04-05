const express = require('express');
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');
const Post = require('../models/Post');
const User = require('../models/User');

const router = express.Router();


router.post("/",auth,async(req,res) => {
    const {company,skills,location} = req.body;
    const profileField = {}
    profileField.user = req.userId;
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
        const profile = await Profile.findOne({user:req.userId}).populate('User',['name','avatar']);
        if(!profile){
            return res.status(401).json({msg:"There is no profile for you"})
        }
        res.json(profile);

    } catch (err){
        console.log(err.message);
        res.status(501).send("Sever Error");
        
    }
})

router.get("/user/:user_id",async(req,res) => {
    try {
        const profile = await Profile.findOne({user:req.params.user_id}).populate('User',['name','avatar']);
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
        await Post.deleteMany({user: req.userId});
        
        await Profile.findOneAndRemove({user:req.userId});

        await User.findOneAndRemove({_id:req.userId});
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
        
    }
})

module.exports = router;