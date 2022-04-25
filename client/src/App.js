import React from "react";
import Start from "./components/Start";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Web3 from "web3";
import rcb from "./contracts/RCB.json"
import Main from "./components/main";
import Navrcb from "./components/nav";

export default function App(){
  const [currAccount,setCurrAccount] = React.useState("");
  const [instance,setInstance] = React.useState(null);
  const connect = async() => {
    try{
      const web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      const accounts = await web3.eth.getAccounts()
      const id = await web3.eth.net.getId()
      const deployedNetwork = rcb.networks[id]
      setInstance(new web3.eth.Contract(rcb.abi,deployedNetwork && deployedNetwork.address))
      setCurrAccount(accounts[0])   
    }
    catch(err){
      alert(err)
    }
  }
  console.log(currAccount)
  return(
    <div>
      {currAccount=="" 
      ?
      <Start connect={connect}/>
      : 
      <div>
        <Navrcb />
        <Main />
      </div>
      }
    </div>
  )
}