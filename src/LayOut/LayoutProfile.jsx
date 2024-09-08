import { Outlet } from "react-router-dom";
import ChangePass from "../component/ProfileComponent/ChangPass";
import LeftMenu from "../component/ProfileComponent/LeftMenu";
import TopMenu from "../component/ProfileComponent/TopMenu";
import UserAccount from "../component/ProfileComponent/EditAccount";
import { useState } from "react";

const LayoutProfile = () => {
  const [menuName , setMenuName] = useState('داشبورد')

  return (
    <>
      <div className="w-full bg-bluec h-screen dark:bg-violet-950  dark:text-violet-200">
        <div className="shadow-2xl shadow-[#d7d5ff] dark:shadow-xl dark:shadow-violet-800 pt-5 mx-auto ">
          {/* [#d7d5ff]  */}
          <div className="w-[95%] flex flex-col gap-3 mx-auto justify-center pt-6 md:flex-row">
            <div className="hidden lg:block lg:w-[22rem] bg-gradient-to-b from-[#8C80F6] to-[#2E11B7] rounded-xl ">
              <LeftMenu setMenuName={setMenuName} />
            </div>
            <div className="w-full rounded-xl bg-white flex flex-col dark:bg-violet-950 dark:text-violet-200">
              <div className=" h-[4rem] pt-3 mb-4 ">
                <TopMenu setMenuName={setMenuName} menuName={menuName} />
              </div>
              <div className=" h-[1px] bg-gray-400 mx-auto dark:bg-violet-950 dark:text-violet-200 "></div>
              <div className=" mb-2 ">
                {/* <ChangePass /> */}
                <Outlet />
                {/* <UserAccount /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutProfile;
