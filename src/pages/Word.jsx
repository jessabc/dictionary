import { useState } from "react"
import Content from '../components/Content/Content'

export default function Word() {

  const [selectedFont, setSelectedFont] = useState('Sans Serif')


  return ( 
    <div>
      <Content/>
    </div>
  )
}

