# Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

## Solution

~~~text
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
~~~

## Breakdown

The first problem I decided to target was to split the string into individual characters that could be checked.

I encountered a problem with my first solution where I used the forEach method to loop through my chars array. This meant that it wasn't able to replace any values and therefore wouldn't meet the given criteria. I changed this to the .map method so that any vowels could be replaced with an empty string value.

Upon testing, I encountered a further problem. When performing the vowelCheck function, It was only checking for lower case vowels. In order for the function to perform as necessary I added extra parameters that checked for uppercase vowels as well.

The final part of the problem was to join the chars array back together, with the vowels now removed, into a string. This was achieved through the .join("") method.
