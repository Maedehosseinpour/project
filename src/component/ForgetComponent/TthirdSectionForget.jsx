import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import http from "../../core/services/interceptore";
;
import { useSelector } from "react-redux";
import { useMutation } from "react-query";


const TthirdSectionForget = ({ setCount }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const phoneNumber = useSelector((state) => state.userPhoneNumber.phoneNumber);
  console.log(phoneNumber);

  // HandelSubmit Function

  // const {mutate,isLoading, isSuccess}=useMutation(handleAdd,
  //     {
  //         onMutate:async(data) => {
  //             await queryClien.cancelQueries('list')
  //             const lastData = queryClien.getQueriesData('list')
  //             queryClien.setQueriesData('list', (oldData)=> {
  //                 const newData = [...oldData]
  //                 newData.push(data)
  //                 return newData
  //             })
  //             return lastData
  //         },
  //         onSettled: () => {
  //             queryClien.invalidateQueries('list')
  //         },
  //         onError:(error,_v,context)=>{
  //             queryClien.setQueriesData('list',context)
  //         }
  //     }
  //     )

  const handleSubmit = async (values) => {
    // const res = await http.post("/Sign/Register", values);

    // console.log(res);
    // if (res.success === true) {
    //   navigate("/auth/login");
    // }
  };
  // Return Section
  return (
    <>
      <div className="w-full dark:bg-violet-950 dark:shadow-2xl dark:shadow-violet-600 dark:text-violet-200">
        <div className="w-full text-right mt-4 md:mt-2 mr-7 text-[#A193FF] text-nowrap dark:text-violet-200">
          {" "}
          ایمیل و کلمه رمز خود را وارد کنید
        </div>
        <Formik
          initialValues={{ gmail: "", password: "", phoneNumber: '' }}
          onSubmit={handleSubmit}
        >
          <Form className="">
            <div className="w-full mt-3 flex flex-col">
              <div className="w-[80%] flex flex-col">
                {/* <label for="email" className=" text-[16px] mr-6 text-nowrap my-1 "> شماره موبایل یا ایمیل </label> */}

                <Field
                  id="gmail"
                  className="w-full h-10 rounded-lg pr-3 my-4 border-2 border-[#a193ff] mr-6"
                  type="email"
                  name="gmail"
                  placeholder="   gmail  خود را وارد کنید "
                />
              </div>

              <div className="flex flex-col w-[80%] ">
                {/* <label for="email" className=" text-[16px] mr-6 text-nowrap my-1 "> شماره موبایل یا ایمیل </label> */}

                <Field
                  id="password"
                  className="w-full h-10 rounded-lg pr-3 my-4 md:my-2 border-2 border-[#a193ff] mr-6 relativ"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="   password  خود را وارد کنید "
                />
                {!showPassword && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#7b2aff"
                    className="relative bottom-12 -left-4 flex mr-auto w-5 h-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
                {showPassword && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#7b2aff"
                    className="relative bottom-12 -left-4 flex mr-auto w-5 h-5"
                    onClick={() => setShowPassword(!showPassword)}
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
            <div className="w-[80%] mr-6 mt-4 md:mt-2">
              <button
                className="flex justify-center mb-5 text-sm md:text-lg font-bold mx-auto text-nowrap 
                        rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-4 md:py-3 text-center  
                        text-white "
                type="submit"
              >
                {" "}
                ارسال اطلاعات{" "}
              </button>
            </div>
          </Form>
        </Formik>
        <div
          className="flex flex-row justify-between w-[80%] md:w-[90%] text-center text-[16px] 
            md:text-[18px] mt-8 md:mt-4 mr-7 pb-8  text-[#A193FF] text-nowrap  "
        >
          <div
            className="text-[#4E447D] bg-[#E7E2FF] py-2 hover:bg-[#A193FF] px-4 rounded-md cursor-pointer"
            onClick={() => setCount(2)}
          >
            مرحله قبل
          </div>
        </div>
        <div
          className="flex w-[80%] md:w-[90%] pb-1 text-[#3F40EA] mx-auto justify-around 
        items-center text-center 2xl:max-w-2xl"
        >
          <div
            className=" border-4 w-[41px] h-[41px] rounded-full bg-[#8735F5] 
          border-[#8735F5] flex items-center justify-center"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.31066 9.56434C4.72487 8.97855 3.77513 8.97855 3.18934 9.56434C2.60355 
                10.1501 2.60355 11.0999 3.18934 11.6857L5.31066 9.56434ZM9.25 15.625L8.18934
                 16.6857C8.50711 17.0034 8.9506 17.162 9.39781 17.1177C9.84501 17.0734 10.2488
                  16.831 10.4981 16.4571L9.25 15.625ZM17.9981 5.20705C18.4576 4.51776 18.2713 
                  3.58645 17.5821 3.12692C16.8928 2.6674 15.9615 2.85366 15.5019 3.54295L17.9981
                   5.20705ZM3.18934 11.6857L8.18934 16.6857L10.3107 14.5643L5.31066 9.56434L3.18934
                    11.6857ZM10.4981 16.4571L17.9981 5.20705L15.5019 3.54295L8.00192 14.7929L10.4981 16.4571Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-2/5 border-4 h-0 mt-[8px] md:mt-[6px] border-[#8735F5]"></div>
          <div className="border-4  w-[41px] h-[41px] rounded-full bg-[#8735F5] border-[#8735F5] flex items-center justify-center">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.31066 9.56434C4.72487 8.97855 3.77513 8.97855 3.18934 9.56434C2.60355 
                10.1501 2.60355 11.0999 3.18934 11.6857L5.31066 9.56434ZM9.25 15.625L8.18934
                 16.6857C8.50711 17.0034 8.9506 17.162 9.39781 17.1177C9.84501 17.0734 10.2488 
                 16.831 10.4981 16.4571L9.25 15.625ZM17.9981 5.20705C18.4576 4.51776 18.2713 3.58645
                  17.5821 3.12692C16.8928 2.6674 15.9615 2.85366 15.5019 3.54295L17.9981 5.20705ZM3.18934
                   11.6857L8.18934 16.6857L10.3107 14.5643L5.31066 9.56434L3.18934 11.6857ZM10.4981
                    16.4571L17.9981 5.20705L15.5019 3.54295L8.00192 14.7929L10.4981 16.4571Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-2/5 border-4 h-0 mt-[8px]  md:mt-[6px] border-[#8735F5]"></div>
          <div className="border-4  w-[41px] h-[41px] rounded-full bg-[#8735F5] border-[#8735F5] flex items-center justify-center">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.31066 9.56434C4.72487 8.97855 3.77513 8.97855 3.18934 9.56434C2.60355 10.1501
                 2.60355 11.0999 3.18934 11.6857L5.31066 9.56434ZM9.25 15.625L8.18934 16.6857C8.50711
                  17.0034 8.9506 17.162 9.39781 17.1177C9.84501 17.0734 10.2488 16.831 10.4981 16.4571L9.25
                   15.625ZM17.9981 5.20705C18.4576 4.51776 18.2713 3.58645 17.5821 3.12692C16.8928 2.6674
                    15.9615 2.85366 15.5019 3.54295L17.9981 5.20705ZM3.18934 11.6857L8.18934 16.6857L10.3107 
                    14.5643L5.31066 9.56434L3.18934 11.6857ZM10.4981 16.4571L17.9981 5.20705L15.5019 3.54295L8.00192
                     14.7929L10.4981 16.4571Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-[80%] md:w-[90%] pb-4 mx-auto justify-between items-center text-center text-[12px] 2xl:max-w-2xl">
          <div className="  text-[#4E447D] text-nowrap dark:text-violet-200">
             تغییر رمز عبور
          </div>
          <div className="   text-[#4E447D] text-nowrap dark:text-violet-200">
            دریافت کد
          </div>
          <div className=" text-nowrap text-[#4E447D] dark:text-violet-200">
            شماره تماس
          </div>
        </div>
        {/* <div className="flex flex-row justify-between w-[80%] md:w-[90%] text-center text-[16px] md:text-[18px] mt-8 mr-7 pb-8 text-[#A193FF] text-nowrap  ">
                {steper()}
                </div> */}
      </div>
    </>
  );
};

export default TthirdSectionForget;
