import React, { useEffect } from 'react'
import ScrollToTop from "react-scroll-to-top";
import NewsDetailTopComponent from '../NewsDetailsComponent/NewsDetailTopComponent'
import NewsDtailsExplanation from '../NewsDetailsComponent/NewsDtailsExplanation'
import NewsDetailShare from '../NewsDetailsComponent/NewsDetailShare'
import AllUsersComment from '../CourcesDetailComponent/AllUsersComment'
import handleTheme from '../../core/services/handleTheme'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import deskImage from '../../assets/image/SVG/Rectangle 90.svg'
import {getList} from '../../function/getList'


const NewsDetailsPageComponent = () => {

  const {id}  = useParams()
  const {data , isLoading ,isError , error , refetch} = useQuery("newsList5",
     () => getList(`/News/${id}`))

  useEffect(() => {
    handleTheme();
 
  }, []);

  return (
    <div className="bg-contain bg-no-repeat w-full" style={{backgroundImage:`url(${deskImage}) `}}>
        <div className="dark:bg-violet-950 shadow-2xl dark:shadow-2xl dark:shadow-violet-600 mx-auto max-w-[1920px]">
            <NewsDetailTopComponent data={data?.detailsNewsDto}  />
            <NewsDtailsExplanation  data={data?.detailsNewsDto} />
            <NewsDetailShare />
            <AllUsersComment data={data?.commentDtos} refetch={refetch}  />
            
        </div>
        <ScrollToTop smooth style={{ backgroundColor: 'rgba(88,0,255,0.4)',
                right: '60px' ,
                borderRadius: '50%' 
                }}/>
      
    </div>
  )
}

export default NewsDetailsPageComponent
