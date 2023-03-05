import React from "react";

function Second() {
  const sentence = "Saya sangat senang mengerjakan soal algoritma";

  const words = sentence.split(" ");
  const maxLengthWord = words.reduce(
    (max, word) => {
      return word.length > max.length ? { word, length: word.length } : max;
    },
    { word: "", length: 0 }
  );

  const result = maxLengthWord["word"]+": " + maxLengthWord["length"] + " character";

  return <div>{result}</div>;
}

export default Second;
