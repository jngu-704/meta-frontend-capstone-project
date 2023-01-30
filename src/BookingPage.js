import BookingForm from "./BookingForm";
import "./font.css";

function BookingPage(props) {
  return (
    <BookingForm times={props.times} setTimes={props.setTimes}/>
  );
}

export default BookingPage;