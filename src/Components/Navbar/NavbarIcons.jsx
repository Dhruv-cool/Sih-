import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import './NavbarIcons.css'
import { Link } from 'react-router-dom';
import Profile_menu from '../Profile/Profile_menu';
function NavbarIcons() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className='icons_navbar'>
      <Link to={'/addtocart'}>
         <CiShoppingCart className='react_icons_navbar' size={28}/>
        </Link> 
        <div className='profile_icon' onClick={toggleProfileMenu}>
        <CgProfile className='react_icons_navbar' size={28} />
        {isProfileMenuOpen && (
          <Profile_menu
          toggleProfileMenu={toggleProfileMenu}
          />
        )}
        </div>
    </div>
  )
}

export default NavbarIcons