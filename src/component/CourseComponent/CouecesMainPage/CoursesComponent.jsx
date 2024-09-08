import { useEffect, useState, useRef } from "react";
import { Cardcomponentcourses } from "../Cardcomponentcourses";
import Filtercourses from "../Filtercourses";
import Titelmenulist from "../Titelmenulist";
import Topheaderseconde from "../Topheaderseconde";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import http from "../../../core/services/interceptore";
// import { CardItem } from "../../../common/Cource/CardItem";
import deskImage from '../../../assets/image/SVG/Rectangle 90.svg'
import ScrollToTop from "react-scroll-to-top";


export const CoursesComponent = () => {


  // *********************************************************

  const setFiltershow =useSelector(state => state.setFiltershow.setFiltershow)
  const [showType , setShowType]= useState(true)
  const show = setFiltershow  ? `md:w-[20%]` : `md:w-0`;
  const cardWidth = setFiltershow  ? `md:w-[70%]` : `md:w-[100%]`;
  // const pageNumber = setFiltershow ? `6` : `8`

  // ***********************STATE ***********************************
 
  const [PageNum, setPageNum] = useState(1);
  const [paginationSize, setpaginationSize] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [paginationArray, setPaginationArray] = useState(null);
  const [CourseType, setCourseType] = useState('');
  const [CourseLevel, setCourseLevel] = useState('');
  const [sortType , setSortType] = useState('DESC')
  const [sortCol , setSortCol] = useState()
  const [techCount, setTechCount] = useState(0)
  const [listTechnology , setListTechnology]= useState([])
  const [technology , setTechnology] = useState(``)
  const [costDown , setCostDown] = useState(0)
  const [costUp , setCostUp] = useState(1000000000)


  // *******************************************************

  // `/Home/GetCoursesWithPagination?PageNumber=${PageNum}&RowsOfPage=6&SortingCol=${sortCol}&SortType=${sortType}$Query={searchQuery}&TechCount=0&courseLevelId=${CourseLevel}`
  // /Home/GetCoursesWithPagination?PageNumber=${PageNum}&RowsOfPage=8&SortingCol=${sortCol}&SortType=${sortType}&Query=${searchQuery}&CostDown=&CostUp=&TechCount=0&ListTech=&courseLevelId=${CourseLevel}&CourseTypeId=&StartDate=&EndDate=&TeacherId=2

  const getCourseList = async () => {
    try{
      const res = await http.get(
        `/Home/GetCoursesWithPagination?PageNumber=${PageNum}&RowsOfPage=8&SortingCol=${sortCol}&SortType=${sortType}${searchQuery}&CostDown=${costDown}&CostUp=${costUp}&TechCount=${techCount}${technology}&courseLevelId=${CourseLevel}&CourseTypeId=${CourseType}`
      );
      return res;
    }
    catch{

    }
  };

  const { data, isLoading, isError, error,refetch, onSuccess } = useQuery(
    ["courseListAll", PageNum, searchQuery , CourseLevel , sortType , sortCol, CourseType , technology, costDown, costUp],
    getCourseList,
    {
      onSuccess: (data) => {
        setpaginationSize(Math.ceil(data.totalCount / 8));
      },
    }
  );
  // console.log('data', data);
  
  // if(onSuccess){
  //   setpaginationSize(Math.ceil(data.totalCount / 8));
  // }

  // ***************************************************
  const handleTechnology = (e) => {
    const item= e.target.value
    var newListTechnology = [...listTechnology]
    if(!newListTechnology.includes(item) && e.target.checked){
      newListTechnology.push(item)
      // console.log('newListTechnology' , newListTechnology);
      setListTechnology(newListTechnology)
      setTechCount(1)
      setTechnology(`&listTechnology=${newListTechnology}`)
    }
    else{
      const filterArrey = newListTechnology.filter(recordd => {
        return recordd !==item
      })
      setListTechnology(filterArrey)
      setTechnology(`&listTechnology=${filterArrey}`)
    }
  }



  // ****************************************************

  var pageArr = [];

  useEffect(() => {
    for (let i = 1; i <= paginationSize; i++) {
      pageArr.push(i);
    }
    setPaginationArray(pageArr);
  }, [paginationArray]);

  const ref = useRef();

  const handleSearch = (e) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      e.target.value && setSearchQuery(`&Query=${e.target.value}`);
    }, 800);
    !e.target.value && setSearchQuery(``);

  };

  return (
    <div className="bg-contain bg-no-repeat w-full" style={{backgroundImage:`url(${deskImage}) `}}>
      <div className="dark:bg-violet-950 shadow-2xl dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
        <Topheaderseconde />
        <Titelmenulist
          handleSearch={handleSearch}
          showType={showType}
          setShowType={setShowType}
          sortType={sortType}
          setSortType={setSortType}
          sortCol={sortCol}
          setSortCol={setSortCol}


        />
        <div className="flex flex-row flex-nowrap justify-center mx-auto w-[85%] h-full">
          <div
            className={` lg:block w-0  flex md:item-between mx-auto ${show}`}>
            <Filtercourses setCourseType={setCourseType} setCourseLevel={setCourseLevel} setTechnology={setTechnology}
            setCostDown={setCostDown} setCostUp={setCostUp} costDown={costDown} costUp={costUp} handleTechnology={handleTechnology}   />
          </div>
          <div className={`flex flex-row flex-wra mx-auto  w-full ${cardWidth} `}>
            <Cardcomponentcourses
              data={data && data}
              paginationArray={paginationArray && paginationArray}
              PageNum={PageNum}
              setPageNum={setPageNum}
              showType={showType}
              refetch={refetch}
            />
          </div>
        </div>
       
      </div>
      <ScrollToTop smooth style={{ backgroundColor: 'rgba(88,0,255,0.4)',
                right: '60px' ,
                borderRadius: '50%' ,
                textAlign: 'center',
                }}/>
    </div>
  );
};
