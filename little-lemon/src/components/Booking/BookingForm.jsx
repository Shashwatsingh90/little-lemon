import { React, useReducer, useState } from "react";
import {
  AvailableTimesReducer,
  handleSubmit,
  initializeTimes,
} from "./BookingReducer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useSubmit from "../../hooks/useSubmit";

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
          justifyItems: "center",
        }}
      >
        <h1>Make your Reservation Now</h1>
        <Formik
          initialValues={{
            availableTimes: [initializeTimes.availableTimes],
            formData: initializeTimes.formData,
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            handleSubmit(values.formData, navigate);
          }}
          validationSchema={FormSchema}
        >
          {/* try mappropstovalues https://formik.org/docs/api/withFormik#mappropstovalues-props-props--values */}
          {({ values, isValid, dirty }) => (
            <Form
              style={{
                display: "grid",
                gap: 20,
                alignItems: "center",
                width: "35%",
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
              <ErrorMessage name="name">
                {(msg) => <div className="errorMessage">{msg}</div>}
              </ErrorMessage>

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
              <ErrorMessage name="date">
                {(msg) => <div className="errorMessage">{msg}</div>}
              </ErrorMessage>

              <label htmlFor="time">Time</label>
              <Field
                value={state.time}
                id="time"
                name="time"
                as="select"
                testid="time"
              >
                <span testid="availTimes">
                  {state.availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </span>
                <ErrorMessage name="time">
                  {(msg) => <div className="errorMessage">{msg}</div>}
                </ErrorMessage>
              </Field>

              <label htmlFor="occasion">Occasion</label>
              <Field
                values={state.occasion}
                as="select"
                id="occasion"
                name="occasion"
                multiple={false}
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <ErrorMessage name="occasion">
                  {(msg) => <div className="errorMessage">{msg}</div>}
                </ErrorMessage>
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
              {values.guests}
              <br />
              <ErrorMessage name="guests">
                {(msg) => <div className="errorMessage">{msg}</div>}
              </ErrorMessage>

              <button type="submit" disabled={!isValid || !dirty}>
                Book Now!
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
