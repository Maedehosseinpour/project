// import { ProfileButtomComponent } from "./ProfileButtomComponent";
// import { ProfileTopComponent } from "./ProfileTopComponent";
import html from "../../assets/image/3.jpg";

import { TableRowComponent } from "./TableRowComponent";


export const TableSelectedCourse = ({data}) => {

  
  return (
    <>
    <div className="overflow-x-scroll ">

      <div className="block sm:hidden">

      </div>

      <div className="  bg-white min-w-[600px] ">
        <table className="table-fixed  w-full border-spacing-3 whitespace-nowrap  ">
          <thead className="bg-purple-700 text-white">
            <tr className="flex  flex-row  justify-around p-3 ">
              <th className="">تصویر</th>
              <th>نام دوره</th>
              <th>مدرس</th>
              <th>تاریخ شروع</th>
              <th>قیمت</th>
              <th>مدیریت</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((result, index) => {
              return (
                <TableRowComponent
                  key={result.courseId}
                  id={result.courseId}
                  title={result.courseTitle}
                  img={result.tumbImageAddress}
                  master={result.teacheName}
                  levelName={result.levelName}
                  typeName={result.typeName}
                />
              );
            })}
          </tbody>
        </table>
                </div>
      </div>
    </>
  );
};
