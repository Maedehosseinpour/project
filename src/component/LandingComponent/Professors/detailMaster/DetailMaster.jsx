import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { CardItem } from "../../../../common/Cource/CardItem";
import pic1 from "../../../../assets/image/profesor/p1.jpg";
import pic2 from "../../../../assets/image/profesor/p2.jpeg";
import pic3 from "../../../../assets/image/profesor/p3.jpg";
import NoImagePerson from "../../../../assets/image/profile/person.png";
import { useQuery } from "react-query";
import http from "../../../../core/services/interceptore";
// import deskImage from '../../../../assets/image/svg/Rectangle 90.svg'


export const DetailMaster = ({id }) => {

  const professorpic = [pic1, pic2, pic3];
  
// ********************COURSE API FETCH**********************
  const getCourseList = async () => {
    const res = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=8&SortingCol=Active&SortType=DESC&TechCount=0`
    );
    return res;
  };

  const {
    data: masterList,
    isLoading: masterIsLoading ,
    isError: masterIsError,
    error: masterError,
    refetch: masterRefetch
  } = useQuery("courseListmaster", getCourseList);
  
  // *******************TEACHER API FETCH*************************
  const getMasterDetail = async () => {
    const respon = await http.get(`/Home/GetTeacherDetails?TeacherId=${id}`);
    return respon;
  };

  const { data, isLoading, isError, error } = useQuery(
    "masterDetail1",
    getMasterDetail
  );
  // ********************************************
  const img = data?.pictureAddress
  const noImage =   img === "Not-set" || img === undefined || img === null;

  return (
    <div className="bg-[#B4B4FF] dark:bg-violet-950 bg-cover bg-no-repeat shadow-violet-400 dark:shadow-2xl dark:shadow-violet-600 mx-auto px-1 rounded-lg w-[100%] max-w-[1920px]" >
      <div className="md:flex md:flex-row-reverse gap-5 mx-auto pt-10 w-[95%] text-violet-500">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="mx-auto md:w-[30%]"
        >
          <h2 className="mt-10 text-[40px] text-center text-nowrap">
            {data?.fullName}
          </h2>
          <div className="mx-auto my-10 rounded-full w-[301px] md:w-[200px] lg:w-[301px] max-w-[301px] h-[301px] md:h-[200px] lg:h-[301px] ring-8 ring-violet-700">
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="z-50 rounded-full w-[300px] md:w-[200px] lg:w-[301px] max-w-[301px] h-[300px] md:h-[200px] lg:h-[301px]"
              src={noImage ? NoImagePerson : pic1}
            />
          </div>
          <div className="flex justify-center bg-violet-300 mx-auto py-5 rounded-lg w-[95%] text-[20px] text-center">
            مهندس نرم افزار
          </div>
        </div>

        <div
          data-aos="flip-right"
          data-aos-duration="1500"
          className="shadow-lg shadow-violet-400 mx-auto mt-10 p-10 rounded-lg md:w-[65%]"
        >
          <h2 className="font-bold text-[30px]">تجربه ها :</h2>
          <p className="text-[26px]">
            استاد  {data?.fullName} از اساتید با تجربه و کار بلد تیم مارفا هستند. استاد
            {data?.fullName} از اساتید با تجربه و کار بلد تیم مارفا هستند. استاد {data?.fullName}
          </p>
          <div className="bg-gray-400 mx-auto my-5 w-[100%] h-[2px]"></div>
          <h2 className="font-bold text-[30px]">راه های ارتباطی : {data?.linkdinProfileLink}</h2>
          <div>
            <FaLinkedin />
          </div>
          <div className="bg-gray-400 mx-auto my-5 w-[100%] h-[2px]"></div>
          <div className="mb-5 font-bold text-[30px]">
            <span>تعداد دوره ها : </span>
            <span> {data?.courseCounts}</span>
          </div>
          <div className="font-bold text-[30px]">
            <span> تعداد مقالات : </span>
            <span> {data?.newsCount}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[85%]">
        <h2 className="mt-10 mr-20 font-bold text-[30px] text-violet-500">
          دوره های پیشنهادی استاد :
        </h2>
        <div className="flex flex-wrap gap-3 mx-auto">
          {masterList?.courseFilterDtos.map((result, index) => {
            return (
              //   <div key={index} className="w-[33%] max-w-[310px]">
              <div
                key={index}
                className="bg-violet-50 dark:bg-violet-900 dark:shadow-lg dark:hover:shadow-violet-600 mx-auto mt-4 mb-10 p-[1rem] rounded-[0.9375rem] sm:w-[95%] md:w-[45%] lg:w-[30%] max-w-[350px]"
              >
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
                  currentRegistrants={result.currentRegistrants}
                  userFavorite={result.userFavorite}
                  userFavoriteId={result.userFavoriteId}
                  userIsLiked={result.userIsLiked}
                  userLikedId={result.userLikedId}
                  currentUserDissLike={result.currentUserDissLike}
                  refetch={masterRefetch}
                />
              </div>
              //   </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
