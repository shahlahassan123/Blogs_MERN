// Filename: server.js

const express = require('express');
const cors = require('cors');

const app = express();

// Apply CORS middleware to accept requests from your frontend domain
app.use(cors({
  origin: 'https://blogs-mern-frontend.vercel.app', // Adjust as per your frontend app's URL
  credentials: true,
}));

// Test endpoint to check CORS setup
app.get('/api/test', (req, res) => {
  res.json({ message: 'CORS-enabled response' });
});

// Connect to your database and additional setup if necessary

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const path = require("path");

// // Import your route modules
// const blogsRoute = require("./Routes/BlogsRoute");
// const userRoute = require("./Routes/UserRoute");

// dotenv.config();

// const app = express();

// app.use(express.json());

// // Explicit CORS configuration
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://blogs-mern-frontend.vercel.app');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//     return res.status(200).json({});
//   }
//   next();
// });

// app.use(express.static(path.join(__dirname, 'public')));

// // Use the API router with prefixed routes
// const apiRouter = express.Router();

// apiRouter.use("/", blogsRoute);
// apiRouter.use("/auth", userRoute);

// // Prefix all API routes
// app.use("/api", apiRouter);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("DB connected successfully"))
//   .catch((err) => console.log(err));

// // Start the server
// app.listen(process.env.PORT, () => {
//     console.log(`Server running on Port ${process.env.PORT}`);
// });


// const express = require("express")
// const dotenv = require("dotenv")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const routes = require("./Routes/BlogsRoute")
// const  userRoutes = require("./Routes/UserRoute")
// const path = require("path");



// dotenv.config()

// const app = express()

// app.use(express.json())
// app.use(cors({
//     origin : "https://blogs-mern-frontend.vercel.app",
//     methods : ['POST', 'GET'],
//     credentials : true
// }))

// app.use(express.static(path.join(__dirname,'public')));

// // Prefix all API routes
// const apiRouter = express.Router();
// // Attach your routes to the router
// apiRouter.use("/", routes);
// apiRouter.use("/auth", userRoutes);
// app.use("/api", apiRouter);

// // app.use("/", routes)
// // app.use("/auth", userRoutes)
// // app.use('/uploads', express.static('uploads'));



// mongoose.connect(process.env.MONGO_DB_URL,{
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }).then(()=> console.log("DB connected successfully")).catch((err)=>console.log(err))


// app.listen(process.env.PORT, ()=>{
//     console.log(`Server running on Port ${process.env.PORT}`)
// })