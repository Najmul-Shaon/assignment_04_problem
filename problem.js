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
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please enter valid string.";
  }
  const isInclude = string1.includes(string2);
  return isInclude;
}
// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", "Code"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker", "pet"));
