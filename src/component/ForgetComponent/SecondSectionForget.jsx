import { Formik , Field , Form  } from "formik";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from "react-redux";


const SecondSectionForget = ({setCount , description}) => {
    const phoneNumber = useSelector(state => state.userPhoneNumber.phoneNumber)
    console.log(phoneNumber);

    const handleSubmit =async (values) =>{
        
        //  const res=await http.post('/Sign/VerifyMessage',values)

        //  console.log(res);

        //  if(res.success===true){
        //      setCount(3)
        //  }
    }


    return ( 
        <div className="w-full dark:bg-violet-950 dark:shadow-2xl dark:shadow-violet-600 dark:text-violet-200">
            <div className="w-full text-right mt-4 mr-7 text-[#A193FF] text-nowrap dark:text-violet-200"> شماره و کد را وارد کنید</div>
            <Formik initialValues={{email:'' ,verifyCode:''}} onSubmit={handleSubmit}>
                <Form className="">
                    <div className="w-full mt-3 flex flex-col">

                        <div className="w-[80%] flex flex-col" >
                            {/* <label for="email" className=" text-[16px] mr-6 text-nowrap my-1 "> شماره موبایل یا ایمیل </label> */}
                            
                            <Field id="verifyCode" className="w-full h-10 rounded-lg pr-3 my-4 border-2 border-[#a193ff] mr-6" type='text' name='verifyCode' placeholder='   کد  خود را وارد کنید '/>
                        </div>
                    </div>
                    <div className="w-[80%] mr-6 mt-4">
                    <button className="flex justify-center mb-5 text-sm md:text-lg font-bold mx-auto text-nowrap 
                    rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-4 md:py-6 text-center  
                    text-white " type="submit" >  تائید کد یک بار مصرف </button>
                    </div>
                </Form>    
            </Formik>  
            <div className="flex flex-row justify-between w-[80%] md:w-[90%] text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
                

                <div className="text-[#A193FF] bg-[#E7E2FF] py-2 px-4 rounded-md" onClick={() => setCount(1)}>مرحله قبل</div>
            </div>
            <div className="flex w-[80%] md:w-[90%] pb-1 text-[#3F40EA] mx-auto justify-around items-center text-center 2xl:max-w-2xl">
                            <div className=" border-4 w-[41px] h-[41px] rounded-full border-[#A193FF] flex items-center justify-center">3</div>
                            <div className="w-2/5 border-4 h-0 mt-[8px] border-[#8735F5]"></div>
                            <div className="border-4  w-[41px] h-[41px] rounded-full border-[#8735F5] bg-[#8735F5] flex items-center justify-center">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.31066 9.56434C4.72487 8.97855 3.77513 8.97855 3.18934 9.56434C2.60355 10.1501 2.60355 11.0999 3.18934 11.6857L5.31066 9.56434ZM9.25 15.625L8.18934 16.6857C8.50711 17.0034 8.9506 17.162 9.39781 17.1177C9.84501 17.0734 10.2488 16.831 10.4981 16.4571L9.25 15.625ZM17.9981 5.20705C18.4576 4.51776 18.2713 3.58645 17.5821 3.12692C16.8928 2.6674 15.9615 2.85366 15.5019 3.54295L17.9981 5.20705ZM3.18934 11.6857L8.18934 16.6857L10.3107 14.5643L5.31066 9.56434L3.18934 11.6857ZM10.4981 16.4571L17.9981 5.20705L15.5019 3.54295L8.00192 14.7929L10.4981 16.4571Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="w-2/5 border-4 h-0 mt-[8px] border-[#8735F5]"></div>
                            <div className="border-4  w-[41px] h-[41px] rounded-full bg-[#8735F5] border-[#8735F5] flex items-center justify-center">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.31066 9.56434C4.72487 8.97855 3.77513 8.97855 3.18934 9.56434C2.60355 10.1501 2.60355 11.0999 3.18934 11.6857L5.31066 9.56434ZM9.25 15.625L8.18934 16.6857C8.50711 17.0034 8.9506 17.162 9.39781 17.1177C9.84501 17.0734 10.2488 16.831 10.4981 16.4571L9.25 15.625ZM17.9981 5.20705C18.4576 4.51776 18.2713 3.58645 17.5821 3.12692C16.8928 2.6674 15.9615 2.85366 15.5019 3.54295L17.9981 5.20705ZM3.18934 11.6857L8.18934 16.6857L10.3107 14.5643L5.31066 9.56434L3.18934 11.6857ZM10.4981 16.4571L17.9981 5.20705L15.5019 3.54295L8.00192 14.7929L10.4981 16.4571Z" fill="white"/>
                                </svg>
                            </div>
            </div>
            <div className="flex w-[80%] md:w-[90%] pb-4 mx-auto justify-between items-center text-center text-[12px] 2xl:max-w-2xl">
                            <div className="  text-[#A193FF] text-nowrap dark:text-violet-200"> تغییر رمز عبور</div>
                            
                            <div className="   text-[#A193FF] text-nowrap dark:text-violet-200" >دریافت کد</div>
                            
                            <div className=" text-nowrap text-[#4E447D] dark:text-violet-200">شماره تماس</div>
            </div>
                {/* <div className="flex flex-row justify-between w-[80%] md:w-[90%] text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
                {steper()}
                </div> */}
        </div> 
     );
}
 
export default SecondSectionForget;