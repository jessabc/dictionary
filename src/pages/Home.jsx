import { useState } from "react"
import { useContext } from 'react'
import { Context } from '../Context'
import Loading from "../components/Loading"
import Error from "../components/Error"


export default function Home() {

  const [selectedFont, setSelectedFont] = useState('Sans Serif')
  const {wordData, loading, error, fetchData } = useContext(Context)

  return ( 
    <div>
      {loading && <Loading/>}

      {error && <Error/>}
    </div>
  )
}

