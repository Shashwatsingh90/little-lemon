import { fetchAPI, submitAPI } from "../../utils/API";
import { router } from "../../App";



export const fetchData = (date, formData) => {
    fetchAPI(date)
        .then((response) => response.json())
        .then((jsonData) => updateTimes(jsonData.results))
    submitAPI(formData)
        .then((response) => response.json())
}



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
            guests: '2'
        }
    }
}

// This function will change the availableTimes based on the selected date
const updateTimes = (state, payload) => ({
    ...state,
    availableTimes: fetchAPI(new Date(payload)),
});

//Take the results from fetchData's submitAPI funciton (which should return true)
export async function handleSubmit(formData, navigate) {
    const submitBool = submitAPI(formData);
    return submitBool ? router.navigate('/bookingconfirmation') : alert('Sorry! Something broke on our end. Please trye again.')

}


export function AvailableTimesReducer(state, { type, payload }) {

    switch (type) {
        case 'SET_DATE':
            return updateTimes(state, payload)
        default:
            return { ...state }
    }
}