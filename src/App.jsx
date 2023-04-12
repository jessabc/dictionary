import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from './Context'
import Main from "./pages/Main"


function App() {
 
  return (
   <div className='dark:bg-zinc-900'>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Main />}/>
              <Route path="/:word" element={<Main />} />    
          </Routes>
        </ContextProvider>
    </BrowserRouter>
   </div>      
  )
}

export default App
