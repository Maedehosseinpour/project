import { Formik , Field , Form  } from "formik";
import { Link } from "react-router-dom";
import { useState } from 'react';
// import { Stepper, Button, Group } from '@mantine/core';
import './StyleStepper.css'
// import axios from "axios"
 import http from "../../core/services/interceptore"
 import { useSelector } from "react-redux";
 import { useDispatch } from "react-redux";
 import {onphoneNumberChange} from '../../redux/slices/phoneNumber'


const FirstSection = ({description , setCount}) => {
    const dispatch = useDispatch()

    const handleSubmit =async (values) =>{

        dispatch(onphoneNumberChange(values.phoneNumber))

        const res=await http.post('/Sign/SendVerifyMessage',values)

        console.log(res);

        if(res.success===true){
            setCount(2)
        }

    }
    return (  
        <div className="w-full dark:bg-violet-950 dark:text-violet-200">
            <div className="text-right mt-4 mr-7 w-full text-[#A193FF] text-nowrap"> {description}</div>
            <Formik initialValues={{phoneNumber:''}} onSubmit={handleSubmit}>
                <Form className="">
                    <div className="flex flex-col mt-3 w-full">
                        <div className="flex flex-col w-[80%]" >
                            {/* <label for="email" className="my-1 mr-6 text-[16px] text-nowrap"> شماره موبایل یا ایمیل </label> */}
                            
                            <Field id="email" className="border-[#a193ff] border-2 my-4 mr-6 pr-3 rounded-lg w-full h-10" type='text' name='phoneNumber' placeholder='   شماره موبایل خود را وارد کنید '/>
                        </div>
                    </div>
                    <div className="mt-4 mr-6 w-[80%]">
                    <button className="flex justify-center bg-gradient-to-r from-[#7b2aff] to-[#4545ff] mx-auto mb-5 py-4 md:py-6 rounded-lg w-[60%] font-bold text-center text-nowrap text-sm text-white md:text-lg" type="submit" >  دریافت کد یک بار مصرف </button>
                    </div>
                </Form>    
            </Formik>  
            <div className="flex flex-row justify-between mt-8 mr-7 pb-8 w-[80%] md:w-[90%] text-[#A193FF] text-[16px] text-center text-nowrap md:text-[18px]">
                

                {/* <div className="bg-[#E7E2FF] px-4 py-2 rounded-md text-[#A193FF]">مرحله قبل</div> */}
            </div>
            <div className="flex justify-around items-center mx-auto pb-1 w-[80%] md:w-[90%] 2xl:max-w-2xl text-[#3F40EA] text-center">
                            <div className="flex justify-center items-center border-[#A193FF] border-4 rounded-full w-[41px] h-[41px]">3</div>
                            <div className="border-[#A193FF] border-4 mt-[8px] w-2/5 h-0"></div>
                            <div className="flex justify-center items-center border-[#A193FF] border-4 rounded-full w-[41px] h-[41px]">2</div>
                            <div className="border-[#8735F5] border-4 mt-[8px] w-2/5 h-0"></div>
                            <div className="flex justify-center items-center border-[#8735F5] border-4 bg-[#8735F5] rounded-full w-[41px] h-[41px]">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.31066 9.56434C4.72487 8.97855 3.77513 8.97855 3.18934 9.56434C2.60355 10.1501 2.60355 11.0999 3.18934 11.6857L5.31066 9.56434ZM9.25 15.625L8.18934 16.6857C8.50711 17.0034 8.9506 17.162 9.39781 17.1177C9.84501 17.0734 10.2488 16.831 10.4981 16.4571L9.25 15.625ZM17.9981 5.20705C18.4576 4.51776 18.2713 3.58645 17.5821 3.12692C16.8928 2.6674 15.9615 2.85366 15.5019 3.54295L17.9981 5.20705ZM3.18934 11.6857L8.18934 16.6857L10.3107 14.5643L5.31066 9.56434L3.18934 11.6857ZM10.4981 16.4571L17.9981 5.20705L15.5019 3.54295L8.00192 14.7929L10.4981 16.4571Z" fill="white"/>
                                </svg>
                            </div>
            </div>
            <div className="flex justify-between items-center mx-auto pb-4 w-[80%] md:w-[90%] 2xl:max-w-2xl text-[12px] text-center">
                            <div className="text-[#A193FF] text-nowrap dark:text-violet-200">مشخصات کاربری</div>
                            
                            <div className="text-[#A193FF] text-nowrap dark:text-violet-200" >دریافت کد</div>
                            
                            <div className="text-[#4E447D] text-nowrap dark:text-violet-200">شماره تماس</div>
            </div>
                {/* <div className="flex flex-row justify-between mt-8 mr-7 pb-8 w-[80%] md:w-[90%] text-[#A193FF] text-[16px] text-center text-nowrap md:text-[18px]">
                {steper()}
                </div> */}
        </div> 
     );
}
 
export default FirstSection;