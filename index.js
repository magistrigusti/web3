import 'dotenv/config';
import { Web3 } from 'web3';

const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");
const privateKey = process.env.PRIVATE_KEY;
const account = web3.eth.accounts.wallet.add(privateKey);

web3.eth.getBalance(account[0].address)
  .then(data => console.log(data))