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
app.use(cors({
    origin : "https://blogs-mern-frontend.onrender.com/",
    methods : ['POST', 'GET'],
    credentials : true
}))

app.use(express.static(path.join(__dirname,'public')));

// Prefix all API routes
const apiRouter = express.Router();
// Attach your routes to the router
apiRouter.use("/", routes);
apiRouter.use("/auth", userRoutes);
app.use("/api", apiRouter);





mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=> console.log("DB connected successfully")).catch((err)=>console.log(err))


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})

