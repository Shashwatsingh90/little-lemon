import React from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'


export const NavigateContext = createContext(useNavigate);
