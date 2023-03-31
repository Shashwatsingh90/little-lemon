import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import BookingForm from "./components/Booking/BookingForm";
import userEvent from '@testing-library/user-event';



describe('BookingForm', () => {
  test("provides available times", () => {
    render(<BookingForm />);
    const initTimes = []
    const possTimes = () => {
      for (let index = 17; index < 23; index++) {
        initTimes.push(index + ":00");
        initTimes.push(index + ":30");
      } return initTimes.sort();
    }

    const returnedTimes = []
    const timeValues = (times) => (
      times.map(x => {
        return returnedTimes.push(x.value)
      })
    )

    const timeSelector = screen.getByLabelText(/Time/i);
    possTimes();
    const times = within(timeSelector).getAllByRole('option');
    fireEvent.change(screen.getByLabelText(/Date/), { target: { value: '1969-20-04' } });
    timeValues(times);
    expect(initTimes.some(
      initTime => returnedTimes.includes(initTime)
    )).toBe(true);
  });

  test('rendering and submitting a basic Formik form', async () => {
    const handleSubmit = jest.fn()
    render(<BookingForm onSubmit={handleSubmit} />)
    const user = userEvent.setup()

    await user.type(screen.getByRole("textbox", { name: /name/i }), 'John')
    await user.type(screen.getByRole("combobox", { name: /date/i }), '1969-20-04')
    await user.type(screen.getByRole("combobox", { name: /time/i }), '17:00')
    await user.type(screen.getByRole("combobox", { name: /occasion/i }), 'Birthday')
    await user.type(screen.getByRole("slider", { name: /guests/i }), '5')

    await user.click(screen.getByRole("button", { name: /book now!/i }))

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'John',
        date: '1969-20-04',
        time: '17:00',
        occasion: 'Birthday',
        guests: '5'
      }),
    )
  })
})