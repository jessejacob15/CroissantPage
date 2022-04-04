import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Textbox from "./components/Textbox/Textbox";
import Navigation from "./components/Navbar/MyNavbar";

function App() {
  return (
    <div className="background">
      <div>
        <Navigation />
      </div>
      <div className="text-center">
        <img src="https://i.imgur.com/kMhUACm.png" className="App-logo" />
      </div>
      <Textbox />
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
