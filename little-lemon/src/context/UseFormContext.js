import { React, useContext, useState, createContext } from 'react'

// for Context:
// 1. Create
// 2. Use
// 3. Provide

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  })

  const setFormHandler = (data) => {
    setForm(data);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        setForm: setFormHandler
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider

export const useFormContext = () => useContext(FormContext)