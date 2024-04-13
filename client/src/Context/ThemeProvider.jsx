import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const ThemeContext = createContext();

const ThemeProvier = ({children}) => {

  const [lightMode, setLightMode] = useState(false);

  return (
    <ThemeContext.Provider value={[lightMode,setLightMode]}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvier
