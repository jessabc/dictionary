import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'
import { FaceFrownIcon } from '@heroicons/react/24/outline'


export default function Error() {
    const { error } = useContext(Context)


  return (
      <div className='flex flex-col items-center text-center gap-3 h-screen' >
        <FaceFrownIcon className="h-10 w-10 text-purple-500"/>
        <p className='font-semibold dark:text-zinc-50'>{error.error.title} </p>
        <p className='text-zinc-500'>{error.error.message} {error.error.resolution}</p>   
        <a href={`https://en.wikipedia.org/wiki/${error.error.input}`} target="_blank" className='text-purple-500 hover:text-purple-400'>Search on Wikipedia</a>
      </div>
  )
}
