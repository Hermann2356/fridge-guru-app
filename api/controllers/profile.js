const express = require('express');
const router = express.Router();
const db = require('../models');
const path = require('path');
const { Profile } = db;
const multer  = require('multer');
const assets = path.join(__dirname, '../public/assets');
// const upload = multer({ dest: assets });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, assets)
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        const uniqueSuffix = Date.now() ;
            // + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + fileName)
    }
})

const upload = multer({ storage: storage })

const passport = require('../middlewares/authentication');

router.get('/:userId', passport.isAuthenticated(), (req, res) => {
    let { userId } = req.params;
    Profile.findOne({where:{ userId: userId }})
        .then(profile => {
            return res.json(profile);
        });
});

router.put('/photo/:id', passport.isAuthenticated(), upload.single('profileImg'), (req, res) => {

    const { id } = req.params;

    Profile.findOne({where: {userId: id}})
        .then(profile => {
            if (!profile) {
                return res.sendStatus(404);
            }

            // console.log(req.file.path);
            profile.profileImage = "/public/assets/" + req.file.filename;

            profile.save()
                .then(profile => {
                    res.json(profile);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        });
})


module.exports = router;