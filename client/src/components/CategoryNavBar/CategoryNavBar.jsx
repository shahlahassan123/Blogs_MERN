import React from 'react'
import { useEffect } from 'react'
import { getBlogsByCategory,getAllBlogs} from './../../apiUtils/handleApi'
import './CategoryNavBar.css'


const CategoryNavBar = ({categories,setActiveCategory,setBlogs,activeCategory}) => {

    useEffect(()=>{
        getBlogsByCategory(setBlogs,activeCategory)
    },[activeCategory])

  return (
    <div className='navBar'>
        <button onClick={(()=>getAllBlogs(setBlogs))} >All</button>
        {categories.map((category,ind) => (
          <button key={ind} onClick={()=> setActiveCategory(category)}>{category}</button>
        ))}
    </div>
  )
}

export default CategoryNavBar
