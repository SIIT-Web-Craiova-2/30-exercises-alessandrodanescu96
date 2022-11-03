function remove_character(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}

console.log(remove_character("Alessandro", 0)); //se va afisa lessandro - fara A care este prima litera, adica 0
console.log(remove_character("Alessandro", 3)); //se va afisa Alesandro - fara primul s care este a 4 litera, adica 3
console.log(remove_character("Alessandro", 5)); //se va afisa Alessndro - fara a care este a 6-a literna, adica 5
