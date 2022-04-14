import "./App.css";
import web3 from "./web3";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Textbox from "./components/Textbox/Textbox";
import Navigation from "./components/Navbar/MyNavbar";

import Textbox3 from "./components/Textbox3/Textbox3";
import Textbox4 from "./components/Textbox4/Textbox4";
import Textbox5 from "./components/Textbox5/Textbox5";
import Textbox6 from "./components/Textbox6/Textbox6";

class App extends React.Component {
  state = {
    croBalance: "",
  };
  async componentDidMount() {
    const balance = await web3.eth.getBalance(
      "0xf191041b58924A3Cc6a79CD637749C083E7328CE"
    );
    const etherBalance = await web3.utils.fromWei(balance, "ether");
    const finalBalance = etherBalance.substring(0, 6);
    // console.log(balance);

    this.setState({ croBalance: finalBalance });
  }

  render() {
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
        <Textbox6 balance={this.state.croBalance} />
        <br></br>
        <Textbox3 />
        <br></br>
        <Textbox4 />
        <br></br>
        <Textbox5 />
        <br></br>
      </div>
    );
  }
}
export default App;
