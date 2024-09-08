import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ProfileImage from "./ProfileImage";
import { CustomPutUseMutationExtra } from "../customHook/CustomPutUseMutationExtra";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import http from '../../core/services/interceptore'
import * as yup from "yup";

const UserAccount = () => {

  const [startDate, setStartDate] = useState(new Date());
  const { mutate } = CustomPutUseMutationExtra();

// **********************************************
  const validation = yup.object().shape({
    LName:yup.string().required('این فیلد اجباری است'),
    FName:yup.string().required('این فیلد اجباری است'),

  });


 // **********************************************


  const handleUserInfoSubmit = async(values) => {
    // console.log('values' ,values );
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
    // const respon = await http.put(`/SharePanel/UpdateProfileInfo` , {data:data})
  };
 
  return (
    <div className="mx-auto w-[90%] h-[90%]">
      <ProfileImage />
      <div className="w-full">
        <Formik validationSchema={validation}
          initialValues={{
            LName: "",
            FName: "",
            UserAbout:"",
            ReceiveMessageEvent:false,
            NationalCode: "",
            HomeAdderess: "",
            gender: false,
            // BirthDay: "2024/01/01",
          }}
          onSubmit={ handleUserInfoSubmit}
          
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form className="w-full">
              <div
                className="flex flex-row flex-wrap md:justify-around item-center mt-3 w-full text-[20px] text-gray-500 text-nowrap"
              >
                <div className="flex flex-col mx-auto w-[70%] md:w-[45%] lg:w-[30%]">
                  <label for="FName" className="mb-1">
                    {" "}
                    نام{" "}
                  </label>
                  <Field
                    id="FName"
                    className="border-[#a193ff] border-2 mb-4 pr-3 rounded-lg w-full h-10"
                    type="text"
                    name="FName"
                  />
                  <ErrorMessage name="FName" component={'p'} />
                </div>

                <div className="flex flex-col mx-auto w-[70%] md:w-[45%] lg:w-[30%]">
                  <label for="LName" className="mb-1 w-full">
                    {" "}
                    نام خانوادگی{" "}
                  </label>

                  <Field
                    id="LName"
                    className="border-[#a193ff] border-2 mb-4 pr-3 rounded-lg w-full h-10"
                    type="text"
                    name="LName"
                  />
                </div>
                <div className="flex flex-col mx-auto w-[70%] md:w-[45%] lg:w-[30%]">
                  <label for="UserAbout" className="mb-1">
                    {" "}
                    درباره من{" "}
                  </label>
                  <Field
                    id="UserAbout"
                    className="border-[#a193ff] border-2 mb-4 pr-3 rounded-lg w-full h-10"
                    type="text"
                    name="UserAbout"
                  />
                </div>
                <div className="flex flex-col mx-auto w-[70%] md:w-[45%] lg:w-[30%]">
                  <div>جنسیت</div>
                  <div className="flex flex-row justify-start items-center gap-4 leading-[3rem]">
                    <label for="fmail" className="mt-2 pr-4">
                      {" "}
                      زن{" "}
                    </label>
                    <Field
                      id="fmail"
                      className="border-[#a193ff] border-2 mt-2 pr-4 rounded-lg"
                      onChange={handleChange}
                      value="false"
                      type="radio"
                      name="gender"
                    />
                    <label for="mail" className="mt-2 pr-4">
                      {" "}
                      مرد{" "}
                    </label>
                    <Field
                      id="mail"
                      className="border-[#a193ff] border-2 mt-2 pr-4"
                      onChange={handleChange}
                      value="true"
                      type="radio"
                      name="gender"
                    />
                  </div>
                </div>
                <div className="flex flex-col mx-auto w-[70%] md:w-[45%] lg:w-[30%]">
                  <label for="NationalCode" className="mb-1">
                    {" "}
                    کد ملی{" "}
                  </label>

                  <Field
                    id="NationalCode"
                    className="border-[#a193ff] border-2 mb-4 pr-3 rounded-lg w-full h-10"
                    type="text"
                    name="NationalCode"
                  />
                </div>
                <div className="relative flex flex-col mx-auto w-[70%] md:w-[45%] lg:w-[30%]">
                  <label for="BirthDay" className="mb-1">
                    {" "}
                    تاریخ تولد{" "}
                  </label>

                  {/* <Field id="BirthDay" className="border-[#a193ff] border-2 mb-4 pr-3 rounded-lg w-full h-10" type='text' name='BirthDay' /> */}
                  
                   <DatePicker
                    id="BirthDay"
                    className="gap-10 border-[#a193ff] border-2 mb-4 pr-3 rounded-lg w-full h-10 text-left"
                    showIcon
                    type="text"
                    name="BirthDay"
                    selected={startDate}
                    value={startDate}
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
                
                
                <div className="flex flex-col mx-auto w-[70%] md:w-[60%]">
                  <label for="HomeAdderess" className="mb-1">
                    {" "}
                    آدرس منزل{" "}
                  </label>
                  <Field
                    id="HomeAdderess"
                    className="border-[#a193ff] border-2 mb-4 pr-3 rounded-lg w-full h-10"
                    type="text"
                    name="HomeAdderess"
                  />
                </div>
                <div className="flex justify-start md:items-center mx-auto pt-4 w-[70%] md:w-[35%]">
                 
                  <Field
                    id="ReceiveMessageEvent"
                    className="border-[#a193ff] border-2 pr-1 rounded-lg"
                    type="checkbox"
                    name="ReceiveMessageEvent"
                  />
                   <label for="ReceiveMessageEvent" className="pr-2">
                    {" "}
                    دریافت پیامک{" "}
                  </label>
                </div>
              </div>
              <div className="mx-auto mt-4 w-[80%]">
                <button
                  className="flex justify-center bg-gradient-to-r from-[#7b2aff] to-[#4545ff] mx-auto mb-10 md:mb-20 lg:mb-7 py-2 md:py-4 rounded-lg w-[60%] font-bold text-center text-lg text-nowrap text-white md:text-xl"
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

export default UserAccount;
