import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Search from '../components/Search'
import { useState } from "react"
import { useContext } from 'react'
import { Context } from '../Context'

const Layout = () => {

  const [selectedFont, setSelectedFont] = useState('Sans Serif')

  const {input, setInput, wordData, setWordData, loading, setLoading, error, setError, fetchData } = useContext(Context)

  const {pathname} = useLocation()

  return ( 
    <div 
      className={`font-${selectedFont.toLowerCase()} bg-zinc-50 px-10 dark:bg-zinc-900   max-w-2xl mx-auto  ${pathname === '/' ? "h-screen" : "h-full "}`} > 
      
      <nav>
        <Header selectedFont={selectedFont} setSelectedFont={setSelectedFont}/>
      </nav>

      <Search/>

      <Outlet />
    </div>
  )
}

export default Layout