import { Link } from "react-router-dom";
import html from "../../../assets/image/3.jpg";
import notFound from "../../../assets/image/Images-for-null 2.svg";



const SearchCourseItem = ({data}) => {
  const img= data?.tumbImageAddress
  const id= data?.courseId
  const noImage = img === null || img === "undefined" || img === "";
 

    return ( 
        <Link to={`/courses/${id}`} className=" flex gap-5 mb-5 rounded-lg mt-5">
                  <div className=" py-2 w-[150px] h-[90px]">
                    <img
                      className=" w-[150px] h-[90px] rounded-lg object-cover"
                      src={noImage ? notFound : img}
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <h5 className="pt-5 mb-2 pl-4  text-ellipsis overflow-hidden w-[5rem]
                        text-indigo-900 md:text-[18px] dark:text-white whitespace-nowrap">
                        {" "}
                        {data?.title}
                      </h5>
                    </div>
                    <span className="dark:text-violet-200 mt-10 md:mt-2 text-violet-800">
                      {data?.cost} 
                    </span>

                    <div className="gap-2 flex dark:text-violet-200 mt-8 md:mt-2 text-slate-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                      <span className="text-nowrap text-[14px] overflow-hidden text-ellipsis">{data?.teacherName}</span>
                    </div>
                  </div>
                </Link>
     );
}
 
export default SearchCourseItem;