import { useState } from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Textarea,
//   VStack,
// } from "@chakra-ui/react";
import "./BookingForm.css";

function BookingForm(props) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const availableTimes = props.times;
  const dispatch = props.dispatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    });
    setDate(new Date());
    setTime("17:00");
    setGuests(1);
    setOccasion("Birthday");
  };

  return (
    <>
      <h1>Reservation</h1>
      <form onSubmit={handleSubmit} aria-label="Booking Form">
        <label for="res-date">
          Choose date
          <input
            name="date"
            type="date"
            id="res-date"
            aria-label="Date Select"
            required
            value={date}
            onChange={(e) => {
              const chosenDate = e.target.value;
              setDate(chosenDate);
              dispatch({ date: chosenDate });
            }}
          />
        </label>
        <label for="res-time">
          Choose time
          <br />
          <select
            name="time"
            id="res-time"
            aria-label="Time Select"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes?.map((time) => (
              <option key={time.id} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
        <label for="guests">
          Number of guests
          <br />
          <input
            name="guests"
            type="number"
            aria-label="Number of Guests"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </label>
        <label for="occasion">
          Occasion
          <br />
          <select
            name="occasion"
            id="occasion"
            aria-label="Occasion Select"
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </label>
        <button type="submit" aria-label="On Click">
          Submit
        </button>
      </form>
    </>
  );
}

export default BookingForm;

// import { useState } from "react";
// //import "./BookingForm.css";

// function BookingForm(props) {
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState("17:00");
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState("Birthday");

//   const availableTimes = props.times;
//   const dispatch = props.dispatch;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.submitForm({
//       date: date,
//       time: time,
//       guests: guests,
//       occasion: occasion,
//     });
//     setDate(new Date());
//     setTime("17:00");
//     setGuests(1);
//     setOccasion("Birthday");
//   };

//   return (
//     <>
//       <h1>Reservation</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Choose date
//           <input
//             name="date"
//             type="date"
//             id="res-date"
//             value={date}
//             onChange={(e) => {
//               const chosenDate = e.target.value;
//               setDate(chosenDate);
//               dispatch({ date: chosenDate });
//             }}
//           />
//         </label>
//         <label>
//           Choose time
//           <select
//             name="time"
//             id="res-time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//           >
//             {availableTimes?.map((time) => (
//               <option key={time.key} value={time}>
//                 {time}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Number of guests
//           <br />
//           <input
//             name="guests"
//             type="number"
//             placeholder="1"
//             min="1"
//             max="10"
//             id="guests"
//             value={guests}
//             onChange={(e) => setGuests(e.target.value)}
//           />
//         </label>
//         <label>
//           Occasion
//           <br />
//           <select
//             name="occasion"
//             id="occasion"
//             value={occasion}
//             onChange={(e) => setOccasion(e.target.value)}
//           >
//             <option>Birthday</option>
//             <option>Anniversary</option>
//           </select>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default BookingForm;
