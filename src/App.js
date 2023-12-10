import { Fragment } from "react";
import "./App.css";
import Nav from "./components/nav";
import Main from "./components/main";
import Specials from "./components/specials";
import Cards from "./components/cards";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment className="App">
      <Nav />
      <Main />
      <Specials />
      <Cards />
    </Fragment>
  );
}

export default App;
