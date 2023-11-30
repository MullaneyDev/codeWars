# Leap Years

## Instructions

In this kata you should simply determine, whether a given year is a leap year or not.

In case you don't know the rules, here they are:

Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.

Tested years are in range 1600 ≤ year ≤ 4000.

## Solution

~~~text
function isLeapYear(year) {  
  if (year %4 == 0 && year%400 ===0 && year%100 === 0) {
    return true
  }
if ((year%4 === 0 && year%100 != 0) || (year%400 === 0 && year%100 != 0)) {
    return true
  }
return false
}
~~~

## Breakdown

To solve this challenge, I decided upon using an if statement that would check if the given year was either divisible by 4 but not 100 or  divisible by 400.

This then returned a boolean value of true if it passed the checks and false if it did not.

Upon testing, I found that there was an error with a small number of years. Those that are divisible by 4, 100 and 400 such as 2000. To address this I added an extra if statement that checked if a number was divisible by all three that would return a boolean value of true.
