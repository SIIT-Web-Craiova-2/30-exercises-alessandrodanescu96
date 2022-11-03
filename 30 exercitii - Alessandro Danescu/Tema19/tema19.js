function test(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

console.log(test(20)); //False - cum x=10 -> nu se indeplineste nicio conditie
console.log(test(95)); //True - cum x=95 -> se indeplineste prima conditie
console.log(test(85)); //True - cum x=85 -> se indeplineste prima conditie
console.log(test(189)); //False - nu se indeplineste nicio conditie
console.log(test(200)); //False - nu se indeplineste nicio confitie
