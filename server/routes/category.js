const router = require('express').Router();
const Category = require("../models/category");

//post
router.post('/categories', async(req,res)=>{
    try{
        const category = new Category();
        category.type = req.body.type;
        await category.save();

        res.json({
          success:true,
          message:"Successfully created a new category"
        });

    } catch (err) {
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
});

//get request

router.get('/categories', async(req, res)=>{
    try{
        let categories = await Category.find();
        res.json({
            success:true,
            categories:categories
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
})

module.exports = router;