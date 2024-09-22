import React from 'react'
import './Profile_menu.css'
function Profile_menu({toggleProfileMenu}) {
  return (
    <div className='container_profile'>
        <div className='profile_menu'>
            <ul>
              <li>Profile</li>
              <li>My Orders</li>
              <li>Tracking</li>
              <li>Customer Support</li>
              <li>vhh</li>
            </ul>
          </div>
          <div className="container3_drawsliderbar"
          onClick={toggleProfileMenu}
          >
        
      </div>
    

    </div>
  )
}

export default Profile_menu