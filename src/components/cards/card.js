import "./style.css";

function Card({ image, title, price, desc }) {
  return (
    <div className="single-card">
      <div class="card">
        <img className="card-image" src={image} alt="" />
        <div className="card-body">
          <div className="card-title-price">
            <h5 className="card-title">{title}</h5>
            <p className="card-price">{price}</p>
          </div>

          <p className="card-text">{desc}</p>
          <a href="/#" id="orderdelivery">
            Order a delivery
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
