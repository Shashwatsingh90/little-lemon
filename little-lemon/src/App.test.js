import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/Booking/BookingForm';
import { BookingReducer } from './components/Booking/BookingReducer';
// import BookingReducer from './components/Booking/BookingReducer';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
})

test("Updates the time correctly", () => {
  render(<BookingForm />);
  const dateSelect = screen.getByLabelText(/Pick a Date/);
  fireEvent.change(dateSelect, { target: { value: "04/20/2023" } });
  const timeSelect = screen.getByLabelText(/Pick a Time/);
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  expect(timeSelect.value).toEqual("17:00");
});