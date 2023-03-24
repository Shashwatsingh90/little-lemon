const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

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
        date: new Date().toISOString().substring(0, 10),
        time: defaultTimes[0],
        guests: DEFAULT_GUEST_COUNT,
        availableTimes: defaultTimes
    }
}

const getAvailableDates = (bookings, date) =>
    defaultTimes.filter(defaultTime =>
        typeof bookings.find(booking =>
            booking.date === date && booking.time === defaultTime) === 'undefined')


// let BookingAction = {
//     { type: 'ADD_BOOKING' },
//     { type: 'SET_TIME', time: '' },
//     { type: 'SET_DATE', date: '' },
//     { type: 'SET_GUESTS', guests: '' }
// }

export function bookingReducer(BookingState, BookingAction) {
    const { time, guests, date, bookings } = BookingState
    switch (BookingAction.type) {
        case 'ADD_BOOKING': {
            const nextBookings = [...BookingState.bookings, createBooking(time, guests, date)]
            const nextAvailableTimes = getAvailableDates(nextBookings, date)
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
                availableTimes: getAvailableDates(bookings, BookingAction.date)
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