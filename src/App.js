import "./App.css";
import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Textbox from "./components/Textbox/Textbox";
import Navigation from "./components/Navbar/MyNavbar";
import Textbox2 from "./components/Textbox2/Textbox2";
import Textbox3 from "./components/Textbox3/Textbox3";

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
      <Textbox3 />
    </div>
  );
}

export default App;
