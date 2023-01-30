import "./font.css";
import "./CallToAction.css";
import food from "./assets/restauranfood.jpg";

function CallToAction() {
  return (
    <div className="call-to-action-container">
      <div id="description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h4>
          We are a family owned Mediterranean restaurant,
        </h4>
        <h4>
          focused on traditional
          recipes served with a modern
          twist.
        </h4>
        <button id="book">Reserve a Table</button>
      </div>
      <img src={food} id="food" alt="restaurant food"></img>
    </div>

  );
}

export default CallToAction;

