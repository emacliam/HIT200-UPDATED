const router = require('express').Router()
const Product = require('../models/product')
const cloudinary = require('cloudinary').v2
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, file.originalname)
  }
})

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

// post request - create product
router.post('/products', (req, res) => {
  const upload = multer({ storage }).single('photo')
  upload(req, res, function (err) {
    if (err) {
      return res.send(err)
    }
    console.log('file uploaded to server')

    const path = req.file.path
    const uniqueFilename = new Date().toISOString()

    cloudinary.uploader.upload(
      path, { public_id: `products/${uniqueFilename}`, tags: 'product' }, // directory and tags are optional
      function (err, image) {
        // note if there is an error we need to unlink the image from the server
        // Also use try catch here
        if (err) return res.send(err)
        console.log('file uploaded to Cloudinary')
        // remove file from server
        const fs = require('fs')
        fs.unlinkSync(path)
        // return image details
        const url = image.secure_url

        const product = new Product()
        product.owner = req.body.ownerID
        product.name = req.body.name
        product.price = req.body.price
        product.description = req.body.description
        product.photo = url
        product.modal = req.body.modal
        product.size = req.body.size
        product.type = req.body.type
        product.category = req.body.category

        product.save()

        res.json({
          status: true,
          message: 'successfully saved'
        })
      })
  })
})

// get request - get all products

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().populate('owner')
    // later when i get to access them
    /*   .populate("reviews", "rating") */
      .exec()
    res.json({
      success: true,
      products: products
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

// get request - get single product
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id }).populate('owner')
    // for rating and reviews
    /*  .populate("reviews", "rating") */
      .exec()
    res.json({
      success: true,
      product: product
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

// put request - update product
router.put('/products/:id', (req, res) => {
  const upload = multer({ storage }).single('photo')
  upload(req, res, function (err) {
    if (err) {
      return res.send(err)
    }
    console.log('file uploaded to server')

    const path = req.file.path
    const uniqueFilename = new Date().toISOString()

    cloudinary.uploader.upload(
      path, { public_id: `products/${uniqueFilename}`, tags: 'product' }, // directory and tags are optional
      async function (err, image) {
        // note if there is an error we need to unlink the image from the server
        if (err) return res.send(err)
        console.log('file uploaded to Cloudinary')
        // remove file from server
        const fs = require('fs')
        fs.unlinkSync(path)
        // return image details
        const url = image.secure_url
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, {
          $set: {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            size: req.body.size,
            // mind photo when updating
            photo: url,
            description: req.body.description,
            type: req.body.type,
            modal: req.body.modal,
            date: Date.now()

          }
        }, { upsert: true })

        res.json({
          success: true,
          updatedProduct: product
        })
      })
  })
})

// delete request - delete single product
router.delete('/products/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: req.params.id })

    if (deletedProduct) {
      res.json({
        success: true,
        message: 'successfully deleted '
      })
    }
  } catch (err) {
    res.json({
      success: false,
      message: err
    })
  }
})

module.exports = router
