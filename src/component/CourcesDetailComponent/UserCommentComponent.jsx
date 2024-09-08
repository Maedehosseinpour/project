import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import AllButton from '../../common/button/AllButton'
import { useParams } from 'react-router-dom'
import http from '../../core/services/interceptore'


// send comment user
const UserCommentComponent = () => {
  const {id} = useParams()
  const [startDate, setStartDate] = useState(new Date());
  

  const handleCommentSubmit = async() => {
    // return(console.log('jjjjjj'))
    const data = new FormData()
    const keys = Object.keys(values)
    console.log('data' , keys);

    keys.forEach(Key => {
      const Item = values[Key]
      data.append(Key, Item)
    });
    const respon= await http.post('/Course/AddCommentCourse' , {data:data})
    console.log('kkkkkkkkkkkkkkkk' , respon);
      refetch()
  }

  return (
    <div className='flex flex-col justify-center items-center md:items-start px-1 w-full' >
       {/* <CourseProudactMenuTabUL/> */}
       <div className='flex flex-col justify-center items-start mt-10 p-5 w-96 h-10'>
            <span className='pt-5 text-2xl dark:text-violet-200'>افزودن نظر</span>
            <div className='flex gap-10 mb-10 dark:text-violet-200' >
                <span> بهار</span>
                <span>{String(startDate)}</span>
            </div>

       </div>
       <div className='w-full'>
        <Formik initialValues={{
            CourseId:id,
            Title: "",
            Describe: "",
          }}
          onSubmit={ handleCommentSubmit}>
            <Form className="m-5 mx-auto max-w-sm md:max-w-full dark:text-violet-200 leading-5">
                <Field id="Title" name='Title' type='text' rows="1" className="block border-[#9293FF] border-2 dark:border-indigo-600 bg-gray-50 dark:bg-violet-900 my-5 p-2.5 focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-full text-gray-900 text-sm focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500" placeholder="عنوان پیام را وارد کنید"></Field>
                <Field id="Describe" name="Describe" type='text'  rows="4" className="block h-28 border-[#9293FF] border-2 dark:border-indigo-600 bg-gray-50 dark:bg-violet-900 p-2.5 focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-full text-gray-900 text-sm focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500" placeholder="پیام خود را وارد کنید..."></Field>
            </Form>
        </Formik>
        <div className="flex justify-center md:justify-start"><AllButton type='submite'  title=" ثبت دیدگاه"/></div>
       </div>
       
    </div>
  )
}

export default UserCommentComponent
