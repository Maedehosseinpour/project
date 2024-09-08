import React from 'react'
import SiteUserComponent from './SiteUserComponent'
import RerplayCommentUser from './RerplayCommentUser'
import comment from '../../assets/image/SVG/comment.svg'
import SiteUserComentCourse from './SiteUserComentCourse'
import { getList } from '../../function/getList'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
// comment all user

const AllUsersCommentCourse = ({id}) => {
  const params = useParams();
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("comentCourse", () =>
    getList(`/Course/GetCourseCommnets/:CourseId=${params.id}`)
  );

  

  
  return (
    <div className='dark:border-violet-800 dark:border-2 bg-[#D7D5FF] dark:bg-violet-950 mx-auto mt-10 p-8 w-[90%]'>    

      <div className='flex gap-5 border-[#3F40EA]/20 border-[#D7D5FF] mx-auto my-10 px-10 p-10 border-b-2 w-[90%] text-[#3B3CA7] text-lg md:text-2xl dark:text-violet-200'>
       <img src={comment} alt="" />
         <p >نظرات کاربران در رابطه با این دوره </p>
      </div>
      
       <div className='p-10' >
        {data?.map(item => {
         
          return(<div ><SiteUserComentCourse key={item.id} refetch={refetch} dataComent={item}/></div>)
        })}
        
        </div> 
        {/* <div className='flex flex-col bg-[#CFCEFF] dark:bg-violet-900 mx-auto p-10 pb-5 rounded-3xl w-[95%]'>
          <SiteUserComponent/>
          <RerplayCommentUser/>
        </div>
        <div  className='p-10'><SiteUserComponent/> </div> */}
       
    </div>
    
  )
}

export default AllUsersCommentCourse
