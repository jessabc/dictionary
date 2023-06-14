import { useState } from "react"
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header"
import Search from '../components/Search'

export default function Layout() {

  const [selectedFont, setSelectedFont] = useState('Sans Serif')


  return ( 
    <div 
      className={`font-${selectedFont.toLowerCase()} bg-zinc-50 px-10 dark:bg-zinc-900   max-w-2xl mx-auto  min-h-screen`} > 
   
      <nav>
        <Header 
        selectedFont={selectedFont} setSelectedFont={setSelectedFont}/>
      </nav>

      <Search/>

      <Outlet />
    </div>
  )
}

