import { useContext } from 'react'
import { Context } from '../../Context'
import Meaning from './Meaning'
import iconPlay from '../../assets/images/icon-play.svg'
import iconNewWindow from '../../assets/images/icon-new-window.svg'
import Loading from '../Loading'
import Error from '../Error'


export default function Word() {

  const {wordData, loading, error, fetchData } = useContext(Context)

  const meaningElements = wordData?.meanings.map((meaning, index) => <Meaning key={index} meaning={meaning} handleOnclick={handleOnclick}/>)
 
  const audioArray = wordData?.phonetics.filter(item => item.audio)
  const audioUrl = audioArray ? audioArray[0]?.audio : null
  
  const audio = new Audio(audioUrl)
  
  function handleOnclick(synonym) {
    fetchData(synonym)
    window.scrollTo(0, 0)
  }
  

  return (
    <div className={`${!loading && !wordData && !error ? 'h-screen' : ''}`}>

      {loading && <Loading/>}
      
      {wordData && 
      <div className='min-h-screen'>
        <div className='flex items-center mb-10'>
          <div>
            <p className='font-bold text-5xl  mb-5 dark:text-zinc-50'>{wordData?.word}</p>
            <p className='text-purple-500 text-xl '>{wordData?.phonetic}</p>
          </div>
          <button className='ml-auto hover:bg-purple-300 rounded-full'>
            <img src={iconPlay} alt="play icon" onClick={() => audio.play()}/>
          </button>
        </div>
        {meaningElements}
        <hr/>
        <div className='flex gap-3 pt-5 pb-10 items-end flex-wrap '> 
          <p className='text-zinc-500 text-sm'>Source: </p>
          <a href={wordData?.sourceUrls[0]} target="_blank" className='flex gap-3 dark:text-zinc-50'>{wordData?.sourceUrls[0]}
            <img src={iconNewWindow} alt="new window icon" />
          </a>
        </div>
      </div>}

      {error && <Error/>}

    </div>
  )
}
  
