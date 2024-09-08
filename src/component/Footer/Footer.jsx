import React from 'react'

import logo2 from "../../assets/image/Logo/logo2-2.png"
import location from "../../assets/image/Vector.svg"
import svg2 from "../../assets/image/Rectangle 109.svg"
import svg3 from "../../assets/image/Rectangle 110.svg"
import AdressShareComponent from './AdressShareComponent'


export const Footer = () => {
  return (
  
    <div className='bg-bluec dark:bg-violet-950 dark:shadow-xl dark:shadow-violet-700'>
      <div className="shadow-2xl shadow-violet-200 dark:shadow-2xl mx-auto max-w-[1920px]">
        <div className="bg-violet-950 dark:shadow-2xl dark:shadow-violet-600 rounded-tl-[9.5rem] w-full">
        <div className='flex md:flex-row flex-col justify-between items-center md:mb-10 border-b-2 border-b-violet-200 w-full'>
        <div className='md:w-[65%]' >
          <div className='relative flex justify-start px-20'>
            <img className='right-40 absolute mt-9 h-12' src={svg2} alt="logo2" />
            <img className='w-40 h-32' src={logo2} alt="logo" /> 
          </div>
          <div>
                <div className='relative flex justify-start my-4 md:text-xl'>
                  <img className='-top-14 left-12 md:left-20 absolute flex h-[6rem] md:h-[8rem]' src={svg3} alt="logo3" />
                  <h6 className='flex px-24 font-light text-start text-white text-wrap text-xl md:text-2xl leading-9'> هدف ما سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت نام</h6>
                </div>
                <div> 
                  <ul className='flex justify-center gap-8 md:gap-8 md:mt-14 mb-5 md:mb-2 text-white'>
                    <li className='py-6 text-sm md:text-xl lg:text-2xl'>دوره های آموزشی</li>
                    <li className='py-6 text-sm md:text-xl lg:text-2xl'>در باره ما</li>
                    <li className='py-6 text-sm md:text-xl lg:text-2xl'>قوانین</li>
                  
                    
                  </ul>
                </div>
          </div>
        </div>
          
          <div className='mx-auto md:w-[25%] text-center text-white w[30%]' >
            <div className='relative flex'>
              <img src={svg3} alt="" className='top-0 left-24 absolute flex h-20'/>
              <span className="w-full text-center text-sm text-white md:text-start md:text-lg md:leading-10">برای دریافت اخبار از طریق ایمیل ثبت نام کنید</span>
            </div>
            <form className='mt-4'>   
            
              <div className="relative inset-y-0 flex justify-center mb-3 w-full pointer-events-none ps-3 md:start-0">
                  <input type="email" id="ُSend" className="justify-center border-gray-300 dark:border-violet-600 bg-gray-50 dark:bg-violet-950 p-4 border focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-[25rem] md:w-[15rem] lg:w-[45rem] h-6 md:h-12 text-end text-sm text-violet-900 focus:ring-blue-500 dark:text-white dark:placeholder-violet-200 dark:focus:ring-blue-500" placeholder="MARFA@gmail.com" />
                  <button type="submit" className="md:right-7 bottom-1 absolute flex bg-[#6D20FF] hover:bg-blue-800 dark:hover:bg-blue-700 ml-8 px-10 py-1 rounded-lg md:h-10 font-medium text-end text-sm text-white start-5 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-violet-800">ارسال</button>
              </div>
            </form>
  
          </div>
        
        </div>
        {/* footer-adress */}
        <div className='flex justify-between items-center mx-auto w-[90%]'>
          
          <AdressShareComponent/>
          <div className='flex justify-center items-center w-52 md:w-[40%]'>
            <div><img className='w-4 h-3' src={location} alt=""/></div>
            <div><span className='text-white md:text-lg lg:text-xl'> ساری جاده فرح آباد</span></div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};
