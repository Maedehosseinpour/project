// import { Button, Dropdown } from 'flowbite-react';

import React from "react";
// import {  OptionsDropdown } from '@mantine/core';

import { BsGrid3X3GapFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { RxTextAlignCenter } from "react-icons/rx";
import { DropdownComponent } from "../../common/dropdown/DropdownComponent";
import { DropdownComponent2 } from "../../common/dropdown/DropdownComponent2";
import { ButtonMenu } from "../../common/dropdown/ButtonMenu";
import { Button } from "@mantine/core";
import { onsetFiltershowChange } from "../../redux/slices/setFiltershow";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onshowTypeChange } from "../../redux/slices/showType";

const Titelmenulist = ({
  showType,
  setShowType,
  handleSearch,
  setSortType,
  sortType,
  setSortCol,
  sortCol,
}) => {
  const setFiltershow = useSelector(
    (state) => state.setFiltershow.setFiltershow
  );

  const dispatch = useDispatch();
  const handelsetFilter = () => {
    dispatch(onsetFiltershowChange(!setFiltershow));
  };
  const bgIconGrid = showType ? `bg-violet-300` : `transparent`;
  const bgIconTitle = !showType ? `bg-violet-300` : `transparent`;

  return (
    <div className="flex flex-row md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-8 m-12 mx-auto px-12 w-[80%]">
      <div
        onClick={handelsetFilter}
        className="float-right flex cursor-pointer flex-row justify-center items-center gap-2 md:gap-2 border-4 border-violet-100 hover:bg-gray-50 dark:hover:bg-violet-800 pr-1 rounded-2xl md:rounded-2xl w-48 md:w-52 h-14 text-lg text-nowrap focus:outline-none focus:ring-2 md:text-sm dark:text-violet-200"
      >
        <span> فیلتر ها</span>
        <RxTextAlignCenter size={40} />
      </div>
      <div className="flex flex-row justify-center items-center md:gap-2 border-4 border-violet-100 rounded-2xl md:rounded-2xl w-48 md:w-64 h-14 dark:text-violet-200">
        <div
          onClick={() => setShowType(false)}
          className={`flex justify-center items-center cursor-pointer dark:hover:bg-violet-800 rounded-xl w-[100%] h-[100%] ${bgIconTitle}`}
        >
          <CiCircleList size={40} />{" "}
        </div>
        <div
          onClick={() => setShowType(true)}
          className={`flex justify-center items-center cursor-pointer dark:hover:bg-violet-800 rounded-xl w-[100%] h-[100%] ${bgIconGrid}`}
        >
          <BsGrid3X3GapFill size={40} />
        </div>
      </div>

      <div className="w-[70%] h-12">
        <form>
          <label
            for="search"
            className="mb-2 font-medium text-gray-900 text-sm dark:text-violet-200 sr-only"
          >
            جستجو
          </label>
          <div className="relative border-violet-100 rounded-3xl md:rounded-2xl">
            <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 ps-3">
              <svg
                className="ml-5 w-4 h-4 text-gray-500 dark:text-violet-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={handleSearch}
              type="search"
              id="search"
              className="block border-2 border-violet-100 dark:border-violet-200 bg-gray-50 dark:bg-violet-950 p-4 rounded-2xl w-full h-14 text-gray-900 text-sm ps-10 focus:ring-violet-500 dark:text-violet-200 dark:placeholder-violet-200"
              placeholder="جستجو"
              required
            />
          </div>
        </form>
      </div>
      {/* start acardeon1 */}
      {/* <div id="accordion-open" data-accordion="open">
          <div className='float-left w-52 lg:w-96'  id="accordion-open-heading-1">
            <button type="button" className="rtl:text-right flex justify-between items-center gap-3 border-violet-100 bg-gray-50 hover:bg-gray-100 dark:hover:bg-violet-800 dark:bg-violet-950 px-5 py-5 p-5 border border-b rounded-2xl rounded-t-xl w-full md:w-full h-14 font-medium text-gray-500 text-nowrap focus:ring-2 focus:ring-violet-200 dark:text-violet-200" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
              <span>دسته بندی ها</span>

              <svg data-accordion-icon className="w-4 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
            <div id="dropdown" className="z-10 hidden bg-white dark:bg-gray-700 shadow rounded-lg divide-y divide-gray-100 w-44">
                <ul className="py-2 text-gray-700 text-sm dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
            </div>
          </div>
          
        </div> */}
      <div
        className="rtl:text-right  flex justify-between items-center
         gap-3 border-violet-100 bg-gray-50 hover:bg-gray-100
          dark:bg-violet-950 mx-auto  p-5 border border-b rounded-2xl
          rounded-t-xl w-full md:w-full lg:w-96 h-14 font-medium
           text-gray-900 text-nowrap
          dark:text-violet-200"
        id="accordion-open-heading-1"
      >
        <DropdownComponent sortCol={sortCol} setSortCol={setSortCol} />
      </div>
      {/* end acardion 1 */}
      <div
        className="bg-white py-2 rounded-2xl  rtl:text-right  flex justify-between items-center
         gap-3 border-violet-100  hover:bg-gray-100 dark:bg-violet-950 mx-auto border border-b 
            h-14 font-medium text-gray-900 text-nowrap dark:text-violet-200  "
      >
        <DropdownComponent2 sortType={sortType} setSortType={setSortType} />
      </div>
    </div>
  );
};

export default Titelmenulist;
