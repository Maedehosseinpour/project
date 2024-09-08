import { useQuery } from "react-query";
import TitrComponent from "../../../common/TitrComponent/TitrComponent";
import DesignSvgComponent from "../../SvgComponent/DesignSvgComponent";
import ProfessorCard from "./ProfessorCard";
import http from "../../../core/services/interceptore";
import pic1 from "../../../assets/image/profesor/p1.jpg";
import pic2 from "../../../assets/image/profesor/p2.jpeg";
import pic3 from "../../../assets/image/profesor/p3.jpg";

const Professors = () => {
  const professorpic = [pic1, pic2, pic3];

  const getCourseList = async () => {
    const res = await http.get(`/Home/GetTeachers`);
    //console.log(res.data.courseFilterDtos);
    return res;
  };

  const { data, isLoading, isError, error } = useQuery(
    "masterList",
    getCourseList
  );

  return (
    <>
      <div className="relative dark:bg-violet-950 w-full">
        <TitrComponent title="  اساتید برتر" />

        <div className="flex lg:flex-row flex-col justify-center lg:justify-center mx-auto w-[95%] md:w-[90%]">
          <div className="top-0 left-0 absolute ml-0 -rotate-180">
            <DesignSvgComponent className="" />
          </div>
          {data?.map((data, index) => {
            {
              data.length;
            }

            if (index <= 2) {
              return (
                <>
                  <ProfessorCard
                    id={data.teacherId}
                    fullName={data.fullName}
                    courseCounts={data.courseCounts}
                    newsCount={data.newsCount}
                    masterPic={professorpic[index]}
                  />
                </>
              );
            }
          })}

          {/* <ProfessorCard/>
  <ProfessorCard /> */}
        </div>
      </div>
    </>
  );
};

export default Professors;
