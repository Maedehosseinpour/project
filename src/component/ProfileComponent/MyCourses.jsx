import { CustomGetUseQueryExtra } from "../customHook/CustomGetUseQueryExtra";
import { TableSelectedCourse } from "./TableSelectedCourse";

const MyCourses = () => {
    const {data} = CustomGetUseQueryExtra('getFavoritCourse',`/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`)
  return (
    <>
      <div className="w-[95%] mx-auto">
        <TableSelectedCourse data={data && data.listOfMyCourses} />
      </div>
    </>
  );
};

export default MyCourses;
