import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL

const getAllBlogs = (setBlogs) =>{
    axios.get(BASE_URL)
    .then(data=>{
        setBlogs(data.data)
    })    
    .catch(err=>console.log(err))
}


const getBlogsByCategory = (setBlogs, category)=>{
    axios.get(BASE_URL + ':' + category)
    .then((data)=>{
        setBlogs(data.data)
    }).catch(err=>console.log(err))
}

const getBlogsById = (setBlog, id)=>{
    axios.get(BASE_URL + 'blogs/:' + id)
    .then((data)=>{
        console.log("vv",data)
        setBlog(data.data)
    }).catch(err=>console.log(err))
}

const getAllCategories = (setCategories)=>{
    axios.get(BASE_URL + 'uniqueCategories')
    .then((data)=>{
        console.log("cat",data)
        setCategories(data.data)
    }).catch(err=>console.log(err))
}

const createBlog = async(blogData) =>{
    console.log("11", blogData)
    axios.post(BASE_URL+'create-blog', blogData, {headers : {'Content-Type' : 'multipart/form-data'}})  
    .then(data=>{
        alert('Blog created successfully')
    }) 
    .catch(err=>console.log(err));  
     
}





export {getAllBlogs,getBlogsByCategory,getAllCategories,getBlogsById,createBlog}