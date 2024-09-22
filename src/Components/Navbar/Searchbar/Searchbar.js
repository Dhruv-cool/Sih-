import React, { useState } from 'react'
import './SearchBar.css'
import { FaSearch } from "react-icons/fa";
import SearchList from './SearchList.jsx';
function Searchbar() {
    const [searchQuery, setSearchQuery]=useState("");
    const [seachListA, setsearchList] = useState(false)
    const TitleArray=["kurta","painting","thali","saree","pots"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()))
  return (
    <div className='Search_Container'>
      <div className="Search_Container2">
        <div className="search_div" >
         
            <input type="text" className="Box_SearchBox" placeholder='Search' 
            onChange={e=>setSearchQuery(e.target.value)}
            value={searchQuery}
            onClick={()=>{
              setsearchList(true)}}
          
            />
            <FaSearch size={18} className="searchIcon_SearchBar"
            onClick={()=>setsearchList(false)}
            />
              {searchQuery&&seachListA&&
              <SearchList
               setSearchQuery={setSearchQuery}
               TitleArray={TitleArray}
              />
            }
        </div>
      </div>
    </div>
  )
}

export default Searchbar