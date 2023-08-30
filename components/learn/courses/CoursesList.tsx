import { useGetAlphaBetsQuery } from "@/store/slices/Courses"
import CoursesCard from "./CoursesCard"

type Props = {}

const CoursesList = (props: Props) => {
  const { data: alphabetdata } = useGetAlphaBetsQuery("getall")
  return (
    <div className='flex justify-center flex-wrap gap-7 mb-6 mt-11'>
      {alphabetdata?.map((course) => (
        <CoursesCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CoursesList
