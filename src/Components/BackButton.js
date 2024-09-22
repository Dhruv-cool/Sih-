import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackSharp } from "react-icons/io5";
import './BackButton.css'
function BackButton() {
    const navigate=useNavigate();
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };
  return (
    <div className='back_button' >
        <IoChevronBackSharp onClick={handleBack} size={25}/>
    </div>
  )
}

export default BackButton