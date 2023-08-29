import BASE_URL from "@/utils/baseUrl"
import { AlphaBetTypeValid } from "@/validations/AlphabetIsValid"
import { CharacterTypeValid } from "@/validations/CharacterValid"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { HYDRATE } from "next-redux-wrapper"

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
      query: (character_id) => ({
        url: `/api/courses/characters/getall${character_id}`,
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
} = Courses
