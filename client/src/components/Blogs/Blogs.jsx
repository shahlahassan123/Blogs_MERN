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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    getAllCategories(setCategories)
    getAllBlogs(setBlogs)
    setLoading(false)
    console.log(blogs)
    console.log(loading)
  }, [])


  


  return (
    <>
       <CategoryNavBar setCategories={setCategories}
      categories={categories} setActiveCategory={setActiveCategory} setBlogs={setBlogs} activeCategory={activeCategory} />
    <div className='container'>
   
      {loading ? <h1>Loading...</h1> :
      blogs.map((blog, ind) => {
        return (
          <div key={ind} className='blog' loading="lazy">
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


// import React, { useState, useEffect, useRef } from 'react';
// import { getAllBlogs, getAllCategories} from '../../apiUtils/handleApi';
// import './Blogs.css';
// import { MdAccessTime } from "react-icons/md";
// import CategoryNavBar from '../CategoryNavBar/CategoryNavBar';
// import { useNavigate } from 'react-router-dom';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("");
//   const navigate = useNavigate();
//   const imgRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const img = entry.target;
//           const src = img.getAttribute('data-src');
//           if (src) {
//             img.src = src;
//             console.log("Image in view:", img, "Data-src:", src);
//             img.classList.add('loaded');
//             observer.unobserve(img);
//           }
//         }
//       });
//     }, {
//       rootMargin: '100px'
//     });
  
//     const imgs = document.querySelectorAll('.image[data-src]'); // Select images that need to be observed
//     imgs.forEach(img => observer.observe(img));
  
//     return () => observer.disconnect();
//   }, [blogs]); // Rerun when blogs change
  

//   // useEffect(() => {
//   //   console.log(blogs); // Log to ensure state is updated
//   // }, [blogs]);

//   return (
//     <>
//       <CategoryNavBar setCategories={setCategories}
//         categories={categories} setActiveCategory={setActiveCategory} setBlogs={setBlogs} activeCategory={activeCategory} />
//       <div className='container'>
//         {blogs.map((blog, index) => (
//           <div key={index} className='blog'>
//             <h4 className='title'><div className='bloglink' onClick={() => navigate(`/:${blog._id}`)}>{blog.title}</div></h4>
//             <p className='category'>Category: {blog.category}</p>
//             <div className="img-container">
//               <img ref={el => imgRefs.current[index] = el} className='image' data-src={blog.image} alt='blog-image'></img>
//             </div>

//             <div className="author-time-container">
//               <p className='author'>By {blog.author}</p>
//               <div className="time">
//                 <MdAccessTime className="time-icon" />
//                 <p className='reading-time'>{blog.reading_time}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Blogs;
