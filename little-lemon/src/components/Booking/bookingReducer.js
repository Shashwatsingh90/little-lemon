import { fetchAPI, submitAPI } from "../../utils/API";
import { useEffect } from "react";

// const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

export const fetchData = (date, formData) => {
    fetchAPI(date)
        .then((response) => response.json())
        .then((jsonData) => updateTimes(jsonData.results))
    submitAPI(formData)
}


// export const BookingState = {
//     bookings: [Booking],
//     date: '',
//     time: '',
//     guests: '',
//     availableTimes: defaultTimes
// }



// create the initial state for the availableTimes
// use the fetchData API function to return the available times for today’s date
export const initializeTimes = () => {
    return {
        availableTimes: fetchAPI(new Date()),
        formData:
        {
            name: '',
            date: '',
            time: '17:00',
            occasion: '',
            guests: 2
        }
    }
}

// This function will change the availableTimes based on the selected date
const updateTimes = (state, payload) => ({
    ...state,
    availableTimes: fetchAPI(new Date(payload)),
});



// let BookingAction = {
//     { type: 'ADD_BOOKING' },
//     { type: 'SET_TIME', time: '' },
//     { type: 'SET_DATE', date: '' },
//     { type: 'SET_GUESTS', guests: '' }
// }

export function AvailableTimesReducer(state, { type, payload }) {
    switch (type) {
        case 'SET_DATE':
            return updateTimes(state, payload)

        default:
            return { ...state }
    }
}