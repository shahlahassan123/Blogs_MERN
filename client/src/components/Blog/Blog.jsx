import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdAccessTime } from "react-icons/md";
import { getBlogsById } from '../../apiUtils/handleApi';
import { marked } from 'marked';

import DOMPurify from 'dompurify';
import './Blog.css';

const Blog = () => {
  const param = useParams();
  const id = param['id'].split(":")[1];
  console.log("test", id);

  const [blog, setBlog] = useState({});

  useEffect(() => {
    getBlogsById(setBlog, id);
  }, [id]);

  // Process Markdown content to HTML
  const createMarkup = (markdownContent) => {
    if (!markdownContent) { // Check if the content is null or undefined
      return { __html: '' }; // Return an empty string if no content is available
    }
    const rawMarkup = marked(markdownContent); // Process the content with marked
    return { __html: DOMPurify.sanitize(rawMarkup) }; // Sanitize and return the content
  };
  

  return (
    <div className='blog-container'>
      <h4 className='title'>{blog.title}</h4>
      
      <div className="img-container">
        <img className='image' src={blog.image} alt='blog'></img>
      </div>

      <div className="author-time-container">
        <p className='author'>By {blog.author}</p>
        <div className="time">
          <MdAccessTime className="time-icon" />
          <p className='reading-time'>{blog.reading_time}</p>
        </div>
      </div>

      <p className='category'>Category: {blog.category}</p>
      <p className='published_date'>Published Date: {blog.published_date}</p>

      {/* Render the processed Markdown content */}
      <div className='content' dangerouslySetInnerHTML={createMarkup(blog.content)} />

    </div>
  );
};

export default Blog;



// import React from 'react'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { MdAccessTime } from "react-icons/md";
// import { getBlogsById } from '../../apiUtils/handleApi'
// import './Blog.css'

// const Blog = () => {

//   const param = useParams()
//   const id = param['id'].split(":")[1]
//   console.log("test", id)

//   const [blog, setBlog] = useState({})

//   useEffect(() => {
//     getBlogsById(setBlog, id)
//   }, [])



//   return (
//     <div className='blog-container'>
//       <h4 className='title'>{blog.title}</h4>
      
//       <div className="img-container">
//         <img className='image' src={blog.image} alt='blog-image'></img>
//       </div>

//       <div className="author-time-container">
//         <p className='author'> By {blog.author}</p>
//         <div className="time">
//           <MdAccessTime className="time-icon" />
//           <p className='reading-time'>{blog.reading_time}</p>
//         </div>

//       </div>
//       <p className='category'>Category: {blog.category}</p>
//       <p className='published_date'>Published Date : {blog.published_date}</p>

//       <p className='content'>{blog.content}</p>

//     </div>
//   )
// }

// export default Blog
