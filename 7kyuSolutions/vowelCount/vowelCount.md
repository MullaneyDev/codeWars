# Vowel Count

## Instructions

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

## Solution

~~~text
function getCount(str) {
  const chars = str.split("")
  let count = 0
const vowelCheck = (char) => {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      count += 1
    }
  }
  chars.forEach(vowelCheck)
  return count;
}
~~~

## Breakdown

The first problem I decided to breakdown was the splitting of the string into individual characters that could be checked. I did this using the .split function. Then I added an if statement that would check if the character matched any fo the given vowels. I was originally going to store these in an array and have it checked against each of those but it would use up unnecessary processing power. I then added a variable called count that would be adjusted if the given character matched one fo the vowels.
