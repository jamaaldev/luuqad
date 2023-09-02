import LuuqadIconX from "@/components/icons/LuuqadIconX"
import Image from "next/image"
import Link from "next/link"

type Props = {
  isopen: boolean
}

const CoursePopOver = (props: Props) => {
  return (
    <>
      {props.isopen ? (
        <div className='grid bg-white  rounded-2 border-2 w-64 h-max mt-3 '>
          <div className='border-b-2 p-3'>
            <h2>My Courses</h2>
          </div>
          <div className='flex items-center gap-3 border-b-2 p-3 cursor-pointer hover:bg-slate-50'>
            <Image
              width={35}
              height={30}
              src={"/svg/English.svg"}
              alt='English'
            />
            <span>English</span>
          </div>

          <div className='flex items-center gap-3 border-b-1 p-3 cursor-pointer hover:bg-slate-50'>
            <span className='p-2 bg-slate-100 rounded-lg '>
              <LuuqadIconX width={15} />
            </span>
            <Link href={"/learn/courses"}>Add a New Course</Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default CoursePopOver
