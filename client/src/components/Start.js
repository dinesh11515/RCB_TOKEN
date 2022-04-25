import React from "react";
import anime from 'animejs';
export default function Start(props){
  
    React.useEffect(() => {
      anime({
          targets: '.anime1 .word',
          scale: [14,1],
          opacity: [0,1],
          easing: "easeOutCirc",
          duration: 800,
          delay: (el, i) => 800 * i
        },{
          targets: '.anime1',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        })
    }, []);
    return (
      <div className="start">
        <div className="main">
          <h1 class="anime1">
              <span class="word">Connect </span>
              <span class="word">To</span>
              <span class="word">Wallet</span>
          </h1>
          <h1 class="anime1">
            <span class="word">To</span>
            <span class="word">Enter</span>
            <span class="word">The</span>
            <span class="word">World </span>
            <span class="word">of </span>
            <span class="word">challengers </span>
          </h1>
          <h1 class="anime1">
            <span class="word">The</span>
            <span class="word">new</span>
            <span class="word">era </span>
            <span class="word">of </span>
            <span class="word">CRYPTO </span>
          </h1>
          <button id="connect" onClick={props.connect}>connect</button>
        </div>
      </div>
    );
  
}