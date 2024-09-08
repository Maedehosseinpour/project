import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AllUsersComment from "../../CourcesDetailComponent/AllUsersComment";
import CoursProudactComponents from "../../CourcesDetailComponent/CoursProudactComponents";
import CourseProudactMenuTabUL from "../../CourcesDetailComponent/CourseProudactMenuTabUL";
import OrderCourseComponent from "../../CourcesDetailComponent/OrderCourseComponent";
import handleTheme from "../../../core/services/handleTheme";
import { useQuery } from "react-query";
import { getList } from "../../../function/getList";
import deskImage from "../../../assets/image/SVG/Rectangle 90.svg";
import ScrollToTop from "react-scroll-to-top";
import AllUsersCommentCourse from "../../CourcesDetailComponent/AllUsersCommentCourse";
import { Center, Flex } from "@mantine/core";

export const CourcesDetailPageComponent = () => {
  const params = useParams();

  const { data, isLoading, isError, error, refetch } = useQuery(
    "courseList2",
    () => getList(`/Home/GetCourseDetails?CourseId=${params.id}`)
  );
  useEffect(() => {
    handleTheme();
    window.scrollTo(0, 0);
  }, []);

  //  const getCourseDetail =async() => {
  //   const res = await axios.get(`https://classapi.sepehracademy.ir/api/Home/GetCourseDetails?CourseId=${params.id}`)
  //   console.log(res.data);
  //   return res.data
  //  }

  //   const {data , isLoading ,isError , error} = useQuery("courseDetail1", getCourseDetail)

  return (
    <div
      className="relative bg-contain bg-no-repeat w-full"
      style={{ backgroundImage: `url(${deskImage}) ` }}
    >
      <div className="dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
        <CoursProudactComponents data={data && data} refetch={refetch} />
        <CourseProudactMenuTabUL data={data && data} />
        {/* <UserCommentComponent/> */}
        <AllUsersCommentCourse id={params.id}  />
        <OrderCourseComponent />
      </div>
      <ScrollToTop className="right-4 bottom-4 absolute"
        smooth
        style={{
          backgroundColor: "rgba(88,0,255,0.4)",
          right: "60px",
          borderRadius: "50%",
          textAlign: "center",
        }}
      />
    </div>
  );
};
