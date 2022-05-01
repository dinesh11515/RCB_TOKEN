
import React from "react";
export default function Nft(props){
    return(
        <div className="nft">
            <img className="nft_img" src={props.details.img}></img>
            <h1 className="nft_name">{props.details.name}</h1>
            <div className="nft_details">
                <p>{props.details.price} RCB</p>
                <button onClick={()=>props.mint(props.details.id)}>mint</button>
            </div>
        </div>
    )
}