import BASE_URL from "@/utils/baseUrl"
import { AlphaBetTypeValid } from "@/validations/AlphabetIsValid"
import { CharacterTypeValid } from "@/validations/CharacterValid"
import { CoursesTypeValid } from "@/validations/CoursesIsValid"
import { UserSelectedUnitTypeValid } from "@/validations/UserSelectedUnitIsValid"
import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"
import { HYDRATE } from "next-redux-wrapper"
import { UserSelectedTypeValid } from "../../validations/UserSelectedIsValid"
import { addTokenToRequest } from "../slices/Token"

export const Courses = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "same-origin",
    prepareHeaders: (
      headers,
      {
        getState,
      }: Pick<
        BaseQueryApi,
        "getState" | "extra" | "endpoint" | "type" | "forced"
      >,
    ) => {
      return addTokenToRequest(headers, { getState })
    },
  }),
  refetchOnFocus: true,
  tagTypes: [
    "AlphaBetTypeValid",
    "CharacterTypeValid",
    "CoursesTypeValid",
    "UserSelectedTypeValid",
    "UserSelectedUnitTypeValid",
  ],

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
      invalidatesTags: ["AlphaBetTypeValid"],
    }),
    getAlphaBets: builder.query<AlphaBetTypeValid[], string>({
      query: (getall) => ({
        url: `/api/courses/alphabets/${getall}`,
        method: "GET",
      }),

      providesTags: ["AlphaBetTypeValid"],
    }),
    postCharacters: builder.mutation<CharacterTypeValid[], number>({
      query: (data) => ({
        url: `/api/courses/characters/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CharacterTypeValid"],
    }),
    getCharacters: builder.query<CharacterTypeValid[], string>({
      query: (getall) => ({
        url: `/api/courses/characters/${getall}`,
        method: "GET",
      }),

      providesTags: ["CharacterTypeValid"],
    }),
    postLessons: builder.mutation<CoursesTypeValid[], {}>({
      query: (data) => ({
        url: `/api/courses/lessons/enroll`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CoursesTypeValid"],
    }),
    getLessons: builder.query<CharacterTypeValid[], string>({
      query: (getall) => ({
        url: `/api/courses/lessons/${getall}`,
        method: "GET",
      }),
      keepUnusedDataFor: 1,
      providesTags: ["CharacterTypeValid"],
    }),
    postUserSelected: builder.mutation<UserSelectedTypeValid[], {}>({
      query: (data) => ({
        url: `/api/courses/lessons/userselected/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["UserSelectedTypeValid"],
    }),
    updateUserSelected: builder.mutation<UserSelectedTypeValid[], {}>({
      query: (data) => ({
        url: `/api/courses/lessons/userselected/update`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["UserSelectedTypeValid"],
    }),
    getUserSelected: builder.query<UserSelectedTypeValid, string>({
      query: (getone) => ({
        url: `/api/courses/lessons/userselected/${getone}`,
        method: "GET",
      }),
      keepUnusedDataFor: 1,
      providesTags: ["UserSelectedTypeValid"],
    }),
    getUserSelectedUnit: builder.query<UserSelectedUnitTypeValid[], void>({
      query: () => ({
        url: `/api/courses/lessons/userselected/unit`,
        method: "GET",
      }),
      keepUnusedDataFor: 1,
      providesTags: ["UserSelectedUnitTypeValid"],
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
  useGetUserSelectedUnitQuery,
} = Courses
