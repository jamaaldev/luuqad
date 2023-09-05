import Link from "next/link"

const page = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full mt-4 space-y-4 text-center'>
        <Link
          href='/admin/courses/alphabets/create'
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-2 w-2/12'>
          Create Alphabet Course
        </Link>
        <Link
          href='/admin/courses/characters/create'
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-2 w-2/12'>
          Create Character
        </Link>
      </div>
    </div>
  )
}

export default page
