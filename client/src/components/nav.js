import React from "react";

import rcb_logo from "./rcb-logo-new.png"
export default function Navrcb(){
    return(
        <div>
            <div className="nav">
                
                <img src={rcb_logo} className="rcb_logo"></img>
                <h1>Royal Challengers</h1>
                <div className="nav_opt">
                    <p>Home</p>
                   
                </div>      
            </div>
        </div>
    )
}