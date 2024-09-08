import React from 'react'
// import PreviewDropdown from './PreviewDropdown'
import Ulpic from "../../assets/image/Ulpic.png"
const PreviewCourseComponent = () => {

 
  return (
    <div className='bg-[#D7D5FF] w-full'>
      <h1 className='my-10 px-10 text-[#2A0078] text-2xl'>پیش نمایش های دوره اموزشی html </h1>
      <div className='flex justify-center items-center'>
         {/* <PreviewDropdown/>  not api to img    */}
         <img src={Ulpic} alt="" />
      </div>
    </div>
  )
}

export default PreviewCourseComponent
