import { React, useReducer, useState } from "react";
import {
  AvailableTimesReducer,
  handleSubmit,
  initializeTimes,
} from "./BookingReducer";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  date: Yup.date()
    .default(() => new Date())
    .required("Required"),
  time: Yup.string().required("Required"),
  occasion: Yup.string().required("Required"),
  guests: Yup.number()
    .min(2, "Sorry, we require at least 2 guests for reservations.")
    .max(10, "Sorry, we can't accomodate more than 10 guests.")
    .required("Required"),
});

export default function BookingForm() {
  const [state, dispatch] = useReducer(
    AvailableTimesReducer,
    null,
    initializeTimes
  );
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: 20,
          gridAutoFlow: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Make your Reservation Now</h1>
        <Formik
          initialValues={{
            availableTimes: [initializeTimes.availableTimes],
            formData: {
              name: "",
              date: "",
              time: "17:00",
              occasion: "",
              guests: 3,
            },
          }}
          onSubmit={(values) => {
            handleSubmit(values.formData, navigate);
          }}
          validationSchema={FormSchema}
        >
          {({ values, errors, touched, isValid, dirty }) => (
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
                value={state.name}
                id="name"
                name="name"
                placeholder="John Connor"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}

              <label htmlFor="date">Date</label>
              <Field
                value={state.date}
                type="date"
                id="date"
                name="date"
                onChange={(e) =>
                  dispatch({
                    type: "SET_DATE",
                    payload: e.target.value,
                  })
                }
              />
              {errors.date && touched.date ? <div>{errors.date}</div> : null}

              <label htmlFor="time">Time</label>
              <Field value={state.time} id="time" name="time" as="select">
                {state.availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
                {errors.time && touched.time ? <>{errors.time}</> : null}
              </Field>

              <label htmlFor="occasion">Occasion</label>
              <Field
                values={values.occasion}
                as="select"
                id="occasion"
                name="occasion"
                multiple={false}
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                {errors.occasion && touched.occasion ? (
                  <>{errors.occasion}</>
                ) : null}
              </Field>

              <label htmlFor="guests">Number of Guests</label>
              <Field
                value={state.guests}
                type="range"
                id="guests"
                name="guests"
                min="1"
                max="10"
              />
              <p>{values.guests}</p>
              <p>
                {errors.guests && touched.guests ? <>{errors.guests}</> : null}
              </p>

              <button type="submit" disabled={!isValid || !dirty}>
                Book Now!
              </button>
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
