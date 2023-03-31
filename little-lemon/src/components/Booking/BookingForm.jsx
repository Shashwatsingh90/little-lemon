import { React, useReducer, useContext } from "react";
import {
  AvailableTimesReducer,
  handleSubmit,
  initializeTimes,
} from "./BookingReducer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavigateContext } from "../../context/NavigateContext";

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

export default function BookingForm({ children }) {
  const [state, dispatch] = useReducer(
    AvailableTimesReducer,
    null,
    initializeTimes
  );
  const navigate = useContext(NavigateContext);

  return (
    <div>
      <div className="formContainer">
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
          {({ values, isValid, dirty }) => (
            <Form className="form">
              <label htmlFor="name">First Name</label>
              <Field
                type="text"
                value={state.name}
                id="name"
                name="name"
                placeholder="John Connor"
                data-testid="name"
              />
              <ErrorMessage name="name">
                {(msg) => <div className="errorMessage">{msg}</div>}
              </ErrorMessage>

              <label htmlFor="date">Date</label>
              <Field
                value={state.date}
                type="date"
                role="input"
                id="date"
                name="date"
                data-testid="date"
                onChange={(e) =>
                  dispatch({
                    type: "SET_DATE",
                    payload: e.target.value,
                  })
                }
              />
              <ErrorMessage className="errorMessage" name="date">
                {(msg) => msg}
              </ErrorMessage>

              <label htmlFor="time">Time</label>
              <Field
                value={state.time}
                id="time"
                name="time"
                as="select"
                data-testid="time"
              >
                {state.availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
                <ErrorMessage className="errorMessage" name="time">
                  {(msg) => msg}
                </ErrorMessage>
              </Field>

              <label htmlFor="occasion">Occasion</label>
              <Field
                values={state.occasion}
                as="select"
                id="occasion"
                name="occasion"
                multiple={false}
                data-testid="occasion"
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <ErrorMessage className="errorMessage" name="occasion">
                  {(msg) => msg}
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
                data-testid="guests"
              />
              {values.guests}
              <br />
              <ErrorMessage name="guests">
                {(msg) => <div className="errorMessage">{msg}</div>}
              </ErrorMessage>
              <button
                name="submitButton"
                type="submit"
                disabled={!isValid || !dirty}
                data-testid="button"
              >
                Book Now!
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
