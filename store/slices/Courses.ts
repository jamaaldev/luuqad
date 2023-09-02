import BASE_URL from "@/utils/baseUrl"
import { AlphaBetTypeValid } from "@/validations/AlphabetIsValid"
import { CharacterTypeValid } from "@/validations/CharacterValid"
import { CoursesTypeValid } from "@/validations/CoursesIsValid"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { HYDRATE } from "next-redux-wrapper"
import { UserSelectedTypeValid } from "./../../validations/UserSelectedIsValid"

export const Courses = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "same-origin",
  }),
  refetchOnFocus: true,
  keepUnusedDataFor: 30,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    postAlphaBets: builder.mutation<AlphaBetTypeValid[], number>({
      query: (data) => ({
        url: `/api/courses/alphabets/create`,
        method: "POST",
        body: data,
      }),
    }),
    getAlphaBets: builder.query<AlphaBetTypeValid[], string>({
      query: (getall) => ({
        url: `/api/courses/alphabets/${getall}`,
        method: "GET",
      }),
    }),
    postCharacters: builder.mutation<CharacterTypeValid[], number>({
      query: (data) => ({
        url: `/api/courses/characters/create`,
        method: "POST",
        body: data,
      }),
    }),
    getCharacters: builder.query<CharacterTypeValid[], string>({
      query: (getall) => ({
        url: `/api/courses/characters/${getall}`,
        method: "GET",
      }),
    }),
    postLessons: builder.mutation<CoursesTypeValid[], {}>({
      query: (data) => ({
        url: `/api/courses/lessons/enroll`,
        method: "POST",
        body: data,
      }),
    }),
    getLessons: builder.query<CharacterTypeValid[], string>({
      query: (getall) => ({
        url: `/api/courses/lessons/${getall}`,
        method: "GET",
      }),
    }),
    postUserSelected: builder.mutation<UserSelectedTypeValid[], {}>({
      query: (data) => ({
        url: `/api/courses/lessons/userselected/create`,
        method: "POST",
        body: data,
      }),
    }),
    updateUserSelected: builder.mutation<UserSelectedTypeValid[], {}>({
      query: (data) => ({
        url: `/api/courses/lessons/userselected/update`,
        method: "POST",
        body: data,
      }),
    }),
    getUserSelected: builder.query<UserSelectedTypeValid[], string>({
      query: (getall) => ({
        url: `/api/courses/lessons/userselected/${getall}`,
        method: "GET",
      }),
    }),
  }),
})

export const {
  useGetAlphaBetsQuery,
  usePostAlphaBetsMutation,
  useGetCharactersQuery,
  usePostCharactersMutation,
  usePostLessonsMutation,
  useGetLessonsQuery,
  usePostUserSelectedMutation,
  useGetUserSelectedQuery,
  useUpdateUserSelectedMutation,
} = Courses
