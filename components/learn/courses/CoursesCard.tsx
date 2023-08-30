import { AlphaBetTypeValid } from "@/validations/AlphabetIsValid"
import Image from "next/image"

type Props = {
  course: AlphaBetTypeValid
}

const CoursesCard = (props: Props) => {
  const handleClick = (direction: React.SyntheticEvent<HTMLElement>) => {
    console.log("yes click", direction.currentTarget.dataset.direction)
  }
  return (
    <div
      onClick={handleClick}
      data-direction={props.course.Direction}
      className='relative w-fit px-12 cursor-pointer  py-10 flex justify-center text-center items-center active:translate-y-[2px] active:translate-z-0 before:active:shadow-none before:content-[""] before:absolute before:shadow-border_b before:shadow-slate-200 before:border-2 before:-left-0 before:-right-0 before:-top-2 before:-bottom-2 before:rounded-2xl before:hover:bg-slate-100 before:-z-10  '>
      <button>
        <Image
          src={`/svg/${props.course.Langauge}.svg`}
          width={100}
          height={100}
          alt={props.course.Langauge}
        />
        <p>{props.course.Langauge}</p>
        <span>
          {"35"}M {"Learners"}
        </span>
      </button>
    </div>
  )
}

export default CoursesCard
