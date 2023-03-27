import { fetchAPI, submitAPI } from "../../utils/API";
import { useEffect } from "react";

// const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

export const fetchData = (date, formData) => {
    fetchAPI(date);
    submitAPI(formData)
}


const DEFAULT_GUEST_COUNT = '2'

export const Booking = {
    time: '',
    guests: '',
    date: '',
}

export function createBooking(time, guests, date) {
    return {
        time,
        guests,
        date
    }
}

// export const BookingState = {
//     bookings: [Booking],
//     date: '',
//     time: '',
//     guests: '',
//     availableTimes: defaultTimes
// }

export const initialBookingState = () => {
    return {
        bookings: [],
        date: '',
        time: '17:00',
        guests: DEFAULT_GUEST_COUNT,
        availableTimes: initializeTimes(new Date().toISOString().substring(0, 10))
    }
}

// create the initial state for the availableTimes
// use the fetchData API function to return the available times for today’s date
export const initializeTimes = (date) => {
    return {
        availableTimes: fetchAPI(date)
    }
}

// This function will change the availableTimes based on the selected date
const updateTimes = (bookings, date) =>
    defaultTimes.filter(defaultTime =>
        typeof bookings.find(booking =>
            booking.date === date && booking.time === defaultTime) === 'undefined')


// let BookingAction = {
//     { type: 'ADD_BOOKING' },
//     { type: 'SET_TIME', time: '' },
//     { type: 'SET_DATE', date: '' },
//     { type: 'SET_GUESTS', guests: '' }
// }

export function BookingReducer(BookingState, BookingAction) {

    useEffect(() => {
        fetchData();
    }, [])


    const { time, guests, date, bookings } = BookingState
    switch (BookingAction.type) {
        case 'ADD_BOOKING': {
            const nextBookings = [...BookingState.bookings, createBooking(time, guests, date)]
            const nextAvailableTimes = updateTimes(nextBookings, date)
            return (
                {
                    ...BookingState,
                    bookings: nextBookings,
                    availableTimes: nextAvailableTimes,
                    time: nextAvailableTimes[0] ?? '',
                    guests: DEFAULT_GUEST_COUNT
                }
            )
        }
        case 'SET_DATE':
            return {
                ...BookingState,
                date: BookingAction.date,
                availableTimes: updateTimes(bookings, BookingAction.date)
            }
        case 'SET_GUESTS':
            return {
                ...BookingState,
                guests: BookingAction.guests
            }
        case 'SET_TIME':
            return {
                ...BookingState,
                time: BookingAction.time
            }
        default:
            return { ...BookingState }
    }
}