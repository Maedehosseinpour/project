import React from 'react'
//detail component for exampel 
const NewsDtailsExplanation = ({data}) => {
  return (
    <div className='dark:bg-violet-950 mx-auto w-full'>
        <div className='border-[#3F40EA]/20 dark:border-violet-100 dark:bg-violet-950 shadow-lg mx-auto p-14 border-b-2 dark:border-b-4 w-[90%] text-[#03001C]/50 text-justify leading-10'>
            <h1 className='mb-4 text-2xl dark:text-violet-200'>  {data?.googleTitle}</h1>
            <h3 className='my-4 text-xl dark:text-violet-200 leading-10'>
            {data?.googleDescribe}
            </h3>
            <h1 className='my-4 text-2xl dark:text-violet-200'>مثال:</h1>
            <h3 className='my-4 text-xl dark:text-violet-200 leading-10'>   
            {data?.googleDescribe}
            </h3>
            <h3 className='my-4 text-xl dark:text-violet-200 leading-10'>
            {data?.googleDescribe}
            </h3>
            <h3 className='my-8 text-xl dark:text-violet-200'>امیدوارم مقاله مفیدی برای شما واقع بوده باشه.</h3>
            <h3 className='my-4 text-2xl dark:text-violet-200' >با تشکر از:    {data?.addUserFullName}</h3>
        </div>
      
    </div>
  )
}

export default NewsDtailsExplanation
