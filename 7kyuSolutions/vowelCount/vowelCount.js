function getCount(str) {
  const chars = str.split("");
  let count = 0;
  const vowelCheck = (char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count += 1;
    }
  };
  chars.forEach(vowelCheck);
  return count;
}
