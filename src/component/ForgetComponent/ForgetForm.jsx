import { useState } from "react";
import "../../App/App.css";
import RegisterIcon from "../RegisterComponent/RegisterIcon";
import FirstSectionForget from "./FirstSectionForget";
import SecondSectionForget from "./SecondSectionForget";
import TthirdSectionForget from "./TthirdSectionForget";

const ForgetForm = ({ title, description }) => {
  const [Count, setCount] = useState(1);

  return (
    <>
      <div
        className="bg-[#5c5cad] bg-opacity-5 mx-auto rounded-b-lg md:rounded-l-lg w-full h-full
         dark:bg-violet-950 dark:shadow-2xl dark:shadow-violet-600 dark:text-violet-200"
      >
        <div className="pt-5 w-full">
          <RegisterIcon />
        </div>
        <div
          className="w-full text-[#6359f0] text-3xl text-center text-nowrap
             dark:bg-violet-950  dark:text-violet-200"
        >
          {title}
        </div>
        {Count === 1 && (
          <FirstSectionForget setCount={setCount} description={description} />
        )}
        {Count === 2 && (
          <SecondSectionForget setCount={setCount} description={description} />
        )}
        {Count === 3 && (
          <TthirdSectionForget setCount={setCount} description={description} />
        )}
      </div>
    </>
  );
};

export default ForgetForm;
