import * as yup from "yup"

export const AlphaBetSchemaValid = yup.object({
  Title: yup.string().min(5).max(15).required(),
  SubTitle: yup.string().required(),
  Langauge: yup.string().required(),
  Translate: yup.string().required(),
  Direction: yup.string().required(),
})

export interface AlphaBetTypeValid
  extends yup.InferType<typeof AlphaBetSchemaValid> {
  // using interface instead of type generally gives nicer editor feedback
  id?: number
}
