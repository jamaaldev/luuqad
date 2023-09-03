import { useGetCurrentUserQuery } from "@store/slices/UserSlice"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"

type BottomBarItem = {
  name: Tab | string
  href: string
  icon: React.ReactNode
}

export type Tab = "Learn" | "Profile" | "Letters" | "Courses" | "Leaderboard"

export const useBottomBarItems = () => {
  const { locale } = useParams()
  const { data: user } = useGetCurrentUserQuery<any>()
  const t = useTranslations("Index")

  const bottomBarItems: BottomBarItem[] = [
    {
      name: t("Learn"),
      href: `/${locale}/learn`,
      icon: (
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          className='h-[50px] w-[50px]'>
          <path
            d='M24.5852 25.2658C24.2883 26.8243 22.9257 27.9519 21.3392 27.9519H10.6401C9.05354 27.9519 7.69094 26.8243 7.39408 25.2658L4.98096 12.5969L15.9001 4.52225L26.9988 12.5941L24.5852 25.2658Z'
            fill='#FFC800'
          />
          <path
            opacity='0.5'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.1558 23.1111C13.1558 22.522 13.6333 22.0444 14.2224 22.0444H18.4891C19.0782 22.0444 19.5558 22.522 19.5558 23.1111C19.5558 23.7002 19.0782 24.1778 18.4891 24.1778H14.2224C13.6333 24.1778 13.1558 23.7002 13.1558 23.1111Z'
            fill='#945151'
          />
          <path
            d='M19.4785 16.2998C19.4785 18.2208 17.9212 19.778 16.0002 19.778C14.0792 19.778 12.522 18.2208 12.522 16.2998C12.522 14.3788 14.0792 12.8215 16.0002 12.8215C17.9212 12.8215 19.4785 14.3788 19.4785 16.2998Z'
            fill='#945151'
          />
          <path
            d='M16.1685 2.84462C16.6431 2.84231 17.1233 2.98589 17.5361 3.28558L17.5368 3.2861L29.9455 12.2319C30.9781 12.9822 31.207 14.4275 30.4568 15.4601C29.7067 16.4924 28.262 16.7215 27.2294 15.9719L27.2286 15.9714L16.1602 7.99185L5.09208 15.9712L5.09121 15.9719C4.05865 16.7213 2.61395 16.4923 1.86391 15.4599C1.11367 14.4273 1.34258 12.982 2.3752 12.2318L2.37679 12.2306L14.7839 3.28596L14.7846 3.28544C15.2022 2.98229 15.6887 2.83889 16.1685 2.84462Z'
            fill='#FF4B4B'
          />
        </svg>
      ),
    },
    {
      name: t("Letters"),
      href: `/${locale}/learn/letters`,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50'
          height='50'
          viewBox='0 0 50 50'>
          <path
            fill='#00b8f0'
            d='M44.792 10.844 27.083 10v1.636h-4.167V10l-17.708.844a2.083 2.083 0 0 0-1.98 2.083v28.125a2.083 2.083 0 0 0 2.219 2.083l14-.844a1.042 1.042 0 0 1 .989.563c.27.688 1.042.948 1.969.948h5.208c.917 0 1.698-.261 1.969-.948a1.042 1.042 0 0 1 .989-.563l14 .844a2.083 2.083 0 0 0 2.219-2.083V12.927a2.083 2.083 0 0 0-2-2.083Z'
          />
          <path
            fill='#4acfff'
            d='M44.792 10.844 27.083 10v1.636h-4.167V10l-17.708.844a2.083 2.083 0 0 0-1.98 2.083v3.645a2.083 2.083 0 0 1 1.98-2.083L25 13.542l19.792.948a2.083 2.083 0 0 1 1.98 2.083v-3.656a2.083 2.083 0 0 0-1.98-2.073Z'
          />
          <path
            fill='none'
            stroke='#45413c'
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M44.792 10.844 27.083 10v1.636h-4.167V10l-17.708.844a2.083 2.083 0 0 0-1.98 2.083v28.125a2.083 2.083 0 0 0 2.219 2.083l14-.844a1.042 1.042 0 0 1 .989.563c.27.688 1.042.948 1.969.948h5.208c.917 0 1.698-.261 1.969-.948a1.042 1.042 0 0 1 .989-.563l14 .844a2.083 2.083 0 0 0 2.219-2.083V12.927a2.083 2.083 0 0 0-2-2.083Z'
            stroke-width='1.042'
          />
          <path
            fill='#627b8c'
            stroke='#45413c'
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21.875 37.5h6.25v2.083a1.605 1.605 0 0 1-1.605 1.605h-3.042a1.605 1.605 0 0 1-1.603-1.605V37.5h0Z'
            stroke-width='1.042'
          />
          <path
            fill='#45413c'
            d='M7.292 45.313a17.708 1.563 0 1 0 35.417 0 17.708 1.563 0 1 0-35.417 0Z'
            opacity='.15'
          />
          <path
            fill='#fffef2'
            d='m8.948 9.895-2.25 2.855a2.136 2.136 0 0 0-.355 1.177v26.698l2.605-3.823Zm32.105 0 2.25 2.855a2.136 2.136 0 0 1 .355 1.177v26.698l-2.605-3.823Z'
          />
          <path
            fill='#fff'
            d='M6.698 12.75a2.136 2.136 0 0 0-.355 1.177v3.645a2.136 2.136 0 0 1 .355-1.177l2.25-2.853V9.895Zm36.605 0-2.252-2.855v3.647l2.25 2.855a2.136 2.136 0 0 1 .355 1.177v-3.646a2.136 2.136 0 0 0-.355-1.177Z'
          />
          <path
            fill='none'
            stroke='#45413c'
            stroke-linecap='round'
            stroke-linejoin='round'
            d='m8.948 9.895-2.25 2.855a2.136 2.136 0 0 0-.355 1.177v26.698l2.605-3.823Zm32.105 0 2.25 2.855a2.136 2.136 0 0 1 .355 1.177v26.698l-2.605-3.823Z'
            stroke-width='1.042'
          />
          <path
            fill='#fffef2'
            d='M25 38.542V11.458a3.125 3.125 0 0 0-3.125-3.125l-11.98.958a1.583 1.583 0 0 0-.948.605v30.208l13.156-.417A3.562 3.562 0 0 1 25 38.542Zm3.125-30.208A3.125 3.125 0 0 0 25 11.459v27.083a3.562 3.562 0 0 1 2.895 1.145l13.156.417V9.897a1.583 1.583 0 0 0-.948-.605Z'
          />
          <path
            fill='#fff'
            d='m21.875 8.333-11.98.958a1.583 1.583 0 0 0-.948.605v3.041a1.042 1.042 0 0 1 .948-1.042l11.98-.957A3.125 3.125 0 0 1 25 14.063v-2.605a3.125 3.125 0 0 0-3.125-3.125Zm18.23.958-11.98-.958A3.125 3.125 0 0 0 25 11.458v2.605a3.125 3.125 0 0 1 3.125-3.125l11.98.958a1.042 1.042 0 0 1 .948 1.042V9.895a1.583 1.583 0 0 0-.948-.605Z'
          />
          <path
            fill='none'
            stroke='#45413c'
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M25 38.542V11.458a3.125 3.125 0 0 0-3.125-3.125l-11.98.958a1.583 1.583 0 0 0-.948.605v30.208l13.156-.417A3.562 3.562 0 0 1 25 38.542Zm3.125-30.208A3.125 3.125 0 0 0 25 11.459v27.083a3.562 3.562 0 0 1 2.895 1.145l13.156.417V9.897a1.583 1.583 0 0 0-.948-.605Z'
            stroke-width='1.042'
          />
          <path
            fill='#fffce5'
            stroke='#45413c'
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M25 38.542a3.125 3.125 0 0 0-3.125-2.604l-12.927.864-2.604 3.823 15.719-.864a3.48 3.48 0 0 1 2.938-1.219Zm2.938 1.219 15.718.864-2.605-3.823-12.926-.864a3.125 3.125 0 0 0-3.073 2.605 3.48 3.48 0 0 1 2.886 1.219Z'
            stroke-width='1.042'
          />
          <path
            fill='none'
            stroke='#45413c'
            stroke-linecap='round'
            stroke-linejoin='round'
            d='m21.355 11.98-9.375.895m9.375 3.094-9.375.895m9.375 3.094-9.375.886m9.375 3.105-9.375.886m9.375 3.094-9.375.895m9.375 3.094-9.375.895M28.647 11.98l9.375.895m-9.375 3.094 9.375.895m-9.375 3.094 9.375.886m-9.375 3.105 9.375.886m-9.375 3.094 9.375.895m-9.375 3.094 9.375.895'
            stroke-width='1.042'
          />
        </svg>
      ),
    },
    {
      name: t("Profile"),
      href: `/${locale}/learn/profile`,
      icon: (
        <>
          {user && user.user?.image ? (
            <Image
              className='rounded-full max-w-none c-max-md:w-[45px]'
              src={user.user?.image} // Use user.image instead of image
              width={46}
              height={46}
              alt='Picture of the author'
            />
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#ff9600'
              id='Layer_1'
              data-name='Layer 1'
              viewBox='0 0 24 24'
              width='46'
              height='46'>
              <path d='m16,23.314c-1.252.444-2.598.686-4,.686s-2.748-.242-4-.686v-2.314c0-2.206,1.794-4,4-4s4,1.794,4,4v2.314ZM12,7c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm12,5c0,4.433-2.416,8.311-6,10.389v-1.389c0-3.309-2.691-6-6-6s-6,2.691-6,6v1.389C2.416,20.311,0,16.433,0,12,0,5.383,5.383,0,12,0s12,5.383,12,12Zm-8-3c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Z' />
            </svg>
          )}
        </>
      ),
    },
  ]

  bottomBarItems.splice(1, 0, {
    name: t("Leaderboard"),
    href: `/${locale}/learn/leaderboard`,
    icon: (
      <svg width='46' height='46' viewBox='0 0 46 46' fill='none'>
        <path
          d='M7 9.5C7 7.84314 8.34315 6.5 10 6.5H36C37.6569 6.5 39 7.84315 39 9.5V23.5C39 32.3366 31.8366 39.5 23 39.5C14.1634 39.5 7 32.3366 7 23.5V9.5Z'
          fill='#FEC701'
        />
        <path
          opacity='0.3'
          d='M39.0001 13.3455V9.5C39.0001 7.84315 37.657 6.5 36.0001 6.5H31.5706L8.30957 29.8497C9.68623 33.0304 12.0656 35.6759 15.0491 37.3877L39.0001 13.3455Z'
          fill='white'
        />
      </svg>
    ),
  })

  return bottomBarItems
}

export const BottomBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const bottomBarItems = useBottomBarItems()
  return (
    <nav className='fixed bottom-0 left-0 right-0 z-20 border-t-2 border-[#e5e5e5] bg-white md:hidden'>
      <ul className='flex h-[88px]'>
        {bottomBarItems.map((item) => {
          return (
            <li
              key={item.href}
              className='flex flex-1 items-center justify-center'>
              <Link
                href={item.href}
                className={
                  item.name === selectedTab
                    ? "rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] py-1 px-2"
                    : "py-1 px-2"
                }>
                {item.icon}
                <span className='sr-only'>{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
