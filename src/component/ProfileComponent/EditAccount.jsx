import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import ProfileImage from "./ProfileImage";
import http from "../../core/services/interceptore";
import { CustomPutUseMutationExtra } from "../customHook/CustomPutUseMutationExtra";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditAccount = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { mutate } = CustomPutUseMutationExtra();

  const handleUserInfoSubmit = (values) => {
    const data = new FormData()
    const keys = Object.keys(values)
    keys.forEach(Key => {
      const Item = values[Key]
      data.append(Key, Item)
    });
    
    const obj = {
      url: "/SharePanel/UpdateProfileInfo",
      values: data,
      key:'getProfileInfoImage'
    };
    mutate(obj);
  };
  return (
    <div className="w-[90%] h-[90%] mx-auto">
      <ProfileImage />
      <div className="w-full ">
        <Formik
          initialValues={{
            LName: "",
            FName: "",
            UserAbout:"",
            ReceiveMessageEvent:false,
            NationalCode: "",
            HomeAdderess: "",
            gender: false,
            BirthDay: "2000/01/01",
          }}
          onSubmit={ handleUserInfoSubmit}
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form className="w-full">
              <div
                className="w-full mt-3 flex flex-row item-center
                  text-gray-500 flex-wrap md:justify-around  text-[20px] text-nowrap"
              >
                <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto ">
                  <label for="FName" className=" mb-1 ">
                    {" "}
                    نام{" "}
                  </label>
                  <Field
                    id="FName"
                    className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] "
                    type="text"
                    name="FName"
                  />
                </div>

                <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto">
                  <label for="LName" className="w-full  mb-1">
                    {" "}
                    نام خانوادگی{" "}
                  </label>

                  <Field
                    id="LName"
                    className="w-full h-10 rounded-lg pr-3 mb-4  border-2 border-[#a193ff]"
                    type="text"
                    name="LName"
                  />
                </div>
                <div className="w-[70%] flex flex-col md:w-[45%] lg:w-[30%] mx-auto ">
                  <label for="UserAbout" className=" mb-1 ">
                    {" "}
                    درباره من{" "}
                  </label>
                  <Field
                    id="UserAbout"
                    className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] "
                    type="text"
                    name="UserAbout"
                  />
                </div>
                <div className="w-[70%] flex flex-col  md:w-[45%] lg:w-[30%] mx-auto ">
                  <div>جنسیت</div>
                  <div className="flex flex-row justify-start gap-4 leading-[3rem] items-center">
                    <label for="fmail" className="pr-4 mt-2 ">
                      {" "}
                      زن{" "}
                    </label>
                    <Field
                      id="fmail"
                      className=" pr-4 rounded-lg mt-2 border-2 border-[#a193ff] "
                      onChange={handleChange}
                      value="false"
                      type="radio"
                      name="gender"
                    />
                    <label for="mail" className="pr-4 mt-2 ">
                      {" "}
                      مرد{" "}
                    </label>
                    <Field
                      id="mail"
                      className="pr-4 mt-2 border-2 border-[#a193ff] "
                      onChange={handleChange}
                      value="true"
                      type="radio"
                      name="gender"
                    />
                  </div>
                </div>
                <div className="w-[70%] flex flex-col mx-auto md:w-[45%] lg:w-[30%]">
                  <label for="NationalCode" className=" mb-1">
                    {" "}
                    کد ملی{" "}
                  </label>

                  <Field
                    id="NationalCode"
                    className="w-full h-10 mb-4  rounded-lg pr-3 border-2 border-[#a193ff]"
                    type="text"
                    name="NationalCode"
                  />
                </div>
                <div className="w-[70%] relative flex flex-col mx-auto md:w-[45%] lg:w-[30%] ">
                  <label for="BirthDay" className=" mb-1">
                    {" "}
                    تاریخ تولد{" "}
                  </label>

                  {/* <Field id="BirthDay" className="w-full h-10 mb-4  rounded-lg pr-3 border-2 border-[#a193ff]" type='text' name='BirthDay' /> */}
                  
                   <DatePicker
                    id="BirthDay"
                    className="w-full h-10 mb-4 gap-10 rounded-lg pr-3 text-left border-2 border-[#a193ff] "
                    showIcon
                    type="text"
                    name="BirthDay"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    popperClassName="some-custom-class"
                    popperPlacement="top-end"
                    popperModifiers={[
                      {
                        name: "myModifier",
                        fn(state) {
                          // Do something with the state
                          return state;
                        },
                      },
                    ]}
                    icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 48 48"
                          className="text-[#a193ff]"
                        >
                          <mask id="ipSApplication0">
                            <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                              <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                              <path
                                fill="#fff"
                                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                              ></path>
                            </g>
                          </mask>
                          <path
                            fill="currentColor"
                            d="M0 0h48v48H0z"
                            mask="url(#ipSApplication0)"
                          ></path>
                        </svg>
                      }
                  /> 
                 
                 
                </div>
                
                
                <div className="w-[70%] flex flex-col mx-auto md:w-[60%] ">
                  <label for="HomeAdderess" className=" mb-1 ">
                    {" "}
                    آدرس منزل{" "}
                  </label>
                  <Field
                    id="HomeAdderess"
                    className="w-full h-10 rounded-lg pr-3 mb-4 border-2 border-[#a193ff] "
                    type="text"
                    name="HomeAdderess"
                  />
                </div>
                <div className="w-[70%] md:w-[35%] pt-4 flex justify-start mx-auto md:items-center ">
                 
                  <Field
                    id="ReceiveMessageEvent"
                    className="rounded-lg pr-1 border-2 border-[#a193ff] "
                    type="checkbox"
                    name="ReceiveMessageEvent"
                  />
                   <label for="ReceiveMessageEvent" className="pr-2 ">
                    {" "}
                    دریافت پیامک{" "}
                  </label>
                </div>
              </div>
              <div className="w-[80%] mx-auto mt-4">
                <button
                  className="flex justify-center mb-10 md:mb-20 lg:mb-7 text-lg md:text-xl font-bold mx-auto text-nowrap 
                 rounded-lg bg-gradient-to-r from-[#7b2aff] to-[#4545ff] w-[60%] py-2 md:py-4 text-center  
                 text-white "
                  type="submit"
                >
                  {" "}
                  ثبت اطلاعات{" "}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditAccount;
