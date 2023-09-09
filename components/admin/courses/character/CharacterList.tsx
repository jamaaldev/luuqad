"use client"

import { useGetCharactersQuery } from "@/store/api/Courses"
import Link from "next/link"

const CharacterList = () => {
  const { data: charactersGetAll } = useGetCharactersQuery("getall")
  return (
    <div>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <Link
                href='/admin/courses/characters/create'
                className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-2 w-2/12'>
                Create Characters
              </Link>
              <table className='min-w-full divide-y divide-gray-200 mt-6'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      ID
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Character
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Transliteration
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Direction_FK
                    </th>

                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      State
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Audio
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {charactersGetAll?.map((character) => (
                    <tr key={character.id}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {character.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          {character.Character}
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          {character.Transliteration}
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          {character.Direction_fk}
                        </div>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span
                          className='px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800'>
                          {character.State}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span
                          className='px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800'>
                          {character.TsAUrl}
                        </span>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a> */}
                        <button
                          onClick={() => alert("ababiina")}
                          className='text-red-600 hover:text-red-900'>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterList
