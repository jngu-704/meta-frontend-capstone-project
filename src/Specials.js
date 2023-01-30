import "./font.css";
import "./Specials.css";
import greek from "./assets/greek salad.jpg"
import bruchetta from "./assets/bruchetta.svg"
import dessert from "./assets/lemon dessert.jpg"

function Specials() {


  return (
    <div className="specials-container">
      <div id="specials-description">
        <h2>This weeks specials!</h2>
        <button id="menu">Online Menu</button>
      </div>
      <div >
          <ul id="specials">
            <li><img src={greek} alt="greek salad"></img></li>
            <li><img src={bruchetta} alt="bruchetta"></img></li>
            <li><img src={dessert} alt="lemon dessert"></img></li>
          </ul>
      </div>
    </div>
  );
}

export default Specials;