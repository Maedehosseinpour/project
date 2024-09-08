 
import License from "../../component/LoginComponent/License"
import login from "../../assets/image/Login/login.png"
import elipse1 from "../../assets/image/Login/Ellipse1.png"
import elipse2 from "../../assets/image/Login/Ellipse2.png"
import elipse3 from "../../assets/image/Login/Ellipse3.png"
import LoginForm from "../../component/LoginComponent/LoginForm"
import { Outlet } from "react-router-dom"

export const Login = () => {
    return(
       
        // <div className="bg-bluec w-full">
            
            <div className="flex md:flex-row flex-col md:justify-center items-center md:items-center dark:bg-violet-950 dark:shadow-2xl dark:shadow-violet-600 mx-auto mt-5 md:mt-[8rem] w-[80%] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] h-[80%] md:h-[30rem] lg:h-[32rem] xl:h-[32rem] dark:text-violet-200">
                <div className="bg-white bg-opacity-35 dark:bg-opacity-0 rounded-t-2xl md:rounded-t-none md:rounded-r-2xl w-full md:w-1/3 h-1/3 md:h-full">
                    <img className="w-full h-full object-contain" src={login} />
                </div>
                <div className="z-10 bg-white dark:bg-violet-950 bg-opacity-85 dark:shadow-2xl dark:shadow-violet-600 rounded-b-2xl md:rounded-b-none md:rounded-l-2xl w-full md:w-2/3 h-2/3 md:h-full dark:text-violet-200">
                <LoginForm />  
                </div>
            </div>
    //    </div>
        

        
    )
}