function manacher (str) {
}

function preProcess (str) {
  str = '^' + str + '$';
  return str.split('').join('#');
}
