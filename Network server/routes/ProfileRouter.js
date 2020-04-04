const express = require('express');
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');

const router = express.Router();


router.post("/",auth,async(req,res) => {
    const {company,skills} = req.body
     try {
        const profile = new Profile({
            user: req.userId,
            company: company,
            skills:skills
        });
        await profile.save()
        res.json({msg:"suss"});
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
        
    }

})

module.exports = router;