import {
  useGetAlphaBetsQuery,
  useGetUserSelectedQuery,
} from "@/store/api/Courses"
import Image from "next/image"
import { useState } from "react"
import CoursePopOver from "./CoursePopOver"

const CourseSelected = () => {
  const { data: usercourses } = useGetAlphaBetsQuery("getall")
  const { data: userselected } = useGetUserSelectedQuery("getone")

  const selectedCourse = usercourses?.find(
    (course) => course && course.id === userselected?.isSelected,
  )
  // const userSelectedCourse = () => {}
  const [isopen, SetOpen] = useState(false)
  const handlMouseEnter = (event: React.MouseEvent) => {
    if (event.type === "mouseenter") {
      SetOpen(true)
    }
  }
  const handlMouseLeave = (event: React.MouseEvent) => {
    if (event.type === "mouseleave") {
      SetOpen(false)
    }
  }
  return (
    <div>
      <div
        onMouseEnter={handlMouseEnter}
        onMouseLeave={handlMouseLeave}
        className=' relative'>
        <button className='relative flex cursor-pointer  items-center gap-2 rounded-xl px-1 py-1 font-bold uppercase text-white '>
          <Image
            priority={true}
            width={50}
            height={50}
            src={`/svg/${
              selectedCourse?.Langauge.toLocaleLowerCase() || undefined
            }.svg`}
            alt={selectedCourse?.Langauge.toLocaleLowerCase() || "langauge"}
          />
        </button>

        <div className='absolute w-max -translate-x-2/4  left-1/2 right-1/2 z-10'>
          <CoursePopOver isopen={isopen} />
        </div>
      </div>
    </div>
  )
}

export default CourseSelected
