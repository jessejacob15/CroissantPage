import "./App.css";
import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Textbox from "./components/Textbox/Textbox";
import Navigation from "./components/Navbar/MyNavbar";

import Textbox3 from "./components/Textbox3/Textbox3";
import Textbox4 from "./components/Textbox4/Textbox4";

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

      <Textbox3 />
      <br></br>
      <Textbox4 />
      <br></br>
    </div>
  );
}

export default App;
