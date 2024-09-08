import { Link, useNavigate } from "react-router-dom";
import { CustomGetUseQueryExtra } from "../../customHook/CustomGetUseQueryExtra";
import UserAccount from "../EditAccount";

export const DashboardTopComponent = () => {

  const navigat = useNavigate()
  const { data } = CustomGetUseQueryExtra(
    "getProfileInfo",
    `/SharePanel/GetProfileInfo`
  );


  return (
    <>
      <div
        className="dark:bg-violet-950  dark:text-violet-200 relative flex justify-between flex-wrap flex-row  gap-5 border-2
       border-slate-400 rounded-lg m-3 p-5 "
      >
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500 dark:text-violet-200">
          نام و نام خانوادگی :
          <span className="text-fuchsia-700  dark:text-slate-300">
            {data?.fName}
            {"  "} {data?.lName}
          </span>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500 dark:text-violet-200">
          تاریخ تولد :
          <span className="text-fuchsia-700  dark:text-slate-300">
            {"   "}
            {data?.birthDay}
          </span>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500 dark:text-violet-200">
          شماره همراه :
          <span className="text-fuchsia-700  dark:text-slate-300">
            {"   "}
            {data?.phoneNumber}
          </span>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500 dark:text-violet-200">
          شماره ملی :
          <span className="text-fuchsia-700  dark:text-slate-300">
            {"   "}
            {data?.nationalCode}
          </span>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] text-slate-500 dark:text-violet-200">
          ایمیل :
          <span className="text-fuchsia-700  dark:text-slate-300">
            {"   "}
            {data?.email}
          </span>
        </div>

        <div className="  w-full md:w-[45%] lg:w-[30%]">
          <Link
            className="text-fuchsia-700  dark:text-slate-300 absolute left-0 bottom-0 h-[2rem] 
          border-2 rounded-tr-lg border-slate-400 rounded-bl-lg
          text-center px-5 py-1 mb-[-1px] ml-[-1px] cursor-pointer hover:bg-bluec dark:hover:bg-violet-8 00 bg-opacity-50"
            to= '/profile/useracount'
          >
            ویرایش
          </Link>
        </div>
      </div>
    </>
  );
};
