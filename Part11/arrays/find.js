function isBigEnough(element) {
  return element > 15;
}

let val = [12, 5, 8, 130, 44].find(isBigEnough);
console.log(val);