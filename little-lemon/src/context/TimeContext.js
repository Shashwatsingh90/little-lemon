import React, { createContext, useContext, useReducer } from 'react'

const TimeContext = createContext(null);
const DispatchContext = createContext(null)

function initializeTimes() {
  const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  return [{
    date: '',
    availTimes: initialTimes
  }];
}

export function TimeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, [], initializeTimes)

  // function handleSubmitTime(submittedTime) {
  //     dispatch({

  //     });
  //     console.log(submittedTime);
  // }

  return (
    <TimeContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TimeContext.Provider>
  )
}

export function useTimes() {
  return useContext(TimeContext);
}

export function useTimeDispatch() {
  return useContext(DispatchContext);
}

// this function returns the new state
function reducer(state, action) {

  switch (action.type) {
    case 'SELECTED_DATE': {
      return ({
        date: action.date,
        availTimes: state.availTimes
      }, console.log(state));
    }
    case 'SUBMITTED': {
      return ([
        ...state, {
          date: action.date,
          availTimes: action.time
        }
      ], console.log(state));
    }
    default: {
      return { ...state };
    }
  }
}