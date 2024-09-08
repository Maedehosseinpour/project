import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './style.css'

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import http from "../../../core/services/interceptore"
import { useQuery } from "react-query";
import { CardItem } from "../../../common/Cource/CardItem";

export const SwipperComponent = () => {
  const getCourseList =async() => {
    try{
      const res = await http.get("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0")
    // console.log(res);

    return res
    }
    catch(err){
      console.log(err);
    }
    
   }

    const {data , isLoading ,isError , error ,isSuccess , refetch} = useQuery("courseListSwiper", getCourseList)

  return (
    <div className="mx-auto p-5 rounded-xl w-[90%]">
      <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 70,
          }
        }}
        navigation={true}
        modules={[Autoplay,Pagination,Navigation]}
        className="mySwiper"
      >
        <div className="">
          {data?.courseFilterDtos.map((result, index) => {
            return (
              <SwiperSlide key={index} className="mb-16">
                <div className="max-w-[310px]">
                  <div className="bg-violet-50 dark:bg-violet-900 dark:shadow-lg dark:hover:shadow-violet-600 mt-4 mb-10 p-[1rem] rounded-[0.9375rem]">
                  <CardItem
                  id={result.courseId}
                  title={result.title}
                  img={result.tumbImageAddress}
                  sectionCours={result.sectionCours}
                  timeCours={result.statusName}
                  calender={result.lastUpdate}
                  master={result.teacherName}
                  like={result.likeCount}
                  dislike={result.dissLikeCount}
                  priceCourse={result.cost}
                  countStudio={result.levelName}
                  currentRegistrants ={result.currentRegistrants}
                  userFavorite={result.userFavorite}
                  userFavoriteId={result.userFavoriteId}
                  userIsLiked={result.userIsLiked}
                  userLikedId={result.userLikedId}
                  currentUserDissLike={result.currentUserDissLike}
                  refetch={refetch}
                />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      {/* <div className="flex justify-center mt-10 mb-5 h-10">
        <button className="bg-blue-700 p-2 rounded-[0.9375rem] text-white text-xl">
          مشاهده همه
        </button>
      </div> */}
    </div>
  );
};
