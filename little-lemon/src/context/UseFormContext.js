import { React, useContext, createContext } from 'react'

// for Context:
// 1. Create
// 2. Use
// 3. Provide

const formContext = createContext(undefined)

function FormProvider({ children }) {

  return (
    <div>FormContext</div>
  )
}

export default FormProvider