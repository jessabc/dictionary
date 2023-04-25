import { useContext } from 'react'
import { Context } from '../Context'
import iconSearch from '../assets/images/icon-search.svg'

export default function Search() {

    const {input, setInput, fetchData} = useContext(Context)

    function handleSubmit(e) {
        e.preventDefault()
        fetchData(input) 
    }

    return (
        <div className={`mb-8`}>
            <form onSubmit={handleSubmit} className='relative'>
                <input 
                    type="text" 
                    className='bg-zinc-100 w-full py-4 rounded-lg pl-5 text-lg font-semibold outline-none dark:bg-zinc-800 dark:text-zinc-50'
                    placeholder="Search for a word..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                    <button>
                        <div className='absolute right-0 top-0 sm:hover:bg-zinc-200sm:dark:hover:bg-zinc-700
                        px-7 h-full rounded-tr-lg rounded-br-lg'>
                            <img src={iconSearch} alt="magnifying glass icon" className='absolute right-5 top-5'/>
                        </div> 
                    </button>
            </form>
        </div>
    )
}