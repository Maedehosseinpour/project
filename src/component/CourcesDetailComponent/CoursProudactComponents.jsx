import React from "react";
import CourseDetailProudact from "./CourseDetailProudact";
import CourseCardProdact from "./CourseCardProdact";


//top component all component pruducts cource
const CoursProudactComponents = ({data , refetch}) => {
 
  return (
    
    <div className="dark:bg-violet-950 pt-5 w-full">
        <div className='md:w[95%] flex md:flex-row flex-col justify-center items-center dark:border-2 dark:border-violet-700 mx-auto mb-3 w-[90%]'>
              {/* component course detal right */}
            <div className='mt-12 md:pr-10 w-full md:w-[50%] lg:w-[65%]'>
                <CourseCardProdact data={data && data} />
            </div> 
            {/* component course detal left */}
            <div className='w-full md:w-[50%] lg:w-[35%]'>
            <CourseDetailProudact data={data && data} refetch={refetch}/>
            </div>
        </div>  
    </div>
  )
}

export default CoursProudactComponents
