import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import { removItem } from "../../localStorage/localStorage";
import { CustomGetUseQueryExtra } from "../customHook/CustomGetUseQueryExtra";
const LeftMenu = ({setNav , setMenuName}) => {

    const {data} = CustomGetUseQueryExtra('getProfileInfoImage',`/SharePanel/GetProfileInfo`)
    const profileName= data?.fName +  ' ' +data?.lName
    

    const noName = profileName=="" || profileName=== undefined || profileName=== null 
     const navLinkClass = `text-white flex flex-row gap-3`

    const Navigate = useNavigate()
    const handleShow = (i) => {
        
        
        if(window.innerWidth <= 1027){
            setNav(false)
        }}
     const handleExit = () => {
        removItem('token')
        Navigate('/')
         }
    return ( 
        <>
         <div className="dark:from-violet-950 dark:shadow-xl pb-4 dark:shadow-violet-800 dark:to-violet-950 dark:text-violet-200 flex flex-col bg-gradient-to-b from-[#8C80F6] to-[#2E11B7] rounded-xl w-[22rem]">
            <ProfileImage />
            <div className="text-center text-white text-2xl text- mb-6"> {noName ? 'کاربر عزیز' : profileName}</div>
            <div className="w-[90%] mx-auto mb-3 h-[1px] bg-gray-300 "></div>
            <div className="w-full h-2/3 flex justify-start items-start px-4 text-nowrap text-white">
                <ul className="w-full hover: items-start">
                    <li className="menu p-4 w-full hover:bg-[#8C80F6] hover:dark:bg-violet-900 flex hover:rounded-lg hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
                        <NavLink className={({ isActive}) => isActive ? `${setMenuName('داشبورد ')}` + `${navLinkClass}` : `${navLinkClass}`} to='/profile' onClick={handleShow}>  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                        داشبورد 
                    </NavLink>
                    </li>
                    <li className="p-4 w-full hover:bg-[#8C80F6] hover:dark:bg-violet-900 hover:rounded-lg ">
                        <NavLink  className={({ isActive}) => isActive ? `${setMenuName('اطلاعات کاربری')}` + `${navLinkClass}` : `${navLinkClass}`}  to='/profile/useracount' onClick={handleShow}>  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        اطلاعات کاربری 
                    </NavLink>
                    </li>
                    <li className="p-4 w-full hover:bg-[#8C80F6] hover:dark:bg-violet-900 hover:rounded-lg">
                        <NavLink  className={`${navLinkClass}`} to='/' onClick={handleShow}>   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                        </svg>
                             خانه  
                        </NavLink>
                    </li>
                    <li className="p-4 w-full hover:bg-[#8C80F6] hover:dark:bg-violet-900  hover:rounded-lg">
                        <NavLink  className={({ isActive}) => isActive ? `${setMenuName('دوره های من')}` + `${navLinkClass}` : `${navLinkClass}`} to='/profile/myCorses' onClick={handleShow}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                            دوره های من 
                        </NavLink>
                    </li>
                    <li className="p-4 w-full hover:bg-[#8C80F6] hover:dark:bg-violet-900 hover:rounded-lg flex">
                        <NavLink  className={({ isActive}) => isActive ? `${setMenuName('دوره های مورد علاقه')}` + `${navLinkClass}` : `${navLinkClass}`} to='/profile/favoriteCourses' onClick={handleShow}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                            دوره های مورد علاقه 
                        </NavLink>
                    </li>
                    {/* <li className="p-4 w-full hover:bg-[#8C80F6] hover:dark:bg-violet-900 flex hover:rounded-lg">
                        <NavLink  className={({ isActive}) => isActive ? `${setMenuName('دوره های رزرو شده  ')}` + `${navLinkClass}` : `${navLinkClass}`} to='/profile/reservedCourses' onClick={handleShow}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                           دوره های رزرو شده  
                        </NavLink>
                    </li> */}
                    <li className="p-4 w-full hover:bg-[#8C80F6] hover:dark:bg-violet-900 hover:rounded-lg">
                        <NavLink  className={({ isActive}) => isActive ? `${setMenuName('تغییر رمز عبور ')}` + `${navLinkClass}` : `${navLinkClass}`} to='/profile/changePass' onClick={handleShow}>   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                        </svg>
                            تغییر رمز عبور 
                        </NavLink>
                    </li>
                    <li className="p-4 w-full hover:bg-[#8C80F6] hover:dark:bg-violet-900 hover:rounded-lg">
                        <NavLink className="text-white flex flex-row gap-3"  onClick={handleExit}>
                            
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                        </svg>
                            خروج از حساب کاربری 
                        </NavLink>
                    </li>
                    {/* <li className="p-4 w-full hover:bg-[#8C80F6] hover:rounded-lg">
                        <Link className="text-white flex flex-row gap-3" to='/' onClick={handleShow}>    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                            نظرات ثبت شده   
                        </Link>
                    </li> */}
                </ul>
            </div>
         </div>
        </>
     );
}
 
export default LeftMenu