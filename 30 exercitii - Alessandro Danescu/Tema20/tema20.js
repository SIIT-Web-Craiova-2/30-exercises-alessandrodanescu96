function PositiveandNegative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
console.log(PositiveandNegative(4, 4)); //False - nu se respecta conditiile date (4<0 fals si 4<0 fals)
console.log(PositiveandNegative(-3, 3)); //True - se respecta prima conditie, nu se mai verifica a 2-a, pentru ca e indicatorul sau ||
console.log(PositiveandNegative(6, -6)); //True - se respecta a 2-a conditie
console.log(PositiveandNegative(-1, -1)); //False - nu se respecta conditiile date (-1>0 fals si -1>0 fals)
