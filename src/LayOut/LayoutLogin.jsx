import { Outlet } from "react-router-dom";
import { Login } from "../screen/Loginpage/Login";
import elipse1 from "../assets/image/Login/Ellipse1.png";
import elipse2 from "../assets/image/Login/Ellipse2.png";
import elipse3 from "../assets/image/Login/Ellipse3.png";
import License from "../component/LoginComponent/License";

const LayoutLogin = () => {
  return (
    <>
      <div className="w-full bg-[#d7d5ff]">
        <div className="shadow-2xl shadow-bluec mx-auto m-w-[1920px]">
          <div
            className="md:h-svh  border-4 md:max-h-[840px] mx-auto shadow-2xl
             dark:bg-violet-950 dark:shadow-2xl dark:shadow-violet-600 dark:text-violet-200 
             shadow-[#d7d5ff] bg-bluec relative ">
            {/* CILDERN */}
            <div className="w-full ">
              <Outlet />
            </div>
            {/* BACKGROUND */}
            <div className="absolute top-[15rem] right-1 rounded-full dark:hidden ">
              <img className="w-[18rem] h-[18rem]" src={elipse1} alt="" />
            </div>
            <div className="absolute top-[25rem] left-5 rounded-full md:top-[22rem] ">
              <img className="w-[12rem] h-[12rem]" src={elipse2} alt="" />
            </div>
            <div className="absolute top-[25rem] left-5 rounded-full md:top-[22rem] invisible dark:visible dark:top-[5rem] dark:-right-2 ">
              <img className="w-[12rem] h-[12rem]" src={elipse2} alt="" />
            </div>
            <div className="absolute top-9 left-5 rounded-full md:top-7 ">
              <img className="w-[18rem] h-[18rem]" src={elipse3} alt="" />
            </div>

            {/* LICENSE */}
            <div className="w-full mt-4 md:absolute md:bottom-0 md:left-0">
              <License />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutLogin;

{
  /* <div className="w-[95%]  bg-red-500 h-lvh z-10 relative">
<div className=" flex flex-col max-w-screen-sm
md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 
max-h-lvh items-center md:flex-row md:justify-center mx-auto  ">

   <Outlet /> */
}
{
  /* <div className="w-[90%] h-1/3  bg-white/35  md:w-3/12  md:h-2/3 rounded-t-2xl md:rounded-t-none md:rounded-r-2xl"></div>
   <div className="w-[90%] h-2/3 bg-white/85 md:w-8/12 md:h-2/3 rounded-b-2xl md:rounded-b-none  md:rounded-l-2xl"></div> */
}

// </div>
// {/* circle Background */}
// <div className="absolute top-[15rem] right-1 rounded-full "><img className="w-[18rem] h-[18rem]" src={elipse1} alt="" /></div>
// <div className="absolute top-[30rem] left-5 rounded-full md:top-[22rem]"><img className="w-[12rem] h-[12rem]" src={elipse2} alt="" /></div>
// <div className="absolute top-9 left-5 rounded-full md:top-7 "><img className="w-[18rem] h-[18rem]" src={elipse3} alt="" /></div>
// {/* license */}
// <div className="w-full relative -top-12 ">
//    <License />
// </div>
// </div>
