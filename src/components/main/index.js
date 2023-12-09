import food from "../../assets/restauranfood.jpg";
import "./style.css";

function Main() {
  return (
    <main>
      <div className="banner">
        <div className="content">
          <div className="text-content">
            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
          </div>
          <div className="image-content">
            <img src={food} alt="food" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
