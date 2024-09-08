import React, { useEffect } from 'react'
import { CoursesComponent } from '../../component/CourseComponent/CouecesMainPage/CoursesComponent'
import deskImage from '../../assets/image/SVG/Rectangle 90.svg'

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0,0)
}, []);
  return (
    <div className='w-full' >
      <CoursesComponent/>
    </div>
  )
}

export default Courses
