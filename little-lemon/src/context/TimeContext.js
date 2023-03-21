import React, { createContext, useContext, useReducer } from 'react'

const TimeContext = createContext(null);
const DispatchContext = createContext(null)




// function initializeTimes() {
const initialTimes = { selectedDates: [], times: [{ time: '17:00', id: 1 }, { time: '18:00', id: 2 }, { time: '19:00', id: 3 }, { time: '20:00', id: 4 }, { time: '21:00', id: 5 }, { time: '22:00', id: 6 }] };
//   return { times: initialTimes };
// }

export function TimeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialTimes)

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
    // case 'SUBMITTED_DATE': {
    //   return submittedDates.push(action.date)
    // }
    case 'SUBMITTED_TIME':
      state.selectedDates = [...state.selectedDates, action.date]
      return console.log(state.selectedDates.map(date =>
        state.times.filter(t => t.time !== action.time))
      );
    default: {
      return { ...state };
    }
  }

}

// const submittedDates = [];


