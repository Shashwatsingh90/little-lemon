import React from 'react'
import BookingForm from './BookingForm'
import { handleSubmit } from './bookingReducer'

function BookingPage() {
    return (
        <div>
            <BookingForm onSubmit={handleSubmit} />
        </div>
    )
}

export default BookingPage