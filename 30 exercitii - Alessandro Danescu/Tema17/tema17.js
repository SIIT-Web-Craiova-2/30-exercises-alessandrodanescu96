function diffnum(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

//Am ales sa afisez urmatoatele valori:

console.log(diffnum(8)); // mai mic decat 19
console.log(diffnum(19)); // egal cu 19
console.log(diffnum(31)); // mai mare ca 19
