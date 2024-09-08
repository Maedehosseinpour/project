import React from 'react'

const LiComponent = ({item}) => {
  return (
    <div className='w-full'>
      <li className="flex flex-row cursor-pointer justify-center items-center
       hover:bg-violet-700 p-2 rounded-lg h-14 hover:text-violet-200"
      //  onClick={setSortNews(id)}
       > {item}</li>
    </div>
  )
}

export default LiComponent
