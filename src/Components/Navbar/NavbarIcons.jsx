import React from 'react'
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import './NavbarIcons.css'
function NavbarIcons() {
  return (
    <div className='icons_navbar'>
         <CiShoppingCart className='react_icons_navbar' size={28}/>
        <CgProfile className='react_icons_navbar' size={28} />
    </div>
  )
}

export default NavbarIcons