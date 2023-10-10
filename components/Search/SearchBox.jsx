import React from 'react'
import { search } from '../../assets'

const SearchBox = () => {
  return (
   
    <div className="SearchField">
      <span><p>S</p></span>
        <input type="text" placeholder='Search...' onChange={() => handleSearch}/>
        <img src={search} alt="" onClick={() => search}/>
    </div>
  )
}

export default SearchBox