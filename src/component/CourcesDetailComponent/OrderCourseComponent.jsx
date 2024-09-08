import React from 'react'
import { Cardcomponentcourses } from '../CourseComponent/Cardcomponentcourses'
import http from '../../core/services/interceptore'
import { useQuery } from 'react-query';

// component end order course
const OrderCourseComponent = () => {
  const getCourseList = async () => {
  const res = await http.get(
    `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6&SortingCol=Active&SortType=DESC&TechCount=0`
  );
  return res;
};
const {
  data,
  isLoading,
  isError,
  error,
  refetch
} = useQuery("courseList", getCourseList);
  return (
    <div className='dark:border-violet-800 dark:border-2 bg-[#D7D5FF] dark:bg-violet-950 mx-auto mt-10 py-10 w-[90%]'>
      <h2 className='m-10 text-[#3B3CA7] text-3xl dark:text-violet-200'>دیگر دوره های ما:</h2>
      <Cardcomponentcourses data={data && data}/>
    </div>
  )
}

export default OrderCourseComponent
