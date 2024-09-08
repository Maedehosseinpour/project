import React from 'react'
import NewsDetail from "../../assets/image/NewsDetail.png"
import notFound from '../../assets/image/Images-for-null 2.svg'


const NewsDetailTopComponent = ({data}) => {
 
  

  const noImage = data?.currentImageAddress=== null || data?.currentImageAddress === 'undefined' || data?.currentImageAddress === ''

  return (
   <div className='border-[#3F40EA]/20  dark:bg-violet-950  dark:text-violet-200'>
     <div className='flex lg:flex-row flex-col justify-center items-center border-[#3F40EA]/20 mx-auto pt-5 pb-10 border-b-2 w-[90%]'>
      <div className='md:[50%] flex justify-center items-center mb-10 w-[90%] lg:w-[30%]'> 
      <img src={noImage ? notFound : data?.currentImageAddress} alt="" /></div>
      <div className='md:[50%] dark:border-2 dark:border-violet-700 w-[90%] lg:w-[70%]'>
        <h1 className='p-5 text-[#3B3CA7] text-2xl dark:text-violet-200'> {data?.title}  </h1>
        <div className='flex p-5 text-[#8E8EAA] dark:text-violet-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" 
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 
            7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
           <h5>{data?.addUserFullName} </h5>
        </div>
        <div className=''>
        <h3 className='p-10 text-[#03001C]/50 text-justify overflow-hidden text-ellipsis dark:text-violet-200 leading-10'>
        {data?.describe}
        </h3>
        </div>
      </div>
    </div>
   </div>
  )
}

export default NewsDetailTopComponent
