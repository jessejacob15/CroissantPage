import Web3 from "web3";

// window.ethereum.request({ method: "eth_requestAccounts" });

// const web3 = new Web3(window.ethereum);

// export default web3;

const web3 = new Web3(
  Web3.givenProvider ||
    "https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
);
export default web3;
