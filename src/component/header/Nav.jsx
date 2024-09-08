import { Link } from "react-router-dom"; 
import { Menu } from "./Menu";
import { Logo } from "./Logo";
import { Leftmenu } from "./Leftmenu";
import { useLocation } from "react-router-dom";
export const Nav = () => {
  
  const bgLocation = useLocation();
  const bgColor = location.pathname=='/' ? `bg-violec` : `bg-[#B4B4FF] dark:bg-violet-950 dark:text-violet-200 `; 
 
  return (
    <>
      <div className={`flex h-24 w-full flex-row items-center justify-around ${bgColor} `}>
        <div className="order-2 sm:order-1 min-w-44 max-w-44">
        <Logo />
        </div>
        <div className="flex sm:justify-center order-1 sm:order-2 w-16 sm:w-3/5 md:text-2xl">
         <Menu />  
        </div>
         <div className="order-3">
        <Leftmenu /> 
        </div>    
      </div>
      
    </>
  );
};
