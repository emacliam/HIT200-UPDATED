const router = require('express').Router();
const User = require('../models/user');
const verifyToken = require('../middlewares/verify-token');

const jwt = require('jsonwebtoken');

const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
    }
})

// cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

/* signup Route */
router.post('/auth/signup', async(req, res) => {
    let response = User.findOne({ Email: req.body.email });
    if (response.Email = req.body.Email) {
        console.log("user already exist")
    } else {
        try {
            const upload = multer({ storage }).single('Blogo')
            upload(req, res, function(err) {
                if (err) {
                    return res.send(err)
                }
                console.log('file uploaded to server')


                const path = req.file.path
                const uniqueFilename = new Date().toISOString()

                cloudinary.uploader.upload(
                    path, { public_id: `logo/${uniqueFilename}`, tags: `logo` }, // directory and tags are optional
                    async function(err, image) {
                        //note if there is an error we need to unlink the image from the server
                        //Also use try catch here
                        if (err) return res.send(err)
                        console.log('file uploaded to Cloudinary')
                            // remove file from server
                        const fs = require('fs')
                        fs.unlinkSync(path)
                            // return image details
                        const url = image.secure_url
                        let newUser = new User();
                        newUser.Bname = req.body.Bname;
                        newUser.Bcategory = req.body.Bcategory;
                        newUser.Bemail = req.body.Bemail;
                        newUser.Bphone = req.body.Bphone;
                        newUser.Btype = req.body.Btype;
                        newUser.Blogo = req.body.Blogo;
                        newUser.Fname = req.body.Fname;
                        newUser.Aline1 = req.body.Aline1;
                        newUser.Aline2 = req.body.Aline2;
                        newUser.City = req.body.City;
                        newUser.State = req.body.State;
                        newUser.Country = req.body.Country;
                        newUser.registered = req.body.registered;
                        newUser.Email = req.body.Email;
                        newUser.Password = req.body.Password;
                        newUser.paymentmade = false;
                        await newUser.save();

                        let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                            expiresIn: 604800 //1  week
                        });

                        res.json({
                            success: true,
                            token: token,
                            message: "sucessfully created a new user"
                        })
                    })
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

});


/* profile route */
router.get('/auth/user', verifyToken, async(req, res) => {
    try {
        let foundUser = await User.findOne({ _id: req.decoded._id });
        if (foundUser) {
            res.json({
                success: true,
                user: foundUser
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

/* login route */
router.post("/auth/login", async(req, res) => {
    try {
        let foundUser = await User.findOne({ Email: req.body.Email });
        if (!foundUser) {
            res.status(403).json({
                success: false,
                message: "Authentication failed, User not found"
            })
        } else {
            if (foundUser.comparePassword(req.body.Password)) {
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800 //1 week
                })
                res.json({
                    success: true,
                    token: token
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: "Authentication failed, Wrong password!"
                })
            }
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});
/* update profile */
router.put("/auth/user", verifyToken, async(req, res) => {
    try {
        let foundUser = await User.findOne({ _id: req.decoded._id });
        if (foundUser) {
            if (req.body.name) foundUser.name = req.body.name;
            if (req.body.email) foundUser.email = req.body.email;
            if (req.body.password) foundUser.password = req.body.password;

            await foundUser.save();

            res.json({
                success: true,
                message: "Successfully updated"
            })

        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }

})

module.exports = router;