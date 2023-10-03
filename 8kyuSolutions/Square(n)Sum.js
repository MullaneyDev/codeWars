function squareSum(numbers) {
  let answerArray = [];
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i]; // not used - should replace numbers[i] in line 6
    let answer = numbers[i] * numbers[i];
    answerArray.push(answer);
  }
  for (let i = 0; i < answerArray.length; i++) {
    total += answerArray[i];
  }
  return total;
}
