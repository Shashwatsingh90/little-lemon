import React from 'react'
import { useTimes } from '../../context/TimeContext'



function TimeSlots() {

    const times = useTimes();
    return (
        <>
            {times?.times?.map((time) => {
                return (
                    <option value={time.time} key={time.id}>{time.time}</option>
                )
            })}
        </>
    )
}

export default TimeSlots