import { CardItem } from "../../common/Cource/CardItem";
import { useSelector } from "react-redux";
import { CardItemFull } from "../../common/Cource/CardItemFull";




export const Cardcomponentcourses = ({data , paginationArray , PageNum , setPageNum , showType , refetch}) => {
 
  const setFiltershow = useSelector(state=>state.setFiltershow.setFiltershow)
  const cardSize=setFiltershow?`w-[21rem]`:`w-[23rem]`


  return (
    <>
     <div className="flex flex-col w-full">
     <div className="flex md:flex-row flex-col md:flex-wrap justify-center md:justify-center gap-3 items-center  mx-auto w-[95%]">
        {data?.courseFilterDtos.map((result, index) => {
          return (
           <>
           {showType ?  <div key={result.courseId} className={` mx-auto  ${cardSize}`}>
              <div data-aos="zoom-in" data-aos-duration="500" className="bg-violet-50 dark:bg-violet-900 dark:shadow-lg dark:hover:shadow-violet-600 mt-1 mb-10  p-[1rem] rounded-[0.9375rem]">
                <CardItem
                id={result.courseId}
                title={result.title}
                img={result.tumbImageAddress}
                sectionCours={result.sectionCours}
                timeCours={result.statusName}
                calender={result.lastUpdate}
                master={result.teacherName}
                like={result.likeCount}
                dislike={result.dissLikeCount}
                priceCourse={result.cost}
                countStudio={result.levelName}
                currentRegistrants ={result.currentRegistrants}
                userFavorite={result.userFavorite}
                userFavoriteId={result.userFavoriteId}
                userIsLiked={result.userIsLiked}
                userLikedId={result.userLikedId}
                currentUserDissLike={result.currentUserDissLike}
                refetch={refetch}

                />
              </div>
              
            </div> :  <div key={index} className={` mx-auto w-full`}>
              <div className=" w-full  dark:bg-violet-900 dark:shadow-lg mx-auto dark:hover:shadow-violet-600 mt-1 mb-5 p-[1rem] rounded-[0.9375rem]">
              <CardItemFull 
                  id={result.courseId}
                  title={result.title}
                  img={result.tumbImageAddress}
                  sectionCours={result.sectionCours}
                  timeCours={result.statusName}
                  calender={result.lastUpdate}
                  master={result.teacherName}
                  like={result.likeCount}
                  dislike={result.dissLikeCount}
                  priceCourse={result.cost}
                  countStudio={result.levelName}
                  currentRegistrants ={result.currentRegistrants}
                  userFavorite={result.userFavorite}
                  userFavoriteId={result.userFavoriteId}
                  userIsLiked={result.userIsLiked}
                  userLikedId={result.userLikedId}
                  currentUserDissLike={result.currentUserDissLike}
                  refetch={refetch}
                  courseRate={result.courseRate}
                />

              </div>
              
            </div>}
           </>
          );
        })}
      </div>

      {/* <button onClick={() => setPageNum(PageNum+1)}>nextpage </button>
        {paginationArray?.length>0 && paginationArray?.map(item => {
          return(
            <div className='' onClick={() => setPageNum(item)}>{item}</div>
          )
        }) }
======= */}
      {/* <button onClick={() => setPageNum(PageNum+1)}>nextpage </button> */}
      <div className="flex flex-row justify-center items-center gap-2 font-[20px] text-center mb-10">
      {paginationArray?.length>0 && paginationArray?.map(item => {
          return(
            <div  className="rounded-full shadow-lg pt-2 dark:bg-violet-900 dark:shadow-lg dark:hover:shadow-violet-600 shadow-violet-700 hover:bg-violet-300 w-[40px] h-[40px] cursor-pointer" onClick={() => setPageNum(item)}>{item}</div>
          )
        }) }
      </div>
     </div>
    </>
  );
};
