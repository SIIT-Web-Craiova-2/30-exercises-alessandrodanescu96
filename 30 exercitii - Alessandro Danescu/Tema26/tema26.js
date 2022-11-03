function string(str) {
  if (str.length >= 3) {
    str_len = 3;

    back = str.substring(str.length - 3);
    return back + str + back;
  } else return false;
}
console.log(string("abc"));
console.log(string("ab"));
console.log(string("abcd"));
