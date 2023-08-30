"use client"
import { useGetLessonsQuery } from "@/store/slices/Courses"
import Letter from "./Letter"

type Props = {}

const LettersList = (props: Props) => {
  const { data: letters } = useGetLessonsQuery("getall")
  console.log("🚀 ~ file: LettersList.tsx:8 ~ LettersList ~ letters:", letters)

  return (
    <div className=' relative grid justify-center grid-cols-4 gap-6 p-5'>
      {letters?.map((letter) => <Letter />)}
    </div>
  )
}

export default LettersList
