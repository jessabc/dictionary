import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from './Context'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Word from './pages/Word'

function App() {
 
  return (
   <div className='dark:bg-zinc-900'>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/:word" element={<Word />} />    
            </Route>
          </Routes>
        </ContextProvider>
    </BrowserRouter>
   </div>      
  )
}

export default App
