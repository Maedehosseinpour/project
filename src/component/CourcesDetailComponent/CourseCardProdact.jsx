import React from 'react'

import notFound from '../../assets/image/Images-for-null 2.svg'
import { RatingStarComponent } from './RatingStarComponent';

// component star
 <RatingStarComponent/>

 const CourseCardProdact = ({data}) => {
   const noImage = data?.imageAddress=== null || data?.imageAddress === 'undefined' || data?.imageAddress === ''
   

   return (
   //  component right top course
   <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000" className="flex flex-col justify-center items-center  dark:hover:bg-violet-800 dark:bg-violet-900 mx-auto mb-2 md:mb-10 md:ml-5 rounded-md w-[520px] md:w-full">
     <div className="mx-auto my-5 px-8 rounded-t-lg md:rounded-none md:rounded-s-lg w-full h-auto">
      <object data="" type=""></object><img className="mx-auto shadow-xl p-2 rounded-t-lg w-[90%] h-auto md:h-[35rem] object-cover"  src={noImage ? notFound : data?.imageAddress} alt="" />
     </div>
     <div className='w-full leading-8'>
        <div className="flex flex-col md:justify-start m-10 mx-auto px-5 w-[80%] md:w-[90%]">
           <div><h5 className="font-bold text-2xl text-indigo-900 md:text-3xl dark:text-white tracking-tight"> {data?.title}    </h5></div> 
           <div><p className="mt-10 font-normal text-gray-700 text-xl lg:text-2xl dark:text-gray-400"> {data?.courseStatusName} </p></div>
           <div className='flex justify-start items-center gap-5 mt-8'>
               <div><h5 className="font-bold text-indigo-900 text-wrap text-xl md:text-xl dark:text-white leading-8 tracking-tight">میزان رضایت مندی خود را نسبت به این دوره ثبت نمایید!</h5></div>
               <div><RatingStarComponent  /></div>
            </div>
       
           <div><h5 className="mt-5 font-bold text-indigo-900 text-xl md:text-sm dark:text-white tracking-tight"> آیا از این دوره راضی بودید ؟    </h5></div>
        </div>
       
     </div> 
   </div> 
  
  )
}

export default CourseCardProdact
