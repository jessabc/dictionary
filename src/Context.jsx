import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Context = createContext()

export function ContextProvider({children}) {

    const [input, setInput] = useState()
    const [wordData, setWordData] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    const navigate = useNavigate()

    async function fetchData(input) {
        try {
            setLoading(true)
            setWordData(null)
            setError(null)
            const {data} = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            setWordData(data[0])
            navigate(`/${input}`)
        } catch(error) {          
            setError({error: error.response.data, input})
        } finally {
            setInput('')
            setLoading(false)
        }
    }

    
    return (
        <Context.Provider 
            value={{input, setInput, wordData, setWordData, loading, setLoading, error, setError, fetchData }}>
            {children}
        </Context.Provider>
    )
}