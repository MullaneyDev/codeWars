# Total amount of points

## Instructions

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

## Solution

~~~text
function points(games) {
  let totalPoints = 0
  const pointsEarned = (score) => {
    const scoreArray = score.split(":")
    let x = parseInt(scoreArray[0])
    let y = parseInt(scoreArray[1])
    if (x>y) {
    totalPoints += 3
    }
    if (x<y) {
      totalPoints += 0
    }
    if (x===y) {
      totalPoints += 1
    }  
  }
games.forEach(pointsEarned)
  return totalPoints
}
~~~

## Breakdown

The first part of the problem was to create a function that would compare integer values and adjust the totalPoints variable dependent on the outcome.
I did this using simple mathematical symbols.
The second problem was to apply these to each of the items in the given array. I chose to use a forEach loop for this.
The final problem was to turn the given string values into integers. For this, I first split the given value by the colon. This then gave me an array of 2 numbers. These however were still strings.
I then parsed those strings into their integer value to enable them to be compared. I then gave the number at position 0 (the first number in a n array) the variable name x and the number at position 1 (the second number) the variable name of y. This allowed for cleaner easier to read code.
