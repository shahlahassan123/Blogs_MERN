import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'
import { getBlogsByCategory,getAllBlogs} from './../../apiUtils/handleApi'
import './CategoryNavBar.css'


const CategoryNavBar = ({categories,setActiveCategory,setBlogs,activeCategory}) => {

    useEffect(()=>{
        getBlogsByCategory(setBlogs,activeCategory)
    },[activeCategory])


    const [lightMode, _] = useContext(ThemeContext)

    const btnStyle ={color : lightMode ?  "#fff" : "#111", backgroundColor : lightMode ?  "#111" : "#fff" }

  return (
    <div className='navBar'>
        <button style={btnStyle}
        onClick={(()=>getAllBlogs(setBlogs))} >All</button>
        {categories.map((category,ind) => (
          <button key={ind} style={btnStyle}
          onClick={()=> setActiveCategory(category)}>{category}</button>
        ))}
    </div>
  )
}

export default CategoryNavBar
