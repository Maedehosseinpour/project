import React from 'react'

const TitrComponent = ({title}) => {
  return (
    <div>
      <div className="flex flex-col items-center my-16 w-full text-lg text-start md:text-nowrap md:text-2xl">
            <span className="block mb-2 w-32 md:w-32 md:text-2xl dark:text-violet-200"> {title}</span>
            <span className="block bg-gradient-to-l via-transparent to-transparent py-[2px] from-borderGradiant w-32 md:w-32"></span>
        </div>
    </div>
  )
}

export default TitrComponent
