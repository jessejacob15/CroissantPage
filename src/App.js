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
import Textbox7 from "./components/Textbox7/Textbox7";

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
        <div className="d-flex justify-content-center">
          <div className="logoBox">
            <img src="https://i.imgur.com/XRd1Hqz.png" className="App-logo" />
          </div>
        </div>
        <div className="slogan">
          “Food token mixing creativity with philanthropy”
        </div>
        {/* BLURB BOX */}
        <Textbox />
        <br></br>
        {/* WALLET BOX */}
        <Textbox6 balance={this.state.croBalance} />
        <br></br>
        {/* PRESS BOX */}
        <Textbox7 />
        <br></br>
        {/* BAKERIES BOX */}
        <Textbox3 />
        <br></br>
        {/* DONATIONS BOX */}
        <Textbox4 />
        <br></br>
        {/* TOKENOMICS BOX */}
        <Textbox5 />
        <br></br>
      </div>
    );
  }
}
export default App;
