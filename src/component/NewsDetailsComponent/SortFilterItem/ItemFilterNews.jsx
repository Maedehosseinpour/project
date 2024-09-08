import React from 'react'
import Searchcomponent from '../../../common/Search/SearchComponent'
import SortFilterComponent from './SortFilterComponent'




const ItemFilterNews = ({handleSearch , setSortNews ,sortNews }) => {
  return (
    <div  className='flex md:flex-row flex-col justify-center items-center md:items-start gap-8 md:gap-16 mx-auto my-3 w-[90%]'>
      <SortFilterComponent setSortNews={setSortNews} sortNews={sortNews} />
      <Searchcomponent handleSearch={handleSearch}/>   
    </div>
  )
}

export default ItemFilterNews
