import * as yup from "yup"

export const UserSelectedUnitSchemaValid = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  status: yup.number().required(),
  created_at: yup.date(),
  updated_at: yup.date(),
  alphaBetsCourses_id: yup.number().required(),
})

export interface UserSelectedUnitTypeValid
  extends yup.InferType<typeof UserSelectedUnitSchemaValid> {
  // using interface instead of type generally gives nicer editor feedback
}
