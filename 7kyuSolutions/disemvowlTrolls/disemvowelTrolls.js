function disemvowel(str) {
  let chars = str.split("");
  const vowelCheck = (char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      return "";
    }
    return char;
  };
  chars = chars.map(vowelCheck);
  return chars.join("");
}
