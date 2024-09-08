import React from "react";
import teacher from "../../assets/image/N1.png";
// teacher details
const TeacherIntroducing = ({ data }) => {
  return (
    <div className="flex justify-start items-center gap-5 bg-[#D7D5FF] dark:bg-violet-900 shadow-bg-bluec shadow-xl md:p-10 rounded-md w-[520px] h-24">
      <div className="">
        <img className="rounded-full w-20 h-20" src={teacher} alt="" />
      </div>
      <div className="flex flex-col justify-center items-start dark:text-violet-200">
        <h2>مدرس: {data?.teacherName}</h2>
        <h4>مهندس نرم افزار</h4>
      </div>
    </div>
  );
};

export default TeacherIntroducing;
