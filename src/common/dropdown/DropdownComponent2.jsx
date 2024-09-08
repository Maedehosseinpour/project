import React from "react";
import { Select } from "@mantine/core";

export const DropdownComponent2 = ({ setSortType, sortType }) => {
  return (
    <div
      className=" hover:bg-bluec 
    text-gray-900 dark:text-gray-300 dark:bg-violet-950 placeholder-slate-900"
    >
      <Select
        className="outline-none"
        placeholder=" مرتب سازی"
        data={[
          { value: "DESC", label: "نزولی" },
          { value: "ASC", label: "صعودی" },
        ]}
        nothingFoundMessage="مقداری یافت نشد..."
        onChange={setSortType}
        value={sortType}
        clearable
        searchable
      />
    </div>
  );
};
