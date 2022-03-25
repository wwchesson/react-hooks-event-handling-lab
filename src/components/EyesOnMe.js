import React from "react";

function EyesOnMe() {
  function focus() {
    return console.log("Good!");
  }

  function blur() {
    return console.log("Hey! Eyes on me!");
  }

  return (
    <button onFocus={focus} onBlur={blur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
