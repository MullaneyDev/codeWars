function descendingOrder(n) {
  let digits = n.toString().split("");
  digits.sort(function (a, b) {
    return b - a;
  });
  return Number(digits.join(""));
}
