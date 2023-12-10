import "./style.css";
import Button from "react-bootstrap/Button";

function Specials() {
  return (
    <div className="special-content">
      <h1 id="special">This weeks specials!</h1>
      <Button className="btn-primary" id="onlinemenu" variant="warning">
        Online Menu
      </Button>
    </div>
  );
}

export default Specials;
