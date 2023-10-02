function findAddress(obj) {
  let street = "__";
  let house = "__";
  let society = "__";

  if (obj.hasOwnProperty("street")) {
    street = obj.street;
  }
  if (obj.hasOwnProperty("house")) {
    number = obj.house;
  }
  if (obj.hasOwnProperty("society")) {
    city = obj.society;
  }

  return `${street},${house},${society}`;
}
const address1 = findAddress({
  street: 10,
  house: "15A",
  society: "Earth Perfect",
});
console.log(address1); // Output: 10,15A,Earth Perfect

// const address2 = findAddress({ street: 10, society: "Earth Perfect" });
// console.log(address2); // Output: 10,__,Earth Perfect
// const address3 = findAddress({ street: 10 });
// console.log(address3); // Output: 10,__,Earth Perfect
