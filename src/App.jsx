import './App.css'
import Layout from "./pages/Layout"
import Word from "./pages/Word"
import NoPage from "./pages/NoPage"
import { ContextProvider } from './Context'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
   <div className='dark:bg-zinc-900'>
      <BrowserRouter>
      <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:word" element={<Word />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </ContextProvider>
    </BrowserRouter>
   </div>      
  )
}

export default App
