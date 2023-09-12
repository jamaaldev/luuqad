import { AlphaBetTypeValid } from "@/validations/AlphabetIsValid"
import * as yup from "yup"

export const UserSelectedCoursesSchemaValid = yup.object({
  id: yup.number().required(),
  user_id: yup.number().required(),
  alphaBetsCourses_id: yup.number().required(),
})

export interface UserSelectedCoursesTypeValid
  extends yup.InferType<typeof UserSelectedCoursesSchemaValid> {
  // using interface instead of type generally gives nicer editor feedback
  AlphaBetsCourses?: AlphaBetTypeValid
}
