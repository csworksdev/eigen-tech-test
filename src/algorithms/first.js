import React from "react";

function First() {
  const myString = "NEGIE1";
  const myArray = myString.split(/(\d+)/);
  const result = myArray.map((item) => {
    if (typeof item === "string") {
      return item.split("").reverse().join("");
    }
    return item;
  });

  return <div>{result.join("")}</div>;
}

export default First;
