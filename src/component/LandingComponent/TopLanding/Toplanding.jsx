import imgLanding from "../../../assets/image/main.jpg";
import coverLanding from "../../../assets/image/Rectangle 70.png";
import studdent from "../../../assets/image/student.png";
import teacher from "../../../assets/image/teacher.png";
import learn from "../../../assets/image/learn.png";
import http from "../../../core/services/interceptore";
import { useQuery } from "react-query";
import "../../../App/App.css";
import Typewriter from "typewriter-effect";
import React, { useRef, useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import html from "../../../assets/image/3.jpg";
import { Searching } from "./Searching";
import { toast } from "react-toastify";

export const Toplanding = () => {

  // *************VARIABLE****************
  
  const [show, setShow] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const mm = show
    ? `mt-[22rem] `
    : `bg-bluec , p-3 , text-black , rounded-lg ,mt-[0px]`;
  const ms = show ? ` hidden` : `block`;
  const msv = show ? `` : `top-[27px] left-[23px]`;
  const mi = show
    ? `ring-[#E3D4FF] ring-8 ring-opacity-30`
    : `ring-[#E3D4FF] ring-8 ring-opacity-0`;

  // *******************API LANDING REPORT******************
  const getLandingReport = async () => {
    const res = await http.get(`/Home/LandingReport`);
    return res;
  };
  const { data, isLoading, isError, error } = useQuery(
    "landingReport",
    getLandingReport
  );

  // *******************API SEARCH COURSE******************
  
  const getCourseSearch = async () => {
    try {
      const res1 = await http.get(
        `/Home/GetCoursesWithPagination?PageNumber=1&SortingCol=Active&SortType=DESC${searchQuery}&courseLevelId=&TeacherId=`
      );
      return res1;
    } catch {}
  };

  const {
    data: courseSearch,
    isLoading: courseIsLoading,
    isError: courseIsError,
    error: courseError,
    refetch: courseRefetch,
  } = useQuery(["courseListSearch", searchQuery], getCourseSearch);

  // *******************API SEARCH NEWS******************
  const getNewsSearch = async () => {
    const res2 = await http.get(
      `/News?PageNumber=1&SortType=DESC${searchQuery}`
    );
    return res2;
  };
  const {
    data: newsSearch,
    isLoading: newsIsLoading,
    isError: newsIsError,
    error: newsError,
    refetch: newsRefetch,
  } = useQuery(["newsListSearch", searchQuery], getNewsSearch);
  // *******************FUNCTION******************
  const ref = useRef();

  const handelSearch = (e) => {
    if (e.target.value == "") {
      setShow(true);
    } else {
      clearTimeout(ref.current);
      setShow(false);
      ref.current = setTimeout(() => {
        e.target.value && setSearchQuery(`&Query=${e.target.value}`);
      }, 800);

      !e.target.value && setSearchQuery(``);
    }
  };
  // *********************************************

  return (
    <div className="relative flex justify-center items-baseline w-full h-96 md:h-[46.8rem]">
      <div className="shadow-lg shadow-slate-600/50 rounded-bl-[9.5rem] w-full h-full overflow-hidden">
        <img src={imgLanding} className="bg-cover w-full h-full" alt="" />
      </div>
      <div className="absolute w-full h-full">
        <img
          src={coverLanding}
          className="bg-cover rounded-bl-[11.5rem] w-full h-full"
          alt=""
        />
      </div>
      <div className="absolute flex flex-col items-center mt-12 w-10/12 md:max-w-2xl h-5/6 text-white">
        <div className="text-[#d0cdff] md:text-xl">
          <span>پلتفرم آموزش طراحی وب</span>
        </div>
        <div className="mt-6 md:mt-10">
          <h1 className="text-3xl md:text-6xl">مرجع آموزش برنامه نویسی</h1>
        </div>
        <div className="mt-6 md:mt-14 text-[#f2e8ff] text-center text-lg text-wrap md:text-3xl leading-8 md:leading-[3.5rem]">
          <span>مرجع آموزش زنده و تعاملی دسترسی به بیش از هفت هزار </span>
          <Typewriter
            options={{
              strings: [
                "ویدیوی آموزشی به زبان فارسی",
                "ویدیوی آموزشی به زبان فارسی",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className={`absolute  w-full z-50 ${mm}`}>
          {/* **********************SEARCH INPUT*************************** */}
          <div>
            <input
              onChange={handelSearch}
              type="text"
              id="search"
              className={`md:top-80 text-right bg-[#F0E8FF] dark:bg-violet-950  pr-6 rounded-md w-full h-[3rem] dark:placeholder-violet-200 ${mi}`}
              placeholder="چه چیزی می خوای یاد بگیری..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className={`top-[0.8rem] left-3 absolute w-6 h-6 text-[#121242] dark:text-violet-200 text-opacity-40 ${msv}`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div
            className={`h-[200px] md:h-[20rem] overflow-y-scroll flex ${ms} dark:bg-violet-900`}
          >
            <div className="z-100 flex gap-5 bg-bluec dark:bg-violet-900 pt-5 w-full h-[250px]">
              <Searching
                courseSearch={courseSearch?.courseFilterDtos}
                newsSearch={newsSearch?.news}
              />
            </div>
          </div>
        </div>
        {/* ************************LANDING REPORT**************************** */}
        <div className="md:top-[28rem] absolute md:flex flex-row md:flex-row justify-evenly items-end hidden w-full">
          <div className="flex-col">
            <img src={teacher} className="w-[7.7rem] h-[7.7rem]" alt="" />
            <span className="block text-center">
              <CountUp
                end={data?.teacherCount}
                // duration="3"
              />
            </span>
            <span className="block text-center"> مدرس مجرب</span>
          </div>
          <div className="flex-col">
            <img src={learn} className="w-[8rem] h-[8rem]" alt="" />
            <span className="block text-center">
              <CountUp
                end={data?.courseCount}
                // duration="3"
              />
            </span>
            <span className="block text-center">دقیقه آموزش </span>
          </div>
          <div className="flex-col">
            <img src={studdent} className="w-[7.7rem] h-[7.7rem]" alt="" />
            <span className="block text-center">
              <CountUp
                end={data?.studentCount}
                // duration="3"
              />
            </span>
            <span className="block text-center">نفر دانشجو </span>
          </div>
        </div>
      </div>
    </div>
  );
};
