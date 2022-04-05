import "./App.css";
import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Textbox from "./components/Textbox/Textbox";
import Navigation from "./components/Navbar/MyNavbar";
import Textbox2 from "./components/Textbox2/Textbox2";

function App() {
  return (
    <div className="background">
      <div>
        <Navigation />
      </div>
      <div className="text-center">
        <img src="https://i.imgur.com/kMhUACm.png" className="App-logo" />
      </div>
      <div className="slogan">
        “Food token mixing creativity with philanthropy”
      </div>
      <Textbox />
      <br></br>
      <Textbox2 />
      <br></br>
    </div>
  );
}

export default App;
