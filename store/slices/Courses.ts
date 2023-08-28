import BASE_URL from "@/utils/baseUrl"
import { CreateMyFormValues } from "@/validations/AlphabetIsValid"
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
    postCourses: builder.mutation<CreateMyFormValues[], number>({
      query: (data) => ({
        url: `/api/courses`,
        method: "POST",
        body: data,
      }),
    }),
    getCourses: builder.query<CreateMyFormValues[], string>({
      query: (courses_id) => ({
        url: `/api/courses/${courses_id}`,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetCoursesQuery, usePostCoursesMutation } = Courses
