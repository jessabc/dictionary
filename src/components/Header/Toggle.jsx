import { useState, useEffect } from "react"
import { MoonIcon } from '@heroicons/react/24/outline'

// toggle switch, credit to https://dev.to/larainfo/toggle-switch-in-react-js-with-tailwind-css-example-jfk
// theme switch, credit to https://www.youtube.com/watch?v=VylXkPy-MIc

export default function Toggle() {

    const [enabled, setEnabled] = useState(false)
    const [theme, setTheme] = useState(null)

    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme:dark)').matches) {
        setTheme('dark') 
      } else {
        setTheme()
      }
    }, [])

    useEffect(() => {
      if(theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },[theme])

    const handleThemeSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      setEnabled(!enabled)
    }

    return (
        <div className="relative flex flex-col items-center justify-center">
            <div className="flex">
                <label className="inline-flex relative items-center  cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={enabled}
                    readOnly
                  />

                  <div
                    onClick={handleThemeSwitch}
                    className="w-11 h-6 bg-purple-500 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"
                  ></div>

                  <MoonIcon className="h-6 w-6 text-zinc-500 ml-2 dark:text-purple-500" onClick={handleThemeSwitch}/> 
                </label>
            </div>
        </div>
    )
}