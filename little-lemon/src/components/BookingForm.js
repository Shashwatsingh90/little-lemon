import React from 'react'
import { useState } from 'react'

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

    console.log(props);

    // const availableTimes = props.availableTimes;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                    {
                        availableTimes.map(availableTime => (<option onSelect={e => setAvailableTimes(e.target.value)} value={availableTime}>{availableTime}</option>))
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    )
}

export default BookingForm