import React from "react";

function getFirstDiagonal(matrix) {
  let diagonal = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) {
        diagonal.push(matrix[i][j]);
      }
    }
  }
  return diagonal;
}
function getSecondDiagonal(matrix) {
  let otherDiagonal = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i + j === matrix.length - 1) {
        otherDiagonal.push(matrix[i][j]);
      }
    }
  }
  return otherDiagonal;
}

function sumArray(array) {
    return array.reduce((sum, num) => sum + num)
}

function Fourth() {
  const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const firstDiagonal = getFirstDiagonal(matrix);
  const secondDiagonal = getSecondDiagonal(matrix);

  const result = sumArray(firstDiagonal) - sumArray(secondDiagonal);

  return <div>{result}</div>;
}

export default Fourth;
