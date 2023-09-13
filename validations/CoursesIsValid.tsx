import * as yup from "yup"

export const CoursesSchemaValid = yup.object({
  user_id: yup.number().required(),
  alphaBetsCourses_id: yup.number().required(),
})

export interface CoursesTypeValid
  extends yup.InferType<typeof CoursesSchemaValid> {
  // using interface instead of type generally gives nicer editor feedback
  id?: number
  data?: {
    data: {
      message?: string
      error?: string
      status?: number
    }
  }
}
