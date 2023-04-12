import {useState, createContext} from 'react'
import { useNavigate } from 'react-router-dom'

export const Context = createContext()

export function ContextProvider({children}) {

    const [input, setInput] = useState('')
    const [wordData, setWordData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const navigate = useNavigate()

    function fetchData(input) {
        setLoading(true)
        setWordData(null)
        setError(null)

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            .then(res => res.json())
            .then(data =>{

                if(data[0]) {
                    setWordData(data[0])  
                } else {
                    setError({data, input})
                }
                navigate(`/${input}`)
                setInput('')
                setLoading(false)
            })
    }

    return (
        <Context.Provider 
            value={{input, setInput, wordData, setWordData, loading, setLoading, error, setError, fetchData }}>
            {children}
        </Context.Provider>
    )
}