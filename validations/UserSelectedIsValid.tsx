import * as yup from "yup"

export const UserSelectedSchemaValid = yup.object({
  user_id: yup.number().required(),
  isSelectedAlphabetCourse_id: yup.number().required(),
})

export interface UserSelectedTypeValid
  extends yup.InferType<typeof UserSelectedSchemaValid> {
  // using interface instead of type generally gives nicer editor feedback
  id?: number
}
