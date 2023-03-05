import React from "react";

function Third() {
  const Inputs = ["xc", "dz", "bbb", "dz"];
  const Queries = ["bbb", "ac", "dz"];

  const wordsCount = {};
  Queries.forEach((query) => {
    if (Inputs.includes(query)) {
      if (wordsCount[query]) {
        wordsCount[query]++;
      } else {
        wordsCount[query] = 1;
      }
    } else {
      wordsCount[query] = 0;
    }
  });

  const result = Object.keys(wordsCount).map((word) => wordsCount[word]);
  return <div>{JSON.stringify(result, null, 2)}</div>;
}

export default Third;
