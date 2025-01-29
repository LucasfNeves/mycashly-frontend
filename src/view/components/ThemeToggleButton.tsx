import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export function ThemeToggleButton() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark')

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      className="flex h-9 w-9 items-center justify-center rounded-md bg-darkBlue-800 transition-all hover:bg-darkBlue-700 hover:duration-300"
      onClick={toggleTheme}
    >
      {currentTheme === 'light' ? (
        <Sun className="h-5 text-white" />
      ) : (
        <Moon className="h-5 text-white" />
      )}
    </button>
  )
}
