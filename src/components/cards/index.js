import Card from "./card";
import "./style.css";
import greekSalad from "../../assets/greeksalad.jpg";
import bruschetta from "../../assets/bruschetta.jpg";
import lemonDessert from "../../assets/lemondessert.jpg";

function Cards() {
  return (
    <div className="card-container">
      <Card
        image={greekSalad}
        price="$12.99"
        title="Greek salad"
        desc="The famous greek salad of crispy lettuce, tomatoes, cucumbers, onions, olives, and feta cheese."
      />
      <Card
        image={bruschetta}
        price="$5.99"
        title="Bruschetta"
        desc="Our Bruschetta is made from grilled bread that has been xx with garlic and seasoned with salt and olive oil."
      />
      <Card
        image={lemonDessert}
        price="$4.99"
        title="Lemon Dessert"
        desc="This comes straight from grandma's receipe book, sourced and is as authentic as can be imaged."
      />
    </div>
  );
}

export default Cards;
