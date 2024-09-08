import React, { useEffect } from 'react'
import { CourcesDetailPageComponent } from '../../component/CourseComponent/CouecesMainPage/CourcesDetailPageComponent'

const CourcesDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, []);
 
  return (
    <div>
    <CourcesDetailPageComponent/>
    </div>
  )
}

export default CourcesDetailPage
