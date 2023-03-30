import { render, screen, fireEvent, within } from "@testing-library/react";
import BookingForm from "./components/Booking/BookingForm";


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
})






