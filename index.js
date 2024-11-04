import 'dotenv/config';
import {Web3} from 'web3';
import ABI from './abi.js';

const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");
const privateKey = process.env.PRIVATE_KEY;
const account = web3.eth.accounts.wallet.add(privateKey);

// web3.eth.getBalance(account[0].address)
//   .then(data => console.log(data));
// web3.eth.getChainId().then(data => console.log(data));
// web3.eth.getBlockNumber().then(data => console.log(data));
// web3.eth.getTransaction("0xa749ad807bd110333929a51791cbc9708eb18d4fe7fca0892f7ee436e6a75f49")
//   .then(data => console.log(data));

// const uniAddress = "0x8efE9DB29DB3826BE04147D8cf01Dc9F7917dCeE";
// const uniToken = new web3.eth.Contract(ABI, uniAddress);
// const symbol = uniToken.methods
//   .symbol()
//   .call()
//   .then(data => console.log("Символ токена:", data));

const to = "0x8efE9DB29DB3826BE04147D8cf01Dc9F7917dCeE";
const value = web3.utils.toWei("0.1", "ether");

uniToken.methods
  .transfer(to, value)
  .send({from: account[0].address })
  .then(data => console.log(data));