import axios from "axios";
import { json } from "react-router-dom";
import { getItem } from "../../../localStorage/localStorage";




import { toast } from "react-toastify";




// const baseURL = 'https://classapi.sepehracademy.ir/api'
const baseURL = import.meta.env.VITE_BASE_URL


const instance = axios.create({
    baseURL: baseURL,
});

const onSuccess = (response) => {
   
    if (response.data.message === "عملیات با موفقیت انجام شد.") {
      toast.success(response.data.message);
    }
    //  else {
    //   toast.warning(response.data.message);
    // }
    return response.data;
  };
  
  const onError = (err) => {
    if (err.status === 401) {
      removeItem("token");
      toast.error("ابتدا وارد حساب کاربری خود شوید");
      window.location.pathname = "/";
    }
  
    // if (err.response.status >= 400 && err.response.status < 500) {
    //   toast.error("Client error: " + err.status);
    // }
  
    return Promise.reject(err);
  };
  
  instance.interceptors.response.use(onSuccess, onError);


  instance.interceptors.request.use((opt) => {
    const token = getItem("token");
  
    if (token) opt.headers.Authorization = "Bearer " + token;
    return opt;
  });


export default instance;









