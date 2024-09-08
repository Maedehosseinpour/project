import React from 'react'

const Checboxcourscomponent = ({titel}) => {
  return (
    <div>
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="border-gray-300 dark:border-violet-600 bg-gray-100 dark:bg-gray-700 rounded w-4 h-4 text-violet-600 focus:ring-2 focus:ring-violet-500 dark:ring-offset-violet-800 dark:focus:ring-violet-600"/>
            <label for="default-checkbox" className="font-medium text-gray-900 text-sm md:text-lg dark:text-gray-300 ms-2">{titel}</label>
        </div>
    </div>
  )
}

export default Checboxcourscomponent
