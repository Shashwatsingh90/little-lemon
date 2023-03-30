import { render, screen, fireEvent } from "@testing-library/react";
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
    const availTimes = screen.getByTestId("availTimes");
    fireEvent.change(screen.getByLabelText(/Date/), { target: { value: 'a' } });
    expect(availTimes).toEqual(expect.arrayContaining(possTimes));
  });
})






