"use client"
import baseUrl from "@/utils/baseUrl"
import {
  CharacterSchemaValid,
  CharacterTypeValid,
} from "@/validations/CharacterValid"
import { Field, Form, Formik, FormikHelpers } from "formik"
import Link from "next/link"

type Props = {}

const CharacterCreate = (props: Props) => {
  const initialValues: CharacterTypeValid = {
    Character: "",
    Transliteration: "",
    TsAUrl: "",
    Direction_fk: "",
  }

  const onSubmit = async (
    values: CharacterTypeValid,
    action: FormikHelpers<CharacterTypeValid>,
  ) => {
    // action.resetForm()
    const isValid = await CharacterSchemaValid.isValid(values)
    if (isValid === true) {
      try {
        const rest = await fetch(`${baseUrl}/api/courses`, {
          method: "POST",
          headers: {
            Accept: "application/json",

            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })

        const data = rest
        console.log(
          "🚀 ~ file: AlphabetCreate.tsx:44 ~ AlphabetCreate ~ data:",
          data,
        )
      } catch (error) {
        console.log(
          "🚀 ~ file: AlphabetCreate.tsx:43 ~ AlphabetCreate ~ error:",
          error,
        )
      }
    }
  }

  return (
    <div className='flex  justify-center min-h-full px-4 sm:px-6 lg:px-8'>
      <div className='max-w-sm'>
        <Link
          href='/admin/courses/characters'
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-2 w-2/12'>
          List of Characters
        </Link>
        <div>
          <h1 className='text-3xl font-extrabold text-center my-8'>
            Create Character
          </h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={CharacterSchemaValid}
          onSubmit={onSubmit}>
          <Form>
            <div className='flex flex-col items-center justify-center gap-3 mt-8'></div>
            <div className='mt-5 relative'>
              <div className='mt-5 relative'>
                <Field
                  type='input'
                  name='Character'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block  px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Title  Ex: A'></Field>
              </div>
              <div className='mt-5 relative'>
                <Field
                  type='input'
                  name='Transliteration'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block  px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Transliteration  Ex: EEY'></Field>
              </div>
              <div className='mt-5 relative'>
                <Field
                  type='input'
                  name='TsAUrl'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Transliteration Url  Ex: Audio Link'></Field>
              </div>
              <div className='mt-5 relative'>
                <label htmlFor='Direction'>
                  Ex: ( En_So ) Language --{">"} English Transliteration --{">"}{" "}
                  Somali.
                </label>
                <Field
                  component='select'
                  name='Direction'
                  id='Direction'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='State  Ex: Somali'>
                  <option value=''>Please Select Direction</option>
                  <option value='SF'>En_So</option>
                  <option value='CH'>So_En</option>
                </Field>
              </div>
              <div className='mt-5 relative'>
                <Field
                  component='select'
                  name='state'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block  px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'>
                  <option value=''>Please Select state</option>
                  <option value='SF'>Available</option>
                  <option value='CH'>Not Avaliable</option>
                </Field>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full mt-4 space-y-4 text-center'>
              <button
                type='submit'
                className='w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]'>
                Add Character
              </button>
            </div>
          </Form>
        </Formik>
        {/* or line */}
      </div>
    </div>
  )
}
export default CharacterCreate
