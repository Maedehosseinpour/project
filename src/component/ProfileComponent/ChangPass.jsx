import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
const ChangePass = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const handleSubmit = () => {
    return <div>hhhhhh</div>;
  };
  return (
    <div className="w-full mx-auto">
      <Formik
        initialValues={{ currentPass: "", newPass: "", confirmNewPass: "" }}
        onSubmit={handleSubmit}
      >
        <Form className=" mt-3 flex flex-col text-gray-500 items-center justify-center w-full">
          <div className="w-full flex flex-col text-gray-500 items-center justify-center  ">
            <div className="w-[80%] flex flex-col relative  ">
              <label
                for="currentPass"
                className=" text-[16px] text-nowrap my-1 dark:text-violet-200 "
              >
                {" "}
                رمز عبور فعلی{" "}
              </label>
              <Field
                id="currentPass"
                className="w-full h-10 rounded-lg pr-3 my-4 border-2 border-[#a193ff] dark:bg-violet-200"
                type={showPassword1 ? "text" : "password"}
                name="currentPass"
                autocomplete="off"
              />
              {!showPassword1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#7b2aff"
                  className="relative bottom-12 left-2 flex mr-auto w-5 h-5 cursor-pointer"
                  onClick={() => setShowPassword1(!showPassword1)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
              {showPassword1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#7b2aff"
                  className="relative cursor-pointer bottom-12 left-2 flex mr-auto w-5 h-5"
                  onClick={() => setShowPassword1(!showPassword1)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </div>

            <div className="w-[80%]  flex flex-col">
              <label
                for="newPass"
                className="w-full  text-[16px] text-nowrap my-1 dark:text-violet-200"
              >
                رمز عبور جدید{" "}
              </label>

              <Field
                id="newPass"
                className="w-full h-10 rounded-lg pr-3 my-4  border-2 border-[#a193ff] dark:bg-violet-200"
                type={showPassword2 ? "text" : "password"}
                name="newPass"
                autocomplete="off"
              />
              {!showPassword2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#7b2aff"
                  className="relative bottom-12 left-2 flex mr-auto w-5 h-5 cursor-pointer"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
              {showPassword2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#7b2aff"
                  className="relative cursor-pointer bottom-12 left-2 flex mr-auto w-5 h-5"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </div>
            <div className="w-[80%]  flex flex-col ">
              <label
                for="confirmNewPass"
                className="w-full  text-[16px] text-nowrap my-1 dark:text-violet-200"
              >
                تکرار رمز عبور جدید{" "}
              </label>

              <Field
                id="confirmNewPass"
                className="w-full h-10 my-4  rounded-lg pr-3 border-2 border-[#a193ff] dark:bg-violet-200"
                type={showPassword3 ? "text" : "password"}
                name="confirmNewPass"
                autocomplete="off"
              />
              {!showPassword3 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#7b2aff"
                  className="relative bottom-12 left-2 flex mr-auto w-5 h-5 cursor-pointer"
                  onClick={() => setShowPassword3(!showPassword3)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
              {showPassword3 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#7b2aff"
                  className="relative cursor-pointer bottom-12 left-2 flex mr-auto w-5 h-5"
                  onClick={() => setShowPassword3(!showPassword3)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className="w-[80%] mr-6 mt-4">
            <button
              className="flex justify-center mb-5 text-sm md:text-lg font-bold mx-auto text-nowrap 
                      rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-2 md:py-4 text-center  
                      text-white "
              type="submit"
            >
              {" "}
              ثبت اطلاعات{" "}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePass;
