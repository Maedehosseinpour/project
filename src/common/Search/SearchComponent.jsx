import React from 'react'

const Searchcomponent = ({handleSearch}) => {
  return (
    <div className='flex justify-end items-center mb-3 w-96 md:w-[40%]'> 
        <div className='w-full h-10'>   
         <label for="search" className="dark:bg-violet-950 mb-2 p-2 font-medium text-gray-900 text-sm dark:text-violet-200 sr-only">جستجو</label>
         <div className="relative border-violet-100 rounded-3xl md:rounded-2xl w-full">
         <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 ps-3">
            <svg className="ml-5 w-4 h-4 text-gray-500 dark:text-violet-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={handleSearch} id="search" className="block border-2 border-violet-700 focus:border-violet-500 dark:focus:border-violet-500 bg-gray-50 dark:bg-violet-950 p-4 rounded-lg w-full h-14 text-gray-900 text-sm dark:text-violet-200 ps-10 focus:ring-violet-500 dark:placeholder-violet-200 dark:focus:ring-blue-500" placeholder="جستجو" required />
        
      </div>
        </div>
    </div>
  )
}

export default Searchcomponent
