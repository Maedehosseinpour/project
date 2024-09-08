import React from 'react'
import Typewriter from 'typewriter-effect'
import  Imagetop from '../../assets/image/workshop1.png'

const Topheaderseconde = () => {
  return (
   <div className=' dark:bg-violet-950 w-full'>
     <div className='flex md:flex-row flex-col justify-center md:items-center dark:bg-violet-950 mx-auto rounded-2xl w-[90%]'>
      <div className='flex flex-col justify-center items-center md:items-start md:my-8 p-10 w-[full] md:w-[45%]'>
        <div className='my-5 text-2xl text-nowrap text-violet-900 dark:text-violet-200' > <h5>مهمه از کی یاد می گیری؟</h5></div>
        <div className='my-10 font-bold text-3xl text-violet-900 md:text-start md:text-2xl dark:text-violet-200'> <h2>آموزش برنامه نویسی با بهترین ها</h2></div>
        <div className='text-2xl text-justify text-violet-800 text-wrap dark:text-violet-200 leading-10'><h1>آموزش برنامه نویسی یکی از دوره های محبوب در حوزه فناوری اطلاعات است.  </h1> 
        <Typewriter
                options ={{
                    strings:[
                        "  برنامه نویسی مهارتی است که به افراد امکان می دهد تا نرم افزار های کامپیوتری را ایجاد و توسعه دهند.",
                        "   برنامه نویسی مهارتی است که به افراد امکان می دهد تا نرم افزار های کامپیوتری را ایجاد و توسعه دهند",
                    ],
                    autoStart:true , 
                    loop:true,
                }}
              />
        </div>
      </div>
      <div className='flex justify-center md:justify-end items-center w-full md:w-[45%]'>
        <img src={Imagetop} alt="" />
      </div>
      
    </div>
   </div>
  
  )
  
}

export default Topheaderseconde
 