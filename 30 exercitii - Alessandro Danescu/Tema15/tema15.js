function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(54)) // 'n' nu este mai decat ca 13, intrucat se executa a 2-a comanda
console.log(difference(9)) //'n' este mai mic ca 13, intrucat se executa if-ul
