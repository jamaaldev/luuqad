import * as yup from "yup"

export const CoursesSchemaValid = yup.object({
  user_id: yup.number().required(),
  alphabet_id: yup.string().required(),
})

export interface CoursesTypeValid
  extends yup.InferType<typeof CoursesSchemaValid> {
  // using interface instead of type generally gives nicer editor feedback
  id?: number
}
