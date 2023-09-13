import { ResponseData } from "@/app/api/courses/lessons/enroll/route"
import LuuqadIconHeart from "@/components/icons/LuuqadIconHeart"
import {
  useGetUserSelectedCoursesQuery,
  usePostLessonsMutation,
  usePostUserSelectedMutation,
  useUpdateUserSelectedMutation,
} from "@/store/api/Courses"
import { userSelectedCourse } from "@/store/slices/CoursesSlice"
import { AlphaBetTypeValid } from "@/validations/AlphabetIsValid"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

type Props = {
  course: AlphaBetTypeValid
}

const CoursesCard = (props: Props) => {
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const [enrollNewLesson] = usePostLessonsMutation()
  const [addUserSelectedCourse] = usePostUserSelectedMutation()
  const [updateSelectedCourse] = useUpdateUserSelectedMutation()
  const { data: userCourses, refetch } = useGetUserSelectedCoursesQuery()
  const handleClick = () => {
    updateSelectedCourse({
      user_id: session?.user?.id,

      isSelectedAlphabetCourse_id: props.course.id,
    })

    addUserSelectedCourse({
      user_id: session?.user?.id,
      isSelectedAlphabetCourse_id: props.course.id,
    })

    enrollNewLesson({
      user_id: session?.user?.id,
      alphaBetsCourses_id: props.course.id,
    })
      .then((data) => {
        const value: ResponseData = data as ResponseData

        if (value.data.status === 409) {
          toast.info(value.data?.message)
        } else {
          toast.success(value.data?.message)
          refetch()
          dispatch(userSelectedCourse(props.course.Langauge))
        }
      })
      .catch((err) => {
        toast.info("enrollNewLesson Something is Wrong")
        console.log(err)
      })
  }
  return (
    <div
      onClick={handleClick}
      data-direction={props?.course?.Direction}
      className='relative w-fit px-12 cursor-pointer  py-10 flex justify-center text-center items-center active:translate-y-[2px] active:translate-z-0 before:active:shadow-none before:content-[""] before:absolute before:shadow-border_b before:shadow-slate-200 before:border-2 before:-left-0 before:-right-0 before:-top-2 before:-bottom-2 before:rounded-2xl before:hover:bg-slate-100 before:-z-10  '>
      <button>
        {userCourses?.map((selected) =>
          selected.AlphaBetsCourses?.id === props.course.id ? (
            <LuuqadIconHeart key={selected.AlphaBetsCourses?.id} width={50} />
          ) : (
            ""
          ),
        )}
        <Image
          src={`/svg/${props?.course?.Langauge.toLocaleLowerCase()}.svg`}
          width={100}
          height={100}
          alt={props?.course?.Langauge.toLocaleLowerCase() || "language"}
        />
        <p>{props?.course?.Langauge}</p>
        <span>
          {"35"}M {"Learners"}
        </span>
      </button>
    </div>
  )
}

export default CoursesCard
