import React from 'react'

const AllButton = ({title, handleReserveCourse}) => {
  return (
    <div className="flex justify-center pb-28 h-10">
        <button onClick={handleReserveCourse} className="border-2 border-indigo-600 bg-blue-700 dark:hover:bg-violet-800 dark:bg-violet-900 p-2 rounded-2xl md:rounded-2xl w-40 h-16 text-white text-xl dark:">
          {title}
        </button>
      </div>
  )
}

export default AllButton
