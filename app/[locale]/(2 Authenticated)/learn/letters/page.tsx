"use client"

import { BottomBar } from "@/components/learn/BottomBar"
import { LeftBar } from "@/components/learn/LeftBar"
import { TopBar } from "@/components/learn/TopBar"
import LettersList from "@/components/learn/letters/LettersList"
import { useParams } from "next/navigation"

type Props = {}

const page = (props: Props) => {
  const { locale } = useParams()

  let lettersName: any = "Letters"
  if (locale == "so") {
    lettersName = "Xarfo"
  }
  return (
    <div>
      <TopBar backgroundColor='bg-[#58cc02]' borderColor='border-[#46a302]' />
      <LeftBar selectedTab={lettersName} />

      <div className='main-right flex justify-center gap-3 pt-14 sm:p-6 sm:pt-6 md:ml-24 c-max-tm:w-[100%] c-max-td:w-[812px]   c-min-lg:ml-64 c-min-lg:gap-12'>
        <div className='flex max-w-[592px] grow flex-col'>
          <LettersList />
        </div>
        {/* <RightBar /> */}
      </div>

      <div className='pt-[90px]'></div>
      <BottomBar selectedTab={lettersName} />
    </div>
  )
}

export default page
