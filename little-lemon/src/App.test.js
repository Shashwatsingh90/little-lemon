import { render, screen, fireEvent, within } from "@testing-library/react";
import BookingForm from "./components/Booking/BookingForm";


describe('BookingForm', () => {
  test("provides available times", () => {
    render(<BookingForm />);
    const array = []
    const possTimes = () => {
      for (let index = 17; index < 23; index++) {
        array.push(index + ":00");
        array.push(index + ":30");
      } return array.sort();
    }
    const timeSelector = screen.getByLabelText(/Time/i);
    fireEvent.change(screen.getByLabelText(/Date/), { target: { value: '1969-20-04' } });
    expect(timeSelector).toEqual(expect.arrayContaining(array));
  });
})






