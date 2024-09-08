import { CustomGetUseQueryExtra } from "../customHook/CustomGetUseQueryExtra";
import { TableSelectedCourse } from "./TableSelectedCourse";

const ReserveCourses = () => {
    const {data} = CustomGetUseQueryExtra('getFavoritCourse',`SharePanel/GetMyCoursesReserve`)
  return (
    <>
      <div className="w-[95%] mx-auto">
        <TableSelectedCourse data={data && data} />
      </div>
    </>
  );
};

export default ReserveCourses;
