"use client"

import CharacterCreate from "@/components/admin/courses/character/CharacterCreate"

type Props = {}

const page = (props: Props) => {
  // const { data: getAlphaBets, isFetching } = useGetAlphaBetsQuery("getall")

  // const data = getAlphaBets?.alphabetsGetAll.map((data) => data)
  return (
    <div>
      <CharacterCreate />
    </div>
  )
}

export default page
