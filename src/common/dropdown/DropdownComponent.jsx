import React from "react";
import { Select } from "@mantine/core";

export const DropdownComponent = ({ setSortCol, sortCol }) => {

  return (
    <div
      className="bg-white outline-none hover:bg-bluec rounded-lg w-56
    text-gray-900 dark:text-gray-300 dark:bg-violet-950 placeholder-slate-900"
    >
      <Select
        placeholder="دسته بندی"
       data={[
        { value: "TypeName", label: "بر اساس نام" },
        { value: "StatuseName", label: "بر اساس وصعیت" },
        { value: "LevelName", label: "بر اساس سطح" },
        { value: "Cost", label: "بر اساس قیمت" },
        { value: "LastUpdate", label: "آخرین به روزرسانی" },
        { value: "InsertDate", label: "بر اساس ورودی" },
        { value: "TeacherName", label: "بر اساس استاد" },

      ]}
        nothingFoundMessage="مقداری یافت نشد..."
        onChange={setSortCol}
        value={sortCol}
        clearable
        searchable     
      />
    </div>
  );
};
