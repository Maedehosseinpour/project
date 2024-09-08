import React from 'react'



const DetailsTap1Component = ({data}) => {
  return (
    <div className='bg-[#D7D5FF] dark:bg-violet-950 w-full'>
      <div className="bg-[#D7D5FF] dark:bg-violet-950 mx-auto p-2 md:p-10 w-[95%] text-justify leading-10" >
          <div className='mx-auto w-full'>
          <h2 className="my-10 mb-3 text-[#2A0078] text-2xl dark:text-violet-200"> {data?.title} </h2>
          <p className="my-5 text-xl dark:text-violet-200 leading-10">  {data?.miniDescribe}          </p>
        </div>
        <div>
            <h2 className="mb-3 text-[#2A0078] text-2xl dark:text-violet-200">اموزش رایگان html برای چه کسانی مناسب است ؟</h2>
            <p className="text-xl dark:text-violet-200 leading-10 xy-5">{data?.describe}


            </p>
        </div>
        
      </div>
    </div>
  )
}

export default DetailsTap1Component
