const mongoose = require("mongoose")
const BlogsModel = require("../Models/BlogsModel")




module.exports.getBlogsById = async (req, res) => {
    let id = req.params.id.split(":")[1]
    let blogs;
    try {
        blogs = await BlogsModel.findById(id)

        if (!blogs) return res.send('No Blogs found')
        res.send(blogs)
    } catch (err) {
        console.log(err)
    }

}



module.exports.getAllBlogs = async (req, res) => {
    try {
        let blogs = await BlogsModel.find().sort({published_date : "descending"});
        res.send(blogs)
    } catch (err) {
        console.log(err)
    }
}


module.exports.createBlog = async (req, res) => {
    const { title, content, author, reading_time, category, } = req.body
    const imagePath = req.file ? `${process.env.BACKEND_URL}/uploads/${req.file.filename}` : "";



    try{
        const newBlog = new BlogsModel({
            title,
            content,
            image: imagePath,
            category,
            author,
            reading_time,
            published_date: Date.now()
        })
        const savedBlog = await newBlog.save()
        res.status(201).send(savedBlog)
    } catch (err) {
        console.log(err)
    }
}


module.exports.getBlogsByCategory = async (req, res) => {
    let category = req.params.category.split(":")[1]
    let blogs;
    try {


        blogs = await BlogsModel.find({ "category": category })


        if (!blogs) return res.send('No Blogs found')
        res.send(blogs)
    } catch (err) {
        console.log(err)
    }
}

module.exports.getAllCategories = async (req, res) => {
    try {
        let categories = await BlogsModel.distinct("category")
        res.send(categories)
    } catch (err) {
        console.log(err)
    }
}