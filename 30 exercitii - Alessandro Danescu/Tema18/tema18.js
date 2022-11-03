function test50(x, y)
{
  return ((x == 50 || y == 50) || (x + y == 50));
}

//Conform valorilor introduse de mine pentru a fi afisate, vor aparea urmatoarele rezultate:

console.log(test50(50, 50)) //True - pentru ca ambele variabile ale mele x si y sunt 50 si trebuie ca cel putin una dintre ele sa indeplineasca conditia data
console.log(test50(10, 50)) //True - pentru ca una dintre variabile (x sau y) indeplineste conditia data
console.log(test50(20, 60)) //False - pentru ca nu am nicio variabila x sau y egala cu 50 si nici suma nu e 50
console.log(test50(20, 30)) //True - pentru ca suma mea este egala cu 50, desi variabilele mele x si y nu sunt 50
