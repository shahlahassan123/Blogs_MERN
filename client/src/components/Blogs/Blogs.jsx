import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllBlogs, getAllCategories} from '../../apiUtils/handleApi'
import './Blogs.css'
import { MdAccessTime } from "react-icons/md";
import CategoryNavBar from '../CategoryNavBar/CategoryNavBar';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [categories, setCategories]  = useState([])
  const [activeCategory, setActiveCategory] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    getAllBlogs(setBlogs)
    getAllCategories(setCategories)
    console.log(blogs)
  }, [])



  return (
    <>
       <CategoryNavBar setCategories={setCategories}
      categories={categories} setActiveCategory={setActiveCategory} setBlogs={setBlogs} activeCategory={activeCategory} />
    <div className='container'>
   
      {blogs.map((blog, ind) => {
        return (
          <div key={ind} className='blog'>
            <h4 className='title'><div className='bloglink' onClick={()=>navigate(`/:${blog._id}`)}>{blog.title}</div></h4>
            <p className='category'>Category: {blog.category}</p>
            <div className="img-container">
              <img className='image' src={blog.image} alt='blog-image'></img>
            </div>

            <div className="author-time-container">
              <p className='author'> By {blog.author}</p>
              <div className="time">
                <MdAccessTime className="time-icon" />
                <p className='reading-time'>{blog.reading_time}</p>
              </div>

            </div>
            {/* <p className='content'>{blog.content.slice(0, 23)}....</p> */}
            {/* <button>Read More...</button> */}
          </div>
        )
      })}

    </div>
    </>
    
  )
}

export default Blogs
