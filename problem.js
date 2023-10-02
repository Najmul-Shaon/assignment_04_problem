function cubeNumber(number) {
  // problem 01
  if (typeof number !== "number") {
    return "Please enter a valid number";
  }
  const cubeNumber = Math.pow(number, 3);

  return cubeNumber;
}

// const cubeNumberResult = cubeNumber(-3);
// console.log(cubeNumberResult);

// problem 02
