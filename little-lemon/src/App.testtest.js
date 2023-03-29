import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import BookingForm from "./components/Booking/BookingForm";

const user = userEvent.setup()

test('updates availableTimes when date is selected ', async () => {
    render(<BookingForm />)

    await user.change(screen.findByLabelText('Date', "04/20/2023"))

    expect(screen.getByTitle('availableTimes')).toContain([{}])

})