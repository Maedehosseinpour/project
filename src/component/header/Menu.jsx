
import {Link, NavLink} from "react-router-dom"
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai"
import { useState } from "react";
import { useLocation } from "react-router-dom";
export const Menu = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  const textLocation = useLocation();
  const textColor = location.pathname=='/' ? `text-[#E3d4ff]` : `text-[#3f40ea] dark:bg-violet-950 dark:text-violet-200`;
  const textColorHambergerMenu = location.pathname=='/' ? `text-violec` : `text-[#3f40ea] dark:bg-violet-950 dark:text-violet-200`;
  const displayMENU = location.pathname=='/' ? `hidden` : `block`;
  const activeMenu = `border-b-4 border-borderGradiant  border-gradient-to-l via-transparent to-transparent py-[2px] from-borderGradiant`

return (

  <div className="flex justify-center items-center px-4 h-24 text-nowrap">
    
    <ul className={`sm:flex sm:flex-row sm:flex-grow sm:items-center sm:gap-10 hidden  ${textColor}`}>
      <li className={` ${displayMENU} hover:transform hover:translate hover:scale-105 `} ><NavLink to="/" className={({ isActive}) => isActive && `${activeMenu}`}> صفحه اصلی</NavLink></li>
      <li className="p-4 hover:transform hover:translate hover:scale-105"><NavLink to="/courses" className={({ isActive}) => isActive && `${activeMenu}`}>دوره ها</NavLink></li>
      {/* <li className="p-4"><Link to="/">اساتید</Link></li> */}
      <li className="hover:transform hover:translate hover:scale-105"><NavLink to="/news" className={({ isActive}) => isActive && `${activeMenu}`} >  اخبار و مقالات </NavLink></li>
      {/* <li className="p-4"><Link to="/">ارتباط با ما</Link></li> */}
    </ul>

    <div onClick={handleNav} className="block sm:hidden">
        {!nav ? <AiOutlineMenu className={`cursor-pointer ${textColor}`} size={30} />
         : <AiOutlineClose size={30} className={`z-[3] cursor-pointer ${textColor}`} />  }       
    </div>
    
    <div className={nav ? "fixed z-[1] h-auto bg-opacity-90  text-right top-11 right-11 bg-white rounded-lg w-[80%] ease-in-out duration-500"
                        : "fixed right-[-100%]"} >
    <ul className={`p-4 ${textColorHambergerMenu}`}>
      <li className={`p-4 ${displayMENU}`}><Link to="/" onClick={()=>setNav(false)}> صفحه اصلی</Link></li>
      <li className="hover:shadow-lg p-4"><Link to="/courses" onClick={()=>setNav(false)}>دوره ها</Link></li>
      <li className="hover:shadow-lg p-4"><Link to="/news" onClick={()=>setNav(false)}>اخبار و مقالات</Link></li>
    </ul>
    </div>
  </div>

  // ************************

    );
  };
  
  {/* <div className="flex sm:flex-row-reverse flex-col-reverse flex-grow+ items-center gap-4 font-8">


<div className="absolute inset-0">
  <Link to="/course">دوره ها</Link>
</div>
<div>
  <Link to="/professor">اساتید</Link>
</div>
<div>
  <Link to="/contactus">ارتباط با ما</Link>
</div>
<div>
  <Link to="/news"> اخبار </Link>
</div>
</div> */}

