import Web3 from "web3";

// window.ethereum.request({ method: "eth_requestAccounts" });

// const web3 = new Web3(window.ethereum);

// export default web3;

const web3_test = new Web3(
  Web3.givenProvider || "https://cronos-testnet-3.crypto.org:8545"
);
export default web3_test;
