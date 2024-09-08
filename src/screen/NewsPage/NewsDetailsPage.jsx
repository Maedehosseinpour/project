import React, { useEffect } from 'react'
import NewsDetailsPageComponent from '../../component/NewsComponent/NewsDetailsPageComponent'

const NewsDetailsPage = () => {
  
  useEffect(() => {
    window.scrollTo(0,0)
}, []);
  return (
    <div className='w-full'>
      <NewsDetailsPageComponent/>
    </div>
  )
}

export default NewsDetailsPage
