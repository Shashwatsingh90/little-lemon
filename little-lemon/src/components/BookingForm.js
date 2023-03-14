import React from 'react'
import { useState } from 'react'
// import {formReducer, inititalState} from './formReducer';



function BookingForm({ times, onSubmitted }) {
    const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [selectedTime, setSelectedTime] = useState('17:00')

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

    return (
        <>
            <form onSubmit={() => onSubmitted(selectedTime)} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
                <label htmlFor="name">
                    <p>Your Name</p>
                    <input
                        // onChange={handleNameChange}
                        type="text"
                        id="name"
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
                    id="res-time "
                    onChange={e => setSelectedTime(e.target.value)}
                    value={selectedTime}
                >
                    {times?.map((time) => {
                        return (
                            <option value={time.time} key={time.time}>{time.time}</option>
                        )
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}

export default BookingForm