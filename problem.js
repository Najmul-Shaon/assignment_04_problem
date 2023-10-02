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

// problem 03
function sortMaker(arr) {
  let newArr = [];
  let arrFirstElement = arr[0];
  let arrSecondElement = arr[1];
  if (arrFirstElement < 0 || arrSecondElement < 0) {
    return "Invalid Input";
  } else if (arrFirstElement < arrSecondElement) {
    let temp = arrFirstElement;
    arrFirstElement = arrSecondElement;
    arrSecondElement = temp;
    newArr.push(arrFirstElement);
    newArr.push(arrSecondElement);
    return newArr;
  } else if (arrFirstElement === arrSecondElement) {
    return "equal";
  } else {
    return arr;
  }
}
// console.log("1st", sortMaker([2, 3]));
// console.log("2nd", sortMaker([4, 2]));
// console.log("3rd", sortMaker([4, 4]));
// console.log("4th", sortMaker([1, 2]));
// console.log("5th", sortMaker([-4, -20]));

// problem 04

// problem 05
function canPay(changeArray, totalDue) {
  let totalTk = 0;
  for (let i = 0; i < changeArray.length; i++) {
    totalTk = totalTk + changeArray[i];

    // console.log(changeArray[i], totalTk);
  }
  if (changeArray.length < 1) {
    return "Please enter a valid array.";
  } else if (totalTk >= totalDue) {
    return true;
  } else {
    return false;
  }
}

console.log(canPay([1], 10));
