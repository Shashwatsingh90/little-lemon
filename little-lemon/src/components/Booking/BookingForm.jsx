import { React, useReducer, useState } from "react";
import { AvailableTimesReducer, initializeTimes } from "./BookingReducer";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  date: Yup.date().required("Required"),
  time: Yup.string().required("Required"),
  occasion: Yup.string().required("Required"),
  guests: Yup.number()
    .min(2, "Sorry, we require at least 2 guests for reservations.")
    .max(10, "Sorry, we can't accomodate more than 10 guests.")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function BookingForm() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [date, setDate] = useState("");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   date: Date(),
  //   times: [],
  //   occasion: "",
  //   guests: "2",
  // });
  const [state, dispatch] = useReducer(
    AvailableTimesReducer,
    null,
    initializeTimes
  );

  // const addBooking = () => {
  //   dispatch({ type: 'ADD_BOOKING' })
  // }

  const date = new Date("1995-12-17T03:24:00");
  return (
    <div>
      <div>
        <h1>Make your Reservation Now</h1>
        <Formik
          initialValues={{
            name: "",
            date: date,
            availableTimes: [initializeTimes.availableTimes],
            occasion: "",
            guests: "2",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            console.log(values);
          }}
          validationSchema={FormSchema}
        >
          {({ values, errors, touched }) => (
            <Form
              style={{
                display: "grid",
                gap: 20,
                gridAutoFlow: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label htmlFor="name">First Name</label>
              <Field
                type="text"
                value={values.name}
                id="name"
                name="name"
                placeholder="John Connor"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}

              <label htmlFor="date">Date</label>
              <Field
                value={values.date}
                type="date"
                id="date"
                name="date"
                onChange={() =>
                  dispatch({ type: "SET_DATE", payload: date.toISOString() })
                }
              />
              {errors.date && touched.date ? <div>{errors.date}</div> : null}

              <label htmlFor="availableTimes">Time</label>
              <Field
                value={values.availableTimes.time}
                id="availableTimes"
                name="availableTimes"
                as="select"
              >
                {values.availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
                {errors.time && touched.time ? <>{errors.time}</> : null}
              </Field>

              <label htmlFor="occasion">Occasion</label>
              <Field as="select" id="occasion" name="occasion" multiple={false}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                {errors.occasion && touched.occasion ? (
                  <div>{errors.occasion}</div>
                ) : null}
              </Field>

              <label htmlFor="guests">Number of Guests</label>
              <Field
                value={values.guests}
                type="range"
                id="guests"
                name="guests"
                min="1"
                max="10"
              />
              {values.guests}
              {errors.guests && touched.guests ? (
                <div>{errors.guests}</div>
              ) : null}

              <button type="submit">Book Now!</button>
            </Form>
          )}
        </Formik>
      </div>
      {/* <div>
    <h2>Existing Bookings</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat( 3, 1fr)', gap: '2.5rem' }}>
            {bookings.map((booking, index) => (
              <div key={index}>
                <div>Date: <strong>{booking.date}</strong></div>
                <div>Time: <strong>{booking.time}</strong></div>
                <div>Guests: <strong>{booking.guests}</strong></div>
              </div>)
            )}
          </div>
      </div> */}
    </div>
  );
}
