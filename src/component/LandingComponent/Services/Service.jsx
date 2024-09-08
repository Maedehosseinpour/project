import React from "react"
import  ServiceCart  from "./SerrviceCart"
import simpleService from '../../../assets/image/simple.png'
import jobOpportunity from '../../../assets/image/forsat.png'
import ValidCertificate from '../../../assets/image/madrak.png'

export const Service = () => {
    const service = [
        {
        "title":"سادگی خدمت" ,
        "img": simpleService ,
        "description" : "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
    },
    {
        "title":"فرصت شغلی " ,
        "img": jobOpportunity ,
        "description" : "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
    },
    {
        "title":"مدرک معتبر" ,
        "img": ValidCertificate ,
        "description" : "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
    }
    ]
    return (
        <div >
        <div className="flex flex-col items-center dark:bg-violet-950 mt-24 w-full text-lg md:text-nowrap md:text-2xl">
            <span className="block w-16 md:w-28 text-[#121242] md:text-2xl dark:text-violet-200">خدمات ما</span>
            <span className="block bg-gradient-to-l via-transparent to-transparent py-[2px] from-borderGradiant w-16 md:w-28"></span>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="flex md:flex-row flex-col md:justify-center items-end gap-5 dark:bg-violet-950 mx-auto mt-10 p-5 w-[90%] h-auto dark:text-violet-200" data-aos="fade-up" data-aos-duration="2000" >
            {service.map((service , index) => {
                return (
                    <ServiceCart title={service.title} image={service.img} description={service.description}/>              
                )
            })}
        </div>

        </div>
    )    
}

