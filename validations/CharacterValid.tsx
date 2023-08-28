import * as yup from "yup"

export const CharacterSchemaValid = yup.object({
  Character: yup.string().min(5).max(15).required(),
  Transliteration: yup.string().required(),
  TsAUrl: yup.string().required(),
  Direction_fk: yup.string().required(),
})

export interface CharacterTypeValid
  extends yup.InferType<typeof CharacterSchemaValid> {
  // using interface instead of type generally gives nicer editor feedback
  StrengthProgress?: number
}
