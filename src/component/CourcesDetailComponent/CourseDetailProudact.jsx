import React from 'react'
import AllButton from '../../common/button/AllButton'
import student from '../../assets/image/SVG/student.svg'
import statos  from '../../assets/image/SVG/status.svg'
import datacours from '../../assets/image/SVG/datacours.svg'
import TeacherIntroducing from './TeacherIntroducing'
import http from '../../core/services/interceptore'
import { useParams } from 'react-router-dom'


// left component detail course
const CourseDetailProudact = ({data , refetch}) => {

  const params= useParams()
  
  const isCourseReseve = data?.isCourseReseve
 
     


  const handleReserveCourse = async() => {

    const res = await http.post('/CourseReserve/ReserveAdd?=' ,{courseId:params.id} )
    refetch()
     
    if(isCourseReseve===0){
    //   console.log(isCourseReseve);
      const res = await http.post('/CourseReserve/ReserveAdd?=' ,{courseId:params.id} )
      console.log(res);
      refetch()
      // toast('به لیست علاقه مندی اضافه شد ')
    }
    // else{
    //   // const obj ={CourseFavoriteId:userFavoriteId}
    //   const data = new FormData()
    //   data.append('CourseFavoriteId' , userFavoriteId)
    //   const res1= await http.delete('/Course/DeleteCourseFavorite' , {data:data})
    //   refetch()
    // }
  }
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className='flex flex-col justify-start items-center dark:bg-violet-950 py-10 rounded-lg md:w-full h-auto'>
      <div className='flex flex-col justify-start items-center bg-[#D7D5FF] dark:bg-violet-900 shadow-bg-bluec shadow-xl pt-10 rounded-md w-[520px] md:w-[90%]'>
        <div className='flex justify-center items-center border-[#3D00B1]/20 dark: border-indigo-600 border-b-2 w-[90%] h-16 text-[#210654] dark:text-violet-200'><h1>مشخصات دوره</h1></div>
        <div className='flex flex-col justify-between items-center border-[#3D00B1]/20 dark: border-indigo-600 border-b-2 divide-y divide-[#3D00B1]/20 dark:divide-indigo-600 w-[90%]'>
           <div className='flex flex-row justify-between items-center w-[100%] h-20'>
               <div className='flex items-center gap-2'>
                 <img src={student} alt="" />
                 <p className='text-[#03001C]/50 dark:text-violet-200'>تعداد دانشجو </p>
                </div>
                <h6 className='text-[#2C007F] dark:text-violet-200'>{data?.currentRegistrants} </h6>
            </div> 
            <div className='flex flex-row justify-between items-center w-[100%] h-20 ny-3'>
              <div className='flex items-center gap-2'>
                 <img src={statos} alt="" />
                 <h6 className='text-[#03001C]/50 dark:text-violet-200'> وضعیت دوره</h6>
               </div>
                <h6 className='text-[#2C007F] dark:text-violet-200'>{data?.courseStatusName}   </h6>
            </div>
            <div className='flex flex-row justify-between items-center w-[100%] h-20 ny-3'>
             <div className='flex items-center gap-2'>
                 <img src={datacours} alt="" />
                <h6 className='text-[#03001C]/50 dark:text-violet-200'>تاریخ شروع </h6>
                </div>
                <h6 className='text-[#2C007F] dark:text-violet-200'>{data?.startTime} </h6>
            </div>
            <div className='flex flex-row justify-between items-center w-[100%] h-20 bo ny-3'>
              <div className='flex items-center gap-2'>
                 <img src={datacours} alt="" />
                <h6 className='text-[#03001C]/50 dark:text-violet-200'>تاریخ  پایان</h6>
                </div>
                <h6 className='text-[#2C007F] dark:text-violet-200'>{data?.endTime} </h6>
            </div>
            
        </div> 
        <div className='mt-12 w-96 md:w-64 lg:w-72'>
          <h5 className='flex justify-center items-center border-2 border-indigo-600 mt-5 rounded-lg h-16 dark:text-violet-200'>قیمت:  {data?.cost} </h5></div>
        <div className='py-8 w-96 md:w-72 lg:w-96'> <AllButton handleReserveCourse={handleReserveCourse}  title="ثبت نام در دوره"/></div>   
      </div>
    
      <div className='shadow-[#B48DFF4D] mt-10 md:w-'>
        <TeacherIntroducing data={data && data} />
      </div>
    </div>
  )
}

export default CourseDetailProudact
