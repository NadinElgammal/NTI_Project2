const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
dotenv.config()
mongoose
  .connect(process.env.mongoURL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json())
app.use("/auth",authRoute)
app.use("/users",userRoute)
app.use("/api/products", productRoute)  
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.listen (process.env.PORT || 3000, () =>{
console.log("Running will")
})



// const user = new mongoose.model("User" , {
//     name:{},
//     age:{}
// })
// const newUser = new user({name:"Nadin",age:23})
// newUser.save()
// .then(res=> console.log(res))
// .catch(e=> console.log(e))