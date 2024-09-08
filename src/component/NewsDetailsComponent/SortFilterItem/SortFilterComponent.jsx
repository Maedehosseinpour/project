import React from "react";
import LiComponent from "./LiComponent";
import { Select } from "@mantine/core";

const SortFilterComponent = ({ sortNews, setSortNews }) => {
  return (
    <div
      className="mx-1 p-2 bg-white outline-none  
    text-gray-900 dark:text-gray-300 dark:bg-violet-950 placeholder-slate-900
    border-2 border-violet-700 h-14 rounded-xl w-full md:w-[45%]
    focus:border-violet-500 dark:focus:border-violet-500 "
    >
      {/* <ul className='flex flex-row justify-around items-center border-2 border-violet-700 dark:bg-violet-950 rounded-lg w-full md:w-full h-14 text-sm text-violet-800 md:text-nowrap md:text-lg dark:text-violet-200'>
        <LiComponent  item={"همه"} />
        <LiComponent  item={"محبوب ترین ها"}/>
        <LiComponent  item={"پربازدید ترین ها"}/>
        <LiComponent  item={"جدید ترین ها"} />
        </ul> */}

      <Select
        placeholder="مرتب سازی بر اساس"
        data={[
          { value: "InsertDate", label: "بر اساس تاریخ تغییرات" },
          { value: "CurrentLikeCount", label: "بر اساس محبوبیت" },
          { value: "CurrentView", label: "بر اساس میزان بازدید" },
        ]}
        nothingFoundMessage="مقداری یافت نشد..."
        onChange={setSortNews}
        value={sortNews}
        clearable
        searchable
      />
    </div>
  );
};

export default SortFilterComponent;
