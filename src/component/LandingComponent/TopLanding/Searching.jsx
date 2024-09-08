import React from "react";
import html from "../../../assets/image/3.jpg";
import SearchCourseItem from "./SearchCourseItem";
import SearchNewsItem from "./SearchNewsItem";

export const Searching = ({courseSearch,newsSearch}) => {
  return (
    <>
 {/* *************COURSE**************** */}
      <div className="w-[48%] ">
                <h2>دوره ها</h2>
                {courseSearch?.map((courseSearch) => {
                  return <SearchCourseItem data={courseSearch && courseSearch} />
                })}
              </div>
 {/* **************NEWS******************** */}
              <div className="w-[48%]">
                <h2>خبرها</h2>
                {newsSearch?.map((newsSearch) => {
                  return <SearchNewsItem data={newsSearch && newsSearch} />
                })}
                
              </div> 
    </>
  );
};
