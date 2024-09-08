import React, { useRef, useState } from "react";
import Topheaderseconde from "../CourseComponent/Topheaderseconde";
import CardNews from "../LandingComponent/News/CardNews";
import DataNews from "../NewsDetailsComponent/DataNews.json";
import ItemFilterNews from "../NewsDetailsComponent/SortFilterItem/ItemFilterNews";
import { useQuery } from "react-query";
import { getList } from "../../function/getList";
import deskImage from "../../assets/image/SVG/Rectangle 90.svg";
import ScrollToTop from "react-scroll-to-top";

const  NewsPageComponent = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [sortNews, setSortNews] = useState('InsertDate');
  const { data, isLoading, isError, error } = useQuery(["newsList1", searchQuery,sortNews], () =>
    getList(
     `/News?PageNumber=1&RowsOfPage=10&SortingCol=${sortNews}&SortType=DESC&${searchQuery}`
    )
  );

  const ref = useRef();

  const handleSearch = (e) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      e.target.value && setSearchQuery(`&Query=${e.target.value}`);
    }, 800);
    !e.target.value && setSearchQuery(``);
  };

  return (
    <>
      <div
        className="bg-cover bg-no-repeat w-full"
        style={{ backgroundImage: `url(${deskImage}) ` }}
      >
        <div className="dark:bg-violet-950 shadow-2xl dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
          {/* <div className='absolute'>
            <svg className='top-0 left-0 absolute w-full' width="full" height="1242" viewBox="0 0 1440 1242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H1440V754.717L0 1242V0Z" fill="#B0B0FC"/>
            </svg>

            </div> */}

          <Topheaderseconde className="" />
          <ItemFilterNews className=""  handleSearch={handleSearch} sortNews={sortNews} setSortNews={setSortNews}  />
          <div className="flex flex-col justify-center items-center mx-auto px-5 w-[90%]">
            {data?.news.map((item) => {
              return (
                <div className="w-[90%]" key={item.id}>
                  <CardNews
                    id={item.id}
                    title={item.title}
                    img={item.currentImageAddressTumb}
                    view={item.currentView}
                    date={item.updateDate}
                    description={item.miniDescribe}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ScrollToTop smooth
        style={{
          backgroundColor: "rgba(88,0,255,0.4)",
          right:'60px',
          item :'center',
          borderRadius: "50%",
          
        }}
      />
    </>
  );
};
export default NewsPageComponent;
