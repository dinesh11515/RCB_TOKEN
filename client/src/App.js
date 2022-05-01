import React from "react";
import Start from "./components/Start";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Web3 from "web3";
import rcb from "./contracts/RCB.json"
import rcb_nft from "./contracts/rcbNFT.json";
import Main from "./components/main";
import Navrcb from "./components/nav";
import Footer from "./components/footer";


export default function App(){
  const [currAccount,setCurrAccount] = React.useState("");
  const [instance,setInstance] = React.useState(null);
  const [nftInstance,setNftInstance] = React.useState(null);
  const connect = async() => {
    try{
      const web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      const accounts = await web3.eth.getAccounts()
      const id = await web3.eth.net.getId()
      const deployedNetwork_token = rcb.networks[id]
      setInstance(new web3.eth.Contract(rcb.abi,deployedNetwork_token && deployedNetwork_token.address))
      const deployedNetwork_nft = rcb_nft.networks[id]
      setNftInstance(new web3.eth.Contract(rcb_nft.abi,deployedNetwork_nft && deployedNetwork_nft.address))
      console.log(deployedNetwork_nft.address)
      setCurrAccount(accounts[0])   
    }
    catch(err){
      alert(err)
    }
  }
  const mintNft = async (id) =>{
    await nftInstance.methods.mint(id).send({from:currAccount,value:10000000000000000}).then(data =>{ 
      if(data.status){
        alert("minted")
      }
      else{
        console.log(data)
      }})
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
        <Main mint={mintNft}/>
        <Footer />
      </div>
}
    </div>
  )
}