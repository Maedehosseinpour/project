import CardNews from "./CardNews";
import DataNews from "../../NewsDetailsComponent/DataNews.json";
import TitrComponent from "../../../common/TitrComponent/TitrComponent";
import AllButton from "../../../common/button/AllButton";
import { Link } from "react-router-dom";
import DesignSvgComponent from "../../SvgComponent/DesignSvgComponent";
import { useQuery } from 'react-query'
import { getList } from '../../../function/getList'




const News = () => {
  const {data , isLoading ,isError , error} = useQuery("newsList1",
      () => getList("/News?PageNumber=1&RowsOfPage=2&SortingCol=InsertDate&SortType=DESC"))

  return (
      <div className="relative dark:bg-violet-950 mt-48 w-full">
        <DesignSvgComponent className=""/>
        <TitrComponent title=" اخبار و مقالات "/>
        
        <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-5 mx-auto w-full md:w-[95%]">
         
          {data?.news.map((item ,index) => {if(index <2)
            return(
            <div data-aos={Number(index) % 2 === 0 ? `fade-left` : `fade-right`} data-aos-duration={Number(index) % 2 === 0 ? `1100` : `1000`} className='z-10 w-[95%] md:w-[45%]'  key={item.id}> 
              <CardNews 
              id={item.id}
              title={item.title}
              img={item.currentImageAddressTumb}
              view={item.currentView}
              date={item.updateDate}
              description={item.miniDescribe}
              />

            </div>
            )
          })}
         
        </div>
       
        <Link to="/news"><AllButton title="نمایش بیشتر " /></Link>
      </div>

  );
};

export default News;
