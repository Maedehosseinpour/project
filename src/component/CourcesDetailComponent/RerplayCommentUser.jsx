import React from 'react'
import UserSite2 from './../../assets/image/N1.jpg'
// replay comment user
const RerplayCommentUser = () => {
  return (
    <div className='flex border-[#3D4AEE] dark:border-2 dark:border-indigo-600 bg-[#C7C6FF] dark:bg-violet-950 mx-auto border-r-4 rounded-lg w-[90%] h-[170px]'>
    <div className='flex justify-center items-center w-[20%] md:w-[15%]'><img className='rounded-full w-24 h-24' src={UserSite2} alt="" /></div>
    <div className='px-5 w-[80%] h-24'>
      <div  className='flex mt-5'>
          <h3 className='text-[#121242] dark:text-violet-200'>کاربر سایت -  </h3>
          <span className='text-[#2b2b70] dark:text-violet-200'>ارسال شده در 1403/2/01</span>
      </div>
      <div className='my-5 text-[#3B3CA7] dark:text-violet-200'> <span> عنوان : ریپلای کامنت   </span></div>
      <div className='my-5 text-[#3B3CA7] dark:text-violet-200'> <p>ممنون بابت دوره، اما میتونست بیشتر باشه و علاوه بر اشاره به یک نکته به نکات دیگه </p>
      </div>
     
    </div>
  </div>
  )
}

export default RerplayCommentUser
