"use client"
import { useGetAlphaBetsQuery } from "@/store/slices/Courses"
import baseUrl from "@/utils/baseUrl"
import {
  CharacterSchemaValid,
  CharacterTypeValid,
} from "@/validations/CharacterValid"
import { Field, Form, Formik } from "formik"
import Link from "next/link"

const CharacterCreate = () => {
  const { data: alphabetsGetAllDirection } = useGetAlphaBetsQuery("getall")

  const initialValues: CharacterTypeValid = {
    Character: "",
    Transliteration: "",
    TsAUrl: "",
    State: "",
    Direction_fk: "",
  }

  const onSubmit = async (values: CharacterTypeValid) => {
    const isValid = await CharacterSchemaValid.isValid(values)
    if (isValid === true) {
      try {
        const rest = await fetch(`${baseUrl}/api/courses/characters/create`, {
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
                <label htmlFor='Direction_fk'>
                  Ex: ( En_So ) Language --{">"} English Transliteration --{">"}{" "}
                  Somali.
                </label>
                <Field
                  component='select'
                  name='Direction_fk'
                  id='Direction_fk'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Please Select Direction_fk'>
                  <option value=''>Please Select Direction_fk</option>

                  {alphabetsGetAllDirection?.map((data, index) => (
                    <option key={index} value={data.Direction}>
                      {data.Direction}
                    </option>
                  ))}

                  {/* <option value='So_En'>So_En</option> */}
                </Field>
              </div>
              <div className='mt-5 relative'>
                <Field
                  component='select'
                  name='State'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block  px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'>
                  <option value=''>Please Select state</option>
                  <option value='Available'>Available</option>
                  <option value='Not Avaliable'>Not Avaliable</option>
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
