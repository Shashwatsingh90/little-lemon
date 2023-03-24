import React from 'react'
import { useTimeDispatch, useTimes } from '../../context/TimeContext'



function TimeSlots({ time }) {
    const times = useTimes();
    const dispatch = useTimeDispatch();
    return (
        // <label htmlFor='timeList'>
        //     <ul id='timeList'>
        //         {times?.availTimes?.map((time, index) => (
        //             <li value={time} key={index}>{time}</li>
        //         ))}
        //     </ul>
        <select>
            {times?.availTimes?.map((time, index) => (
                <option
                    key={index}
                    value={time}
                    onChange={e => {
                        dispatch(
                            {
                                type: 'SELECTED_TIME',
                                time: e.target.value
                            }
                        )
                    }}
                >{time}</option>
            ))}
        </select>
        /* {times?.availTimes?.map((time, index) => (
                <select
                    label='time'
                    value={time}
                    
                >
                    <option value={time} key={index}>
                        {time}
                    </option>
                </select>
        ))
        } */

    )
}



export default TimeSlots