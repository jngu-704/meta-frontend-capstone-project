import { useState } from "react";
import "./BookingForm.css";

function BookingForm (props) {
  const currentDate = new Date();

  const [date, setDate] = useState(`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`);
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const availableTimes = props.times;
  const setTimes = props.setTimes;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
    console.log(time);
    console.log(guests);
    console.log(occasion);
    setDate(`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`);
    setTime("17:00");
    setGuests(1);
    setOccasion("Birthday");
  };

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Choose date
        <input
          name="date"
          type="date"
          id="res-date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>
      <label>
        Choose time
        <br/>
        <select
          name="time"
          id="res-time"
          value={time}
          onChange={e => setTime(e.target.value)}
        >
          {availableTimes.map(time => <option value={time}>{time}</option>)}
        </select>
      </label>
      <label>
        Number of guests
        <br/>
        <input
          name="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={e => setGuests(e.target.value)}
        />
      </label>
      <label>
        Occasion
        <br/>
        <select
          name="occasion"
          id="occasion"
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;