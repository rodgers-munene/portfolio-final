import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const { theme, toggleTheme} = useTheme()

    const handleClick = () => {
      toggleTheme()
    }

  return (
    <div className="">
      <button
        className="fixed bottom-5 right-5 z-50 rounded-full bg-gray-900 dark:bg-gray-100 p-2"
        onClick={handleClick}
      >
        {theme === "dark" ? (
          <Sun className="text-[#213547]" />
        ) : (
          <Moon className="text-white" />
        )}
      </button>
    </div>
  )
}

export default ThemeToggle

//bottom-5 right-5 z-50 rounded-full p-2 bg-gray-900 dark:bg-gray-100