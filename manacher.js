function manacher (str) {
  var T = preProcess(str);
  var P =  new Array(T.length).fill(0);
  var C = 0;
  var R = 0;

  for (var i = 0; i < T.length - 1; i++) {
    var mirr = 2 * C - i;

    if (i < R) {
      P[i] = Math.min(R - i, P[mirr]);
    }

    while (T[i + (1 + P[i])] == T[i - (1 + P[i])]) {
      P[i]++;

      if (i + P[i] > R) {
        C = i;
        R = i + P[i];
      }
    }
  }

  console.log(P);
}

function preProcess (str) {
  str = '^' + str + '$';
  return str.split('').join('#');
}
