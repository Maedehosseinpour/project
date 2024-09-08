import React from "react";
import Checboxcourscomponent from "./Checboxcourscomponent";
import { useSelector } from "react-redux";
import { CustomGetUseQueryExtra } from "../customHook/CustomGetUseQueryExtra";
import { RangeSlider, Slider } from '@mantine/core';

const Filtercourses = ({ setCourseType ,setCourseLevel, setTechnology , setCostUp , setCostDown , costDown , costUp , handleTechnology }) => {
  const setFiltershow = useSelector(
    (state) => state.setFiltershow.setFiltershow
  );
  // **********************************************
  // const handleTechCourse = (id) => {
  //   setTechnology((oldData) => {
  //     if(oldData.includes(id)) {
  //       return oldData.filter((i) => i !== id)
  //     }
  //     else {
  //       return [...oldData , id]
  //     }
  //   })
  // }
  // **********************************************

  const show = setFiltershow ? `visible` : `invisible`;

  const { data } = CustomGetUseQueryExtra(
    "typeList",
    "/CourseType/GetCourseTypes"
  );
  const { data:levelCourse } = CustomGetUseQueryExtra(
    "lvlList",
    "/CourseLevel/GetAllCourseLevel"
  );

  const { data:techCourse } = CustomGetUseQueryExtra(
    "techList",
    "/Home/GetTechnologies"
  );
  
  // const handleSetTechnology= (e) => {
  //   setTechnology([...]e.target.value)
  // }
  
  return (
    <>
      <div
        className={`lg:block flex justify-start items-center md:w-full md:text-2xl id="navbar-default ${show}`}
        aria-hidden="true"
      >
        <div className="leading-10">
          <div className="md:flex-row flex-col md:space-x-10 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-violet-700 bg-violet-100 md:bg-white md:dark:bg-violet-900 dark:bg-violet-900 mt-4 md:mt-0 pb-8 border rounded-lg w-full md:w-auto">
            <p className="m-3 p-2 border-b-[1px] border-blue-200 text-violec dark:text-violet-200">
              بر اساس نوع دوره
            </p>
            {data?.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    id={item.id}
                    name="type"
                    type="radio"
                    value={item.id}
                    onChange={(e) => setCourseType(e.target.value)}
                  />
                  <label htmlFor={item.id} className="font-medium text-gray-900 text-sm md:text-lg dark:text-gray-300 ms-2">{item.typeName}</label>
                </div>
              );
            })}
          </div>
          {/* ********************Level************************ */}

          <div className="md:flex-row flex-col md:space-x-10 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-violet-700 bg-violet-100 md:bg-white md:dark:bg-violet-900 dark:bg-violet-900 mt-4 md:mt-0 pb-8 border rounded-lg w-full md:w-auto">
            <p className="m-3 p-2 border-b-[1px] border-blue-200 text-violec dark:text-violet-200">
              بر اساس سطح دوره
            </p>
            {levelCourse?.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    id={item.id}
                    name="level"
                    type="radio"
                    value={item.id}
                    onChange={(e) => setCourseLevel(e.target.value)}
                  />
                  <label htmlFor={item.id} className="font-medium text-gray-900 text-sm md:text-lg dark:text-gray-300 ms-2">{item.levelName}</label>
                </div>
              );
            })}
          </div>
          {/* ********************Technology************************ */}
          <div className="md:flex-row flex-col md:space-x-10 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-violet-700 bg-violet-100 md:bg-white md:dark:bg-violet-900 dark:bg-violet-900 mt-4 md:mt-0 pb-8 border rounded-lg w-full md:w-auto">
            <p className="m-3 p-2 border-b-[1px] border-blue-200 text-violec dark:text-violet-200">
              بر اساس موضوع
            </p>
            {techCourse?.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    id={item.id}
                    name="course"
                    type="checkbox"
                    value={item.id}
                    onChange={handleTechnology}
                  />
                  <label htmlFor='DESC' className="font-medium text-gray-900 text-sm md:text-lg dark:text-gray-300 ms-2">{item.techName}</label>
                </div>
              );
            })}
          </div>

          {/* **************************Cost****************************** */}
          <div className="md:flex-row flex-col md:space-x-10 rtl:space-x-reverse border-gray-100 md:border-0 dark:border-violet-700 bg-violet-100 md:bg-white md:dark:bg-violet-900 dark:bg-violet-900 mt-4 md:mt-0 pb-8 border rounded-lg w-full md:w-auto">
            <p className="m-3 p-2 border-b-[1px] border-blue-200 text-violec dark:text-violet-200">
              بر اساس قیمت
            </p>
            <div className="w-[80%] mb-5" >
                  <label htmlFor='costDown' className=" text-gray-900 text-[10px] md:text-lg dark:text-gray-300 ms-2">شروع قیمت</label>
                  <Slider value={costDown} onChange={setCostDown}
                    defaultValue={0}
                    id='costDown'
                    step={1000}
                    min={0}
                    max={1000000000}
                    label={null}
                    
                  />

                </div>
                <div  className="w-[80%]">
                 
                  <label htmlFor='costUp' className=" text-gray-900 text-[10px] md:text-lg dark:text-gray-300 ms-2">پایان قیمت</label>
                  <Slider value={costUp} onChange={setCostUp}
                  className="transition"
                   defaultValue={0}
                   
                   id='costUp'
                   step={1000}
                    min={0}
                    max={1000000000}
                    label={null}
                    
                  />
                </div>
          </div>
          

          

         
        </div>
      </div>
    </>
  );
};

export default Filtercourses;
