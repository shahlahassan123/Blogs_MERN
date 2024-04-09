import axios from 'axios'
import React,{useState} from 'react'
import './CreateBlog.css'
import {createBlog} from './../../apiUtils/handleApi'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const [blogData, setBlogData] = useState({
    title: '',
    author: '',
    image:null,
    category:'',
    readingTime : '',
    content : '',
  })
  const navigate = useNavigate()

  const handleSubmit  = (e) =>{
    e.preventDefault()
    console.log("blogdata", blogData)
    try{
      const formData = new  FormData();
      formData.append( "title", blogData.title);
      formData.append("author", blogData.author );
      formData.append('image', blogData.image);
      formData.append('category', blogData.category);
      formData.append('reading_time', blogData.readingTime);
      formData.append('content', blogData.content || "");

  

      console.log("obj", formData);

      createBlog(formData)
      navigate("/")

    }catch(err){
      console.log(err)
    }
   
   
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setBlogData(prevValue=>({...prevValue,[name]:value}))

  }

  const handleFileChange = e=>{
    const file = e.target.files[0]
    setBlogData(prevValue=>({...prevValue,['image']: file}))

  }

  return (
    <div className='blog-creation'>
    <h1>Create a blog</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" onChange={handleInputChange}/><br/>
        <label htmlFor="image">Upload Image: </label>
        <input type="file" id="image" name="image" onChange={handleFileChange}/><br/>
        <label htmlFor="author">Author: </label>
        <input type="text" id="author" name="author" onChange={handleInputChange}/><br/>
        <label htmlFor="reading-time">Reading time: </label>
        <input type="text" id="reading-time" name="reading-time" onChange={handleInputChange}/><br/>
        <label htmlFor="category">Category: </label>
        <input type="text" id="category" name="category" onChange={handleInputChange}/><br/>
        <label htmlFor="content">Content: </label>
        <textarea type="text" id="content" name="content" rows={13}  onChange={handleInputChange}/><br/>
        <button type="submit">Submit</button>
    </form>
  
</div>
  )
}

export default CreateBlog
