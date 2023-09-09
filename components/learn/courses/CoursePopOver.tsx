import LuuqadIconX from "@/components/icons/LuuqadIconX"
import {
  useGetAlphaBetsQuery,
  useUpdateUserSelectedMutation,
} from "@/store/slices/Courses"
import { userSelectedCourse } from "@/store/slices/CoursesSlice"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"

type Props = {
  isopen: boolean
}

const CoursePopOver = (props: Props) => {
  const dispatch = useDispatch()
  const { data: courses } = useGetAlphaBetsQuery("getall")
  const [updateSelectedCourse] = useUpdateUserSelectedMutation()
  const { data: session } = useSession()

  const handleClick = (id: number | undefined, langauge: string) => {
    updateSelectedCourse({
      user_id: session?.user?.id,

      isSelected: id,
    }).then(() => {
      dispatch(userSelectedCourse(langauge))
    })
  }

  return (
    <>
      {props.isopen ? (
        <div className='grid bg-white  rounded-2 border-2 w-64 h-max mt-3 overflow-hidden '>
          <div className='border-b-2 p-3'>
            <h2>My Courses</h2>
          </div>
          {courses?.map((course) => (
            <div
              key={course.id}
              onClick={() => handleClick(course?.id, course?.Langauge)}
              className='flex items-center gap-3 border-b-2 p-3 cursor-pointer hover:bg-slate-50'>
              <Image
                width={30}
                height={30}
                src={`/svg/${
                  course?.Langauge.toLocaleLowerCase() || "undefined"
                }.svg`}
                alt={course?.Langauge.toLocaleLowerCase() || "langauge"}
              />
              <span>{course?.Langauge.toLocaleLowerCase()}</span>
            </div>
          ))}

          <Link href={"/learn/courses"}>
            <div className='flex items-center gap-3 border-b-1 p-3 cursor-pointer hover:bg-slate-50 '>
              <span className='p-2 bg-slate-100 rounded-lg '>
                <LuuqadIconX width={15} />
              </span>
              Add a New Course
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default CoursePopOver
