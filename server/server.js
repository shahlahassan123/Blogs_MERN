const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const routes = require("./Routes/BlogsRoute")
const  userRoutes = require("./Routes/UserRoute")
const path = require("path");

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'public')));

app.use("/", routes)
app.use("/auth", userRoutes)
// app.use('/uploads', express.static('uploads'));



mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=> console.log("DB connected successfully")).catch((err)=>console.log(err))


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})