import BookingForm from "./BookingForm";
import "../font.css";

function BookingPage(props) {
  return (
    <>
      <BookingForm
        times={props.times}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </>
  );
}

export default BookingPage;
