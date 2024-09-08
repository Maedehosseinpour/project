import { useEffect, useState } from "react";
import LeftMenu from "./LeftMenu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";
const TopMenu = ({menuName, setMenuName}) => {


  const lightMode = localStorage.getItem("theme")=== "light" ? true : false
  const [darkMode, setDarkMode] = useState(lightMode);

  const handleDark = () => {
    const themeLocal = localStorage.getItem("theme");
    if (themeLocal === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="w-[90%] flex flex-row justify-between mx-auto dark:bg-violet-950  dark:text-violet-200">
        <div className="flex flex-row gap-4 items-center dark:bg-violet-950  dark:text-violet-200">
          <div className="dark:bg-violet-950  dark:text-violet-200">
            <div onClick={handleNav} className="block lg:hidden">
              {!nav ? (
                <AiOutlineMenu className="cursor-pointer" size={30} />
              ) : (
                <AiOutlineClose size={30} className="z-[10] cursor-pointer" />
              )}
            </div>
            <div
              className={
                nav
                  ? "fixed z-[1]  h-full text-end bg-opacity-80 top-[5rem] right-[5rem] rounded-lg ease-in-out duration-500 lg:hidden"
                  : "fixed right-[-100%] "
              }
            >
              <LeftMenu setNav={setNav} setMenuName={setMenuName} />
            </div>
          </div>
          <div>{menuName}</div>
        </div>

        <div className="flex flex-row gap-4">
          <div onClick={handleDark} className="relative">
            {darkMode && (
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                onClick={() => setDarkMode(!darkMode)}
                xmlns="http://www.w3.org/2000/svg"
                className={`relative cursor-pointer stroke-[#3F40EA]`}
              >
                <path
                  d="M1 14.4762C1 22.4949 7.50041 28.9952 15.5191 28.9952C21.6287 
                  28.9952 26.8568 25.2216 29 19.8781C27.3277 20.5501 25.4978 20.9289 
                  23.5852 20.9289C15.5665 20.9289 9.06615 14.4286 9.06615 6.4099C9.06615 
                  4.50623 9.43935 2.66587 10.1054 1C4.76808 3.14611 1 8.3711 1 14.4762Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            {!darkMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setDarkMode(!darkMode)}
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                // stroke="currentColor"
                className={`cursor-pointer relative w-8 h-8 stroke-[#e3d4ff]`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 
                  18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 
                  12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="cursor-pointer hover:animate-[wiggle_1s_ease-in-out_infinite] text-[#3F40EA] dark:text-[#e3d4ff] w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="cursor-pointer w-8 h-8 text-[#3F40EA] dark:text-[#e3d4ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <div className="w-[90%] h-[1px] bg-slate-400 mx-auto mb-10"></div> */}
    </>
  );
};

export default TopMenu;
