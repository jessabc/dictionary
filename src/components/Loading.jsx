import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'


export default function Loading() {

    const { loading } = useContext(Context)

  return (
      <div className='flex justify-center min-h-screen'>
          <div className="loader mt-10"></div>
      </div>
  )
}
