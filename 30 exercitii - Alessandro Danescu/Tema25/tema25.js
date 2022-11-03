function multiple(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(multiple(15)); //true - multiplu de 3
console.log(multiple(28)); //true - multiplu de 7
console.log(multiple(20)); //false - multiplu de nimic
console.log(multiple(40)); //false - multiplu de nimic
