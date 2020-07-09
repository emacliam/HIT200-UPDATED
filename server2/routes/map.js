const router = require('express').Router();
const User = require('../models/user');

router.put('/map/:id', async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        user.Latitude = req.body.Latitude;
        user.Longitude = req.body.Longitude;

        await user.save()
        res.json({
            success: true,
            message: "saved successfully"
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }

});

module.exports = router;