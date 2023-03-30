import React from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'


export const navContext = createContext(useNavigate);

function NavigateContextProvider() {
  return (
    <div>NavigateContextProvider</div>
  )
}

export default NavigateContextProvider
