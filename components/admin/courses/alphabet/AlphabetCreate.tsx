"use client"
import baseUrl from "@/utils/baseUrl"
import { alphaBetValidSchema } from "@/validations/AlphabetIsValid"
import { Field, Form, Formik, FormikHelpers } from "formik"
import Link from "next/link"

type Props = {}
type MyFormValues = {
  Title: string
  SubTitle: string
  Langauge: string
  Translate: string
  Direction: string
}

const AlphabetCreate = (props: Props) => {
  const initialValues: MyFormValues = {
    Title: "",
    SubTitle: "",
    Langauge: "",
    Translate: "",
    Direction: "",
  }

  const onSubmit = async (
    values: MyFormValues,
    action: FormikHelpers<MyFormValues>,
  ) => {
    // action.resetForm()
    const isValid = await alphaBetValidSchema.isValid(values)
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
          href='/admin/courses/alphabets'
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-2 w-2/12'>
          List of Alphabets
        </Link>
        <div>
          <h1 className='text-3xl font-extrabold text-center my-8'>
            Create Alphabet
          </h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={alphaBetValidSchema}
          onSubmit={onSubmit}>
          <Form>
            <div className='flex flex-col items-center justify-center gap-3 mt-8'></div>
            <div className='mt-5 relative'>
              <div className='mt-5 relative'>
                <Field
                  type='input'
                  name='Title'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block  px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Title  Ex: English'></Field>
              </div>
              <div className='mt-5 relative'>
                <Field
                  type='input'
                  name='SubTitle'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block  px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='SubTitle  Ex: Let’s learn English!'></Field>
              </div>
              <div className='mt-5 relative'>
                <Field
                  type='input'
                  name='Langauge'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Langauge  Ex: English'></Field>
              </div>
              <div className='mt-5 relative'>
                <Field
                  type='input'
                  name='Translate'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Translate  Ex: Somali'></Field>
              </div>
              <div className='mt-5 relative'>
                <Field
                  type='input'
                  name='Direction'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block  px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Ex: ( En_So )  Language --> English  Translate --> Somali'></Field>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full mt-4 space-y-4 text-center'>
              <button
                type='submit'
                className='w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]'>
                Add Alphabet
              </button>
            </div>
          </Form>
        </Formik>
        {/* or line */}
      </div>
    </div>
  )
}
export default AlphabetCreate
