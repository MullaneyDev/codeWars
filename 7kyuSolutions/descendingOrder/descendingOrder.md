# Descending Order

## Instructions

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

## Solution

~~~text
function descendingOrder(n) {
  let digits = n.toString().split("");
  digits.sort(function (a, b) {
    return b - a;
  });
  return Number(digits.join(""));
}
~~~

## Breakdown

The first part of the challenge required me to break the given integer into a string so I could split it into individual digits. The next thing I did was to sort these into descending order using a comparative function. When I then first submitted this challenge, I realised that I was not returning the result as an integer and it was instead a string. To correct this, I used the Number() function built into Javascript to convert the string into an integer value.
