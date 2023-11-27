function points(games) {
  let totalPoints = 0;

  const pointsEarned = (score) => {
    const scoreArray = score.split(":");
    let x = parseInt(scoreArray[0]);
    let y = parseInt(scoreArray[1]);

    if (x > y) {
      totalPoints += 3;
    }
    if (x < y) {
      totalPoints += 0;
    }
    if (x === y) {
      totalPoints += 1;
    }
  };
  games.forEach(pointsEarned);
  return totalPoints;
}
