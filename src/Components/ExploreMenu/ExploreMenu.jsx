import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-Menu' id='explore-Menu'>
       <h1>Explore Your Menu</h1>
       <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi aut ea laudantium ipsa deleniti assumenda quo vero quae doloribus!</p>
      <div className="explore-menu-list">
       {menu_list.map((item,index)=>{
       return(
        <>
      <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
        <p>{item.menu_name}</p>
      </div>
        
        
        </>
        
       )
       })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu

