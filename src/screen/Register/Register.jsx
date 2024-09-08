import register from "../../assets/image/Login/RegisterNew 2.png"
import elipse1 from "../../assets/image/Login/Ellipse1.png"
import elipse2 from "../../assets/image/Login/Ellipse2.png"
import elipse3 from "../../assets/image/Login/Ellipse3.png"

import RegisterForm from "../../component/RegisterComponent/RegisterForm";
import License from "../../component/LoginComponent/License";
const Register = () => {
    return ( 
        <>
             <div className="w-[80%] h-[80%] md:w-[48rem] md:h-[30rem] lg:w-[64rem] lg:h-[32rem] 
             xl:w-[80rem] xl:h-[32rem] mx-auto flex flex-col items-center mt-5 md:mt-[8rem] 
              md:flex-row md:justify-center md:items-center dark:bg-violet-950 
             dark:text-violet-200 ">
                    <div className="w-full h-1/3 md:w-1/3 md:h-full dark:shadow-2xl dark:shadow-violet-600 bg-white dark:bg-opacity-0 bg-opacity-35 
                    rounded-t-2xl md:rounded-t-none md:rounded-r-2xl  
                    z-10 ">
                        <img className="object-contain w-full h-full" src={register} />
                    </div>
                    <div className="w-full h-2/3 md:w-2/3 md:h-full  bg-white bg-opacity-85 
                    rounded-b-2xl md:rounded-b-none  md:rounded-l-2xl z-10 ">
                    <RegisterForm title='ثبت نام'
                    description='جهت دریافت کد یک بار مصرف شماره تلفن خود را وارد کنید.' />  
                    </div>
            </div>
        </>
     );
}
 
export default Register;



{/* <div className="w-full bg-bluec relative h-auto md:h-[100vh]  ">
            
            <div className="w-full h-full md:w-[90%] md:mx-auto flex flex-col items-center md:flex-row md:justify-center md:items-center">
            <div className="w-[70%]  bg-white  bg-opacity-35 rounded-t-lg  
            md:rounded--lg z-10 md:w-1/3 md:h-[60%] 2xl:max-w-xl ">
                <img className="object-contain sm:w-full sm:h-full" src={register} />
            </div>
            <div className="w-[70%] bg-white bg-opacity-85 rounded-b-lg  md:rounded-l-lg z-10 md:w-2/3 md:h-[60%]">
               <RegisterForm title='ثبت نام'
               description='جهت دریافت کد یک بار مصرف شماره تلفن خود را وارد کنید.' />
            </div>
               
            </div>
            
            <div>
                <div className="absolute top-[15rem] right-1 rounded-full "><img className="w-[18rem] h-[18rem]" src={elipse1} alt="" /></div>
                <div className="absolute top-[30rem] left-5 rounded-full md:top-[22rem]"><img className="w-[12rem] h-[12rem]" src={elipse2} alt="" /></div>
                <div className="absolute top-9 left-5 rounded-full md:top-7 "><img className="w-[18rem] h-[18rem]" src={elipse3} alt="" /></div>
            </div>
            <div className="w-full ">
            <License />
            </div>
           
        </div> */}