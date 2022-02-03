import React, { useState } from "react";

function Toggle() {
  const [isOn, setIson] = useState(false);

  function handleClick(){
    setIson((isOn) => !isOn);
  }
  const color = isOn ? 'red' : 'white';
  return (<button> style={{background: color}} onClick={handleClick}</button>);
}

export default Toggle;
