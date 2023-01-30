import "./App.css";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api.js";
import { useReducer } from "react";

function Main() {
  const navigate = useNavigate();

  function updateTimes(state, action) {
    const date = new Date(action.date)
    return fetchAPI(date);
  }

  function initializeTimes() {
    const dates = fetchAPI(new Date());
    return dates;
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function submitForm(formData) {
    const bookingConfirmed = submitAPI(formData);
    if(bookingConfirmed) {
      return navigate("/booking-confirmation");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage times={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
        <Route path="/booking-confirmation" element={<ConfirmedBooking/>}></Route>
      </Routes>
    </main>
  );
}

export default Main;