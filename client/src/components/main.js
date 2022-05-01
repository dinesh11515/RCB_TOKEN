import React from "react";
import Nft from "./nft";
import data from "../data";
import rcb_fire from "./rcb_fire.png";
export default function Main(props){
    const Nfts = data.map(ele => {
        return (
            <Nft details={ele} mint={props.mint}/>
        )
    })
    return(
        <div>
        <div className="main_intro">
            <div>
                <img src={rcb_fire} className="rcb_fire"></img>
            </div>
            <div className="main_info">
                <h1>Royal Challengers</h1>
                <h1>Banglore Token</h1>
                <div className="main_add">
                    <p className="address">0xD3e7092c303D0A7C469Bc9e698678e10D380d181</p>
                    <button className ="copy_add" onClick={() => {navigator.clipboard.writeText("0xD3e7092c303D0A7C469Bc9e698678e10D380d181")}}>Copy To Clipboard</button>
                </div>
                <button className ="buy" onClick={()=>{window.open("https://app.uniswap.org/#/swap?chain=rinkeby")}}>Buy On Uniswap</button>
            </div>
        </div>
        <h1 id="nft_heading">Royal Challengers Nft Collection</h1>
        <div className="nft_container">
            {Nfts}
        </div>
        </div>
    )
}