import React from 'react'
import DetailsTap1Component from './DetailsTap1Component';
import PreviewCourseComponent from './PreviewCourseComponent ';
import UserCommentComponent from './UserCommentComponent';
import { Tabs, rem } from '@mantine/core';

const TabCoursComponent = ({data})=> {
    const iconStyle = { width: rem(12), height: rem(12) };
  
    return (
      <Tabs className='w-full text-xl'    defaultValue="Detail">
        <Tabs.List className='flex justify-center md:justify-start border-[#B8B8FF] mx-auto px-2 pt-5 border-b-2 w-[95%] text-[#8765FF] text-nowrap'>
          <Tabs.Tab className='bg-violet-400 focus:bg-[#8765FF] px-8 py-3 rounded-t-2xl hover:text-white focus:text-white' value="Detail" >
            توضیحات
          </Tabs.Tab>
          {/* <Tabs.Tab className='hover:bg-violet-400 focus:bg-[#8765FF] mx-10 px-8 py-3 rounded-t-2xl hover:text-white focus:text-white' value="Preview" >
            پیش نمایش
          </Tabs.Tab> */}
          <Tabs.Tab className='hover:bg-violet-400 focus:bg-[#8765FF] px-8 py-3 rounded-t-2xl hover:text-white focus:text-white' value="UserComment">
            ثبت نظرات
          </Tabs.Tab>
        </Tabs.List>
  
        <Tabs.Panel value="Detail">
          <DetailsTap1Component data={data && data}/>
        </Tabs.Panel>
  
        <Tabs.Panel value="Preview">
          <PreviewCourseComponent />
        </Tabs.Panel>
  
        <Tabs.Panel value="UserComment">
          <UserCommentComponent/>
        </Tabs.Panel>
      </Tabs>
    );
  }

export default TabCoursComponent
