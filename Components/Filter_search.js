import React from 'react'

const Filter_search = (searchData,sort,cardFilter) => {
 
  return (
    <div className="filter-search">
      <button onClick={cardFilter} className="top-btn" > Top Rated Restaurant</button>
      <select name="" id="" onChange={sort}  defaultValue="hey">
      <option disabled="disabled" value="hey" selected>
          Select
        </option>
        <option value="sortByRating">Sort by rating</option>
        <option value="sortByFoodName">Sort by price</option>
        <option value="SortByDistance">Sort by distance</option>
      </select>
      <input type="text" placeholder='Search Restaurants'onInput={searchData}/>
    </div>
  )
}

export default Filter_search
