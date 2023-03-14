import React from 'react'
import { useState } from 'react'
// import {formReducer, inititalState} from './formReducer';



function BookingForm({ times, onSubmitted }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [selectedTime, setSelectedTime] = useState('17:00')

    // const onSubmitted = () => {

    // }

    return (
        <>
            <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
                <label htmlFor="name">
                    <p>Your Name</p>
                    <input
                        onChange={e => setName(e.target.value)}
                        type="text"
                        id="name"
                        value={name}
                    />
                </label>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={selectedTime}
                    onChange={e => setSelectedTime(e.target.value)}
                >
                    {times?.map((time) => {
                        return (<option key={time.time} value={time.time}>{time.time}</option>)
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type='submit' onClick={() => onSubmitted(selectedTime)}>Make Your Reservation</button>
            </form>
        </>
    )
}

export default BookingForm