"use client"
import { useGetLessonsQuery } from "@/store/slices/Courses"
import Letter from "./Letter"

type Props = {}

const LettersList = (props: Props) => {
  const { data: letters } = useGetLessonsQuery("getall")

  return (
    <div className=' relative grid justify-center grid-cols-4 gap-6 p-5'>
      {letters?.map((letter) => <Letter key={letter.id} letters={letter} />)}
    </div>
  )
}

export default LettersList
