import React from "react";

const Button = (props) => {
  console.log("****button.js====>");
  console.log(props);
  console.log("****button.js<====");

  return (
    <button
      className="button"
      type={props.type || "button"}
      onClick={props.onClickProps}
    >
      {props.children}
    </button>
  );
};

export default Button;
