import React from "react";
import UserSite from "./../../assets/image/profile/person.png";
import { Field, Form, Formik } from "formik";
import RerplayCommentUser from "./RerplayCommentUser";
import { useQuery } from "react-query";
import { getList } from "../../function/getList";
import http from "../../core/services/interceptore";
// component one user
const SiteUserComentCourse = ({ dataComent, refetch }) => {
  
  //*******************************************
  const {
    data: replayComent,
    isLoading,
    isError,
    error,
    refetch: refetchReply,
  } = useQuery("courseReplyComent", () =>
    getList(`/api/Course/GetCourseReplyCommnets/:CourseId/:CommentId${data.id}`)
  );

  // ********************************
  const currentUserIsLike = dataComent.currentUserIsLike;
  const currentUserIsDissLike = dataComent.currentUserIsDissLike;
  const currentUserLikeId=  dataComent.currentUserLikeId
  const id = dataComent.id;

  // const handleLike = async () => {
  //   if (!userIsLiked) {
  //     const res2 = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
  //     refetch();
  //   } else {
  //     const data = new FormData();
  //     data.append("CourseLikeId", userLikedId);
  //     const res1 = await http.delete("/Course/DeleteCourseLike", {
  //       data: data,
  //     });
  //     refetch();
  //   }
  // };

  const handleLike = async () => {
    // var currentUserIsLike=data.currentUserIsLike
   
    if (!currentUserIsLike) {
     
      const res2 = await http.post(`/News/CommentLike/${id}?LikeType=true&=`, id);
      refetch();
    } 
    else {
      // alert(deleteEntityId)
      const obj = { deleteEntityId: currentUserLikeId };
      const res1 = await http.delete("/News/DeleteCommentLikeNews", {
        data: obj,
      });
      refetch();
    }
  };

  const handleDisLike = async () => {
    if (!currentUserIsDissLike) {
      const res = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`);
      refetch();
    } 
    // else {
    //   //   const obj ={CourseFavoriteId:userFavoriteId}
    //   const data = new FormData();
    //   data.append("newsId", currentUserIsDissLike);
    //   const res1 = await http.delete("/Course/DeleteCourseFavorite", {
    //     data: data,
    //   });
    //   refetch();
    // }
  };

  // console.log(data);
  const img = dataComent?.pictureAddress;
  const noImage = img === "" || img === undefined || img === null;
  return (
    <div className="flex dark:border-2 dark:border-indigo-600 bg-[#CFCEFF] dark:bg-violet-950 md:mb-2 pb-10 rounded-3xl w-full h-[320px]">
      <div className="flex justify-center items-center w-[20%] md:w-[15%]">
        <img
          className="rounded-full w-24 h-24"
          src={noImage ? UserSite : img}
          alt=""
        />
      </div>
      <div className="px-5 w-[80%] h-24">
        <div className="flex mt-5">
          <h3 className="text-[#121242 dark:text-violet-200">کاربر سایت - </h3>
          <span className="text-[#2b2b70 dark:text-violet-200">
            ارسال شده در 1403/2/01
          </span>
        </div>
        <div className="my-5 text-[#3B3CA7] dark:text-violet-200">
          {" "}
          <span>عنوان : {dataComent?.title}</span>
        </div>
        <div className="my-5 text-[#3B3CA7] dark:text-violet-200">
          {" "}
          <p>{dataComent?.describe}</p>
        </div>
        <div className="flex md:flex-row flex-col justify-between px-10">
          <div className="w-full">
            <Formik>
              <Form className="m-5 mx-auto md:mx-0 max-w-sm md:max-w-[60%] leading-5">
                <Field
                  type="text"
                  className="block flex-1 border-gray-300 dark:border-violet-600 bg-gray-50 dark:bg-violet-900 p-2.5 border focus:border-blue-500 dark:focus:border-blue-500 rounded-lg w-full min-w-0 text-gray-900 focus:ring-blue-500 text-sm dark:text-white leading-5 dark:placeholder-gray-400 dark:focus:ring-blue-500"
                  placeholder=" نظر خود را وارد کنید"
                />
              </Form>
            </Formik>
          </div>
          <div className="flex justify-center items-center gap-5 text-center text-nowrap dark:text-violet-200">
            <span>آیا این دیدگاه مفید بود؟</span>
            <div className="flex items-center">
              <span>{dataComent?.likeCount}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={currentUserIsLike ? `gray` : `none`}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke={currentUserIsLike ? `gray` : `currentColor`}
                onClick={handleLike}
                className="w-4 h-4 text-[#52525B] cursor-pointer dark:text-violet-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 
                9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0
                 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 
                 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <span>{dataComent?.dissLikeCount}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={currentUserIsDissLike ? `gray` : `none`}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke={currentUserIsDissLike ? `gray` : `currentColor`}
                onClick={handleDisLike}
                className="w-4 h-4 text-[#52525B] cursor-pointer dark:text-violet-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-[#52525B] dark:text-violet-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* {console.log(replayComent)}
      <RerplayCommentUser/> */}
    </div>
  );
};

export default SiteUserComentCourse;
