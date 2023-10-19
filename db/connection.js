 const mongoose=require('mongoose')
 mongoose.connect(process.env.BASE_URL,{
     useUnifiedTopology:true,
     useNewUrlParser:true
 }).then(()=>{
     console.log("Database Connected")
 }).catch(()=>{
     console.error("Error in Database Connection")
 })
 