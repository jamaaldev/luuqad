"use client"
import { BottomBar } from "@/components/learn/BottomBar"
import { LeftBar } from "@/components/learn/LeftBar"
import { TopBar } from "@/components/learn/TopBar"
import CoursesList from "@/components/learn/courses/CoursesList"
import { NextPage } from "next/types"

const Courses: NextPage = () => {
  return (
    <div>
      <TopBar backgroundColor='bg-[#58cc02]' borderColor='border-[#46a302]' />
      <LeftBar selectedTab={"Courses"} />

      <div className='main-right flex justify-center gap-3 pt-14 sm:p-6 sm:pt-6 md:ml-24 c-max-tm:w-[100%] c-max-td:w-[812px]   c-min-lg:ml-64 c-min-lg:gap-12'>
        <div className='flex max-w-[592px] grow flex-col'>
          <CoursesList />
        </div>
        {/* <RightBar /> */}
      </div>

      <div className='pt-[90px]'></div>
      <BottomBar selectedTab={"Courses"} />
    </div>
  )
}

export default Courses
