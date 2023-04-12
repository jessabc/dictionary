import { useState } from "react"
import Header from "../components/Header/Header"
import Search from '../components/Search'
import Content from '../components/Content/Content'

export default function Main() {

  const [selectedFont, setSelectedFont] = useState('Sans Serif')


  return ( 
    <div 
      className={`font-${selectedFont.toLowerCase()} bg-zinc-50 px-10 dark:bg-zinc-900   max-w-2xl mx-auto  `} > 
      
      <nav>
        <Header 
        selectedFont={selectedFont} setSelectedFont={setSelectedFont}/>
      </nav>

      <Search/>

      <Content/>
    </div>
  )
}

