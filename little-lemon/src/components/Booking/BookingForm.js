import { React, useReducer, useState } from 'react';
import { bookingReducer, initialBookingState } from './bookingReducer';


export default function BookingForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [{
        availableTimes,
        time,
        date,
        guests,
        bookings
    }, dispatch] = useReducer(bookingReducer, null, initialBookingState)

    const handleDateChange = (e) => {
        dispatch({ type: 'SET_DATE', date: e.target.value })
    }

    const handleGuestChange = (e) => {
        dispatch({ type: 'SET_GUESTS', guests: e.target.value })
    }

    const handleTimeChange = (e) => {
        dispatch({ type: 'SET_TIME', time: e.target.value })
    }

    const addBooking = () => {
        dispatch({ type: 'ADD_BOOKING' })
    }

    return (
        <>
            <div style={{ display: 'grid', gap: 20, gridAutoFlow: 'row', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
                <div><h1>Book a Table</h1></div>
                <label htmlFor="date">Pick a Date</label>
                <input name='date' value={date} type='date' onChange={handleDateChange} />
                <label htmlFor="time">Pick A Time</label>
                {availableTimes.length > 0 ?
                    <select name='time' value={time} onChange={handleTimeChange}>
                        {availableTimes?.map(time => <option key={time}>{time}</option>)}
                    </select> :
                    <em><p>Sorry, there are no more times available for that date.</p></em>
                }

                <label htmlFor="guests">How many in your party?</label>
                <input name='guests' type='range' value={guests} min={1} max={10} onChange={handleGuestChange} />{guests}
                { }
                <button className='button' onClick={(e) => addBooking(e)}>Add Booking</button>
            </div>
            <hr style={{ margin: 20 }} />
            <div style={{ display: 'grid', gap: 20, justifyContent: 'center', justifyItems: 'center' }}>
                <button className='button' onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Hide Bookings" : "Show Existing Bookings"}</button>
                <div><h2>Existing Bookings</h2></div>
                {isOpen &&
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat( 3, 1fr)', gap: '2.5rem' }}>
                        {bookings.map((booking, index) => (
                            <div key={index}>
                                <div>Date: <strong>{booking.date}</strong></div>
                                <div>Time: <strong>{booking.time}</strong></div>
                                <div>Guests: <strong>{booking.guests}</strong></div>
                            </div>)
                        )}
                    </div>}
            </div>
        </>
    )
}