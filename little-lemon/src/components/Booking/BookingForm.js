import React from 'react'
import { useState } from 'react'
// import {formReducer, inititalState} from './formReducer';
import { useTimeDispatch } from '../../context/TimeContext';
import TimeSlots from './TimeSlots';


function BookingForm() {
    const [selectedDate, setSelectedDate] = useState('')

    const dispatch = useTimeDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SUBMITTED_TIME',
            time: e.time,
            date: selectedDate
        })
    }


    return (
        <>
            <h1>Make a Reservation</h1>
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 400, gap: 20, padding: 5 }}>
                <label htmlFor="name">
                    <p>Your Name</p>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                    />
                </label>
                <label htmlFor="date">Choose date</label>
                <input type="date" name="date" id="date"
                    onSelect={e => {
                        // dispatch({
                        //   type: 'SELECTED_DATE',
                        //   date: e.target.value
                        // });
                        setSelectedDate(e.target.value)
                    }}
                />
                <select
                    label='time'
                    value="time"
                >
                    <TimeSlots />
                </select>
                <label htmlFor="guests">Choose number of guests</label>
                <input
                    type='range'
                    id="guests"
                    label='guests'
                    value='guests'
                    min='1'
                    max='10'
                />
                <label htmlFor="occasion">Select Occasion</label>
                <select
                    label="occasion"
                    id="occasion"
                    value="occasion"
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default BookingForm