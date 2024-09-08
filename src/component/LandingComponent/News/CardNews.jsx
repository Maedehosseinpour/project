import React from 'react'
import notFound from '../../../assets/image/Images-for-null 2.svg'
import { IoEyeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from 'react-router-dom';

// import image from "../../assets/image/N1.png"
const CardNews = ({id,title , img, view , date, description}) => {


  const noImage = img === null || img === "undefined" || img === "";

  return (
       
     <div data-aos="zoom-in-down" data-aos-duration="1000" className="flex md:flex-row flex-col justify-center items-center gap-5 border-gray-200 dark:border-violet-700 bg-white hover:bg-gray-100 dark:bg-violet-950 shadow mx-auto my-10 border rounded-lg w-full dark:text-violet-200">
         <div className="flex justify-center items-center m-5 rounded-t-lg md:rounded-none md:rounded-s-lg md:w-[40%]">
          <img className="rounded-lg w-[450px] h-[200px] object-fill bg-violet-300" src={noImage ? notFound : img} alt="" />
         </div>
         <div className='flex flex-col flex-grow my-5 w-[80%] md:w-[50%] text-lg text-start leading-8'>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 font-bold text-2xl text-wrap text-indigo-900 md:text-[15px] dark:text-white tracking-tight">  {title}</h5>
                <div className='flex flex-row gap-3 text-sm text-zinc-500'>
                <div className='flex flex-row justify-center text-nowrap items-center dark:text-violet-200'> 
                    <IoEyeOutline />
                     <span> {view}  بازدید  |</span>
                  </div>
                  <div className='flex flex-row justify-center text-nowrap items-center dark:text-violet-200'> 
                  <CiCalendarDate />
                     <span>{date}</span>
                  </div>
                </div>
                <p className="mt-10 font-normal text-violet-700 h-[2rem] overflow-hidden text-ellipsis dark:text-violet-200">{description}</p>
            </div>
            <div className='flex justify-end items-end mb-10'>
           <Link  to={`/news/${id}`} className="relative align-bottom md:items-center dark:hover:bg-violet-800 hover:bg-violet-800 dark:bg-violet-900 ml-2 p-3 rounded-lg w-36 font-medium text-center text-sm text-violet-600 hover:text-violet-200 focus:outline-none focus:ring-4 focus:ring-violet-300 dark:text-violet-200 dark:focus:ring-violet-900">
             ادامه مطلب
             <svg className="left-5 absolute flex -mt-3 w-3 h-2 transform rotate-180"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
             </svg>
           </Link>
           </div>
         </div>
      </div> 
  ) 
  }  





export default CardNews
