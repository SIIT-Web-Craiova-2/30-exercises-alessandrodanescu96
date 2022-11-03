function range(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(range(12, 110));
console.log(range(21, 76));
console.log(range(20, 90));
