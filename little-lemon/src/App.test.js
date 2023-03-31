import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import BookingForm from "./components/Booking/BookingForm";
import BookingFormTest from "./components/Booking/BookingFormTest";
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
    const user = userEvent.setup()
    render(<BookingFormTest onSubmit={handleSubmit} />)

    await user.type(screen.getByRole("textbox", { name: /name/i }), 'John')
    await user.type(screen.getByLabelText(/Date/), '1969-20-04');
    await user.type(screen.getByRole("combobox", { name: /time/i }), '17:00')
    await user.type(screen.getByRole("combobox", { name: /occasion/i }), 'birthday')
    await user.type(screen.getByRole("spinbutton", { name: /guests/i }), "5")

    await user.click(screen.getByRole("button"))

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalled(),
    )
  })
})