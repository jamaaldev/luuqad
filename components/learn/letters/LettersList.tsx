"use client"
import { useGetLessonsQuery } from "@/store/api/Courses"
import Letter from "./Letter"

const LettersList = () => {
  const { data: letters } = useGetLessonsQuery("getall")

  return (
    <div className=' relative grid justify-center grid-cols-4 gap-6 p-5'>
      {letters?.map((letter) => <Letter key={letter?.id} letters={letter} />)}
    </div>
  )
}

export default LettersList
