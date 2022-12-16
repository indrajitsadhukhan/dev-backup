const express = require('express')
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController')
const router=express.Router()

// GET Request to get All products
router.route("/products").get(getAllProducts)


// POST request to Create a new Product
router.route("/product/new").post(createProduct)

// PUT request to update a product, DELETE request to delete a product, GET request to get Product details
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)



module.exports=router
