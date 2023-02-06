import { useState } from "react";
import { VStack, Button } from "@chakra-ui/react";

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
      <VStack
        p={32}
        marginLeft="auto"
        marginRight="auto"
        backgroundColor="#495e57"
        textColor="white"
      >
        <h1>Reservation</h1>
        <form onSubmit={handleSubmit} aria-label="Booking Form">
          <label htmlFor="res-date">
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
          <br />
          <label htmlFor="res-time">
            Choose time
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
          <br />
          <label htmlFor="guests">
            Number of guests
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
          <br />
          <label htmlFor="occasion">
            Occasion
            <select
              name="occasion"
              id="occasion"
              aria-label="Occasion Select"
              required
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option key="birthday">Birthday</option>
              <option key="anniversary">Anniversary</option>
            </select>
          </label>
          <br />
          <Button
            margin="20px"
            type="submit"
            aria-label="On Click"
            backgroundColor="#f4ce14"
            borderRadius="16px"
            fontSize="18px"
            fontWeight="bolder"
            height="40px"
            width="150px"
            border="none"
          >
            Submit
          </Button>
        </form>
      </VStack>
    </>
  );
}

export default BookingForm;
