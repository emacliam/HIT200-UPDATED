const router = require('express').Router();
const Product = require('../models/product');



router.get('/stats', async(req, res) => {

    const products = await Product.find();
    const prod = [];

    await products.forEach(product => {
        prod.push(product.date)

    })

    result = prod.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));

    res.json({
        success: true,
        result: result
    })
})


module.exports = router;