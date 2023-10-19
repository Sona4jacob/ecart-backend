const mongoose=require('mongoose')

// admin schema
const adminSchema=new mongoose.Schema({
    uname:String,
    psw:String
})
// admin model
const admins=new mongoose.model("admins",adminSchema)


// product schema
const productSchema=new mongoose.Schema({
    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number,
    count:Number
})
// product model
const products=new mongoose.model("products",productSchema)

// user schema
const userSchema=new mongoose.Schema({
    email:String,
    psw:String
})
// user model
const users = new mongoose.model("users",userSchema)

// add to cart schema
const addToCartSchema=new mongoose.Schema({
    userId:String,
    pId:String,
    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number,
    quantity:Number,
    totalPrice:Number
})
// add to cart model
const carts=new mongoose.model("carts",addToCartSchema)

const addToWishlistSchema=new mongoose.Schema({
    userId:String,
    pId:String,
    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number
})
// wish list model
const wishes=new mongoose.model("wishes",addToWishlistSchema);
module.exports={admins,products,users,carts,wishes}