const express=require('express')
const { adminLogin, addProduct, getProducts, editProduct, deleteProducts,singleViewProduct,userSignUp,userLogin, addToCart,cartCount, cartItems,totalPrice,Quantitydecrement,Quantityincrement,removeCart, addWishList ,wishListItems,removeWishList,getUsers,deleteUsers} = require('../connections/logic')


const router=new express.Router()
router.post('/admin/login',adminLogin)
router.post('/admin/add-product',addProduct)
router.get('/products-access',getProducts)
router.put('/product-update/:id',editProduct)
router.delete('/product-delete/:id',deleteProducts)
router.get('/one-product/:id',singleViewProduct)
router.post('/user-signup',userSignUp)
router.post('/user-login',userLogin)
router.post('/addtocart',addToCart)
router.get('/cart-count/:userId',cartCount)
router.get('/cart-items/:userId',cartItems)
router.get(`/price-total/:userId`,totalPrice)
router.get(`/quantity-update-inc/:_id`,Quantityincrement)
router.get(`/quantity-update-dec/:_id`,Quantitydecrement)
router.delete('/remove-cart/:_id',removeCart)
router.post('/add-to-wishlist',addWishList)
router.get('/wishlist-view/:userId',wishListItems)
router.delete('/remove-wishlist/:_id',removeWishList)
router.get('/user-access',getUsers)
router.delete('/user-delete/:_id',deleteUsers)

module.exports=router