function yearLeap(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(yearLeap(2016));
console.log(yearLeap(2000));
console.log(yearLeap(1700));
console.log(yearLeap(1800));
console.log(yearLeap(100));
