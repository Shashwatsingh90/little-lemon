

export const initalState = {
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: ''
}


// const availableTimes = props.availableTimes;



// console.log(props);

// const handleNameChange = (e) => {
//     dispatch({
//         type: 'CHANGED_NAME',
//         payload: e.target.value})
// }



// const handleSelectedTime = (e) => {
//     dispatch({
//         type: 'SELECTED_TIME',
//         payload: e.target.value})
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
// }


export const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGED_NAME':
            return {
                ...state,
                name: action.payload.value
            };
        case 'SELECTED_DATE':
            return {
                ...state,
                date: action.payload.value
            };
        case 'SELECTED_TIME':
            return {
                ...state,
                time: action.payload.value
            };
        case 'SELECTED_GUESTS':
            return {
                ...state,
                guests: action.payload.value
            };
        case 'SELECTED_OCCASION':
            return {
                ...state,
                occasion: action.payload.value
            };
        default:
            return state
    }
}

export default formReducer