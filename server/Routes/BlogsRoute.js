const express = require("express")
const router = express.Router()
const multer = require("multer")

const {getAllBlogs, getBlogsByCategory,getAllCategories,getBlogsById,createBlog} = require("./../Controllers/BlogsController")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/uploads");
    },
    filename : function(req,file,cb){
        console.log("image", Date.now()+ "-" + file.originalname)
        cb(null,Date.now()+ "-" + file.originalname)
    }
})

const fileFilter = (req, file, cb) =>{
    allowedFileType = ['image/jpeg', 'image/jpg' , 'image/png']
    if(allowedFileType.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload = multer({storage,fileFilter})

router.get("/", getAllBlogs)
router.get("/uniqueCategories",getAllCategories)
router.get("/:category", getBlogsByCategory)
router.get("/blogs/:id",getBlogsById)
router.post('/create-blog', upload.single('image'), createBlog)


module.exports = router