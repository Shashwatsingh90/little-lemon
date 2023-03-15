import { React, useContext, useState, createContext } from 'react'

// for Context:
// 1. Create
// 2. Provide
// 3. Use

const FormContext = createContext();

export const FormProvider = ({ children }) => {
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

export const useFormContext = () => useContext(FormContext)