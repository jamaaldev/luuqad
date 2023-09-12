import { useAppSelector } from "@/lib/hooks/userSelected"
import { useGetAlphaBetsQuery } from "@/store/api/Courses"
import { useEffect } from "react"
import CoursesCard from "./CoursesCard"

const CoursesList = () => {
  const isSelected = useAppSelector((state) => state.courses.isSelected)

  const { data: alphabetdataCourses, refetch } = useGetAlphaBetsQuery("getall")

  useEffect(() => {
    refetch()
  }, [isSelected])
  return (
    <div className='flex justify-center flex-wrap gap-7 mb-6 mt-11'>
      {alphabetdataCourses?.map((course) => (
        <CoursesCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CoursesList
