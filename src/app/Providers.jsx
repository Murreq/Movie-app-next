'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-gray-800 dark:text-gray-100 dark:bg-gray-800 min-h-screen select-none transition-colors duration-300'>{children}</div>
    </ThemeProvider>
  )
}

export default Providers