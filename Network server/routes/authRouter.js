const express = require('express');
const router = express.Router();
const User = require('../models/Auth');
const  bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/signup',async(req,res) => {
    const {name,email,password} = req.body;
   
    try {
        let user = await User.findOne({email});
        if(user){
            res.status(402).json({error:"User already exists"})
        }

        const avatar = gravatar.url(email,{s:"200",r:"pg",d:"mm"});

        user = new User({name,email,avatar,password});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();
        res.status(200).json('success');
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
   

});

router.post('/signin',async(req,res) => {
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
    if(!user){
        res.status(400).json({error:"Please Register"})
    };
    const isMatch  = await bcrypt.compare(password,user.password);
    if(!isMatch){
        res.status(400).json({error:"Your Password is not match"});
    };
     jwt.sign({id:user._id},
        config.get("jwtSecret"),
        {expiresIn:36000},(err,token) =>{
            if(err) throw err;
            res.json({token});
        }

    )
    } catch (err) {
        console.log(err.message);
        res.status(500).send({error:"Server Error"});
    }

    

});

module.exports = router;