import logo from '../assets/images/logo.svg'
import { Link } from "react-router-dom"
import { useState } from 'react'
import Toggle from './Toggle'
import iconArrowDown from '../assets/images/icon-arrow-down.svg'


export default function Header({selectedFont, setSelectedFont}) {

    const [isVisible, setIsVisible] = useState(false)

    function handleClick(font) {
        setIsVisible(prev => !prev)
        setSelectedFont(font)
    }
    
    return (
        <div className='bg-zinc-50 flex items-center dark:bg-zinc-900 py-10'>

            <Link to="/"><img src={logo} alt="" /></Link>
            
            <div className=' flex ml-auto'>
                <div className='mr-5 relative cursor-pointer dark:text-zinc-50'>
                    {/* dropdown header */}
                    <div className='flex border-r border-solid border-zinc-300' onClick={() => setIsVisible(prev => !prev)}>
                        <p className={`font-${selectedFont.toLowerCase()} pr-2 font-semibold text-xl`}>{selectedFont === 'sans' ? 'Sans Serif' : selectedFont}</p>
                        <img src={iconArrowDown} alt="" className='mr-4'/>
                    </div>

                    {/* dropdown modal*/}
                    <div className={`${isVisible ? "flex flex-col gap-3 absolute px-10 py-5 right-5 w-max  font-semibold text-xl rounded-lg bg-zinc-50 shadow-2xl z-10 dark:bg-zinc-900 dark:shadow-purple-500" : "hidden"} `}>
                        <p onClick={() => handleClick('sans')} className={`${selectedFont === 'sans' ? "text-purple-500" : null } font-sans`}>Sans Serif</p>
                        <p onClick={() => handleClick('Serif')} className={`${selectedFont === 'Serif' ? "text-purple-500" : null } font-serif`}>Serif</p>
                        <p onClick={() => handleClick('Mono')} className={`${selectedFont === 'Mono' ? "text-purple-500" : null } font-mono`}>Mono</p>
                    </div>
                </div>

                <Toggle/> 
               
            </div>
             
        </div>
    )
}

