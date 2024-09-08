import { DashboardButtomComponent } from "./DashboardButtomComponent";
import { DashboardTopComponent } from "./DashboardTopComponent";
import { CustomGetUseQueryExtra } from "../../customHook/CustomGetUseQueryExtra";
// import html from "../../../assets/image/3.jpg";
import html1 from "../../../assets/image/Rectangle55.png";
import html2 from '../../../assets/image/8MbtJ4hTAaOk3KPcptqZ_e271cac0-aa80-42e1-bada-e178eac9ab6a.webp'
import html4 from '../../../assets/image/React-JS-library_e5d3e77f-883b-43fe-9ec6-21174518a099.png'
import html3 from '../../../assets/image/N1.png'


import DonutChart from "react-donut-chart";
import {Chart} from '../Dashboard/Chart'

export const Dashboard = () => {

  const { data } = CustomGetUseQueryExtra(
    "getFavoriteCourse",
    `/SharePanel/GetMyFavoriteCourses`
  );

  const { data:profileComplete } = CustomGetUseQueryExtra(
    "getProfileComplete",
    `/SharePanel/GetProfileInfo`
  );

  const profileCompletionPercentage = profileComplete?.profileCompletionPercentage
  // console.log(profileCompletionPercentage);

  const Data2 = [
    {
      id: 1,
      img: html3,
      title: "html آموزش مقدماتی",
      master: " دکتر بحرالعلوم",
      priceCourse: "256438",
    },
    {
      id: 2,
      img: html4,
      title: "آموزش مقدماتی ری کت ",
      master: " مصطفی ",
      priceCourse: "1234568",
    },
  ];

  const Data3 = [
    {
      id: 1,
      img: html1,
      title: " آموزش مقدماتی جاوا",
      master: " دکتر بحرالعلوم",
      priceCourse: "8000000",
    },
    {
      id: 2,
      img: html2,
      title: "آموزش مقدماتی Node.js ",
      master: " نابغه ",
      priceCourse: "9856987",
    },
  ];

  // const {data:data2} = CustomGetUseQueryExtra('getFavoritCourse',`/SharePanel/GetMyFavoriteCourses`)


  // const getProfile = async() => {
  //   const res= await http.get('/SharePanel/GetProfileInfo')
  //   return res
  // }

  // const {data } = useQuery('myProfile' , getProfile)

  const option = {}

  return (
    <div className="bg-white 2xl:w-[72rem] dark:bg-violet-950  dark:text-violet-200">
      <div className="w-full bg-red flex justify-center">
        <div className="visible hidden md:visible md:inline-block my-auto">
        <Chart chartData={profileComplete?.profileCompletionPercentage} />
        </div>
        <div className="bg-gree w-[75%]">
          <DashboardTopComponent />
        </div>
      </div>

      <div className="flex md:flex-row justify-center gap-5 flex-col text-xs mt-10 ">
        <div className="">
          <h2 className="flex text-2xl mb-5 text-fuchsia-700 font-bold dark:text-violet-200">
            ـ اخری دوره ثبت شده
          </h2>
          <div className="w-[97%]">
            {Data2?.map((result, index) => {
              return (
                <DashboardButtomComponent
                  key={index}
                  title={result.title}
                  img={result.img}
                  master={result.master}
                  priceCourse={result.priceCourse}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="flex text-2xl mb-5 text-fuchsia-700 font-bold dark:text-violet-200">
            ـ دوره های پیشنهادی
          </h2>
          <div className="w-[97%]">
            {Data3?.map((result, index) => {
              return (
                <DashboardButtomComponent
                  key={index}
                  title={result.title}
                  img={result.img}
                  master={result.master}
                  priceCourse={result.priceCourse}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
