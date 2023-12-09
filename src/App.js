import { Fragment } from "react";
import "./App.css";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment className="App">
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
