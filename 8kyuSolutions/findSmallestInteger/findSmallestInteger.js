//Problem
class SmallestIntegerFinder {
  findSmallestInt(args) {}
}

//test data

args = [1234, 543, 43, 234, 654345]
//Solution

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args = Math.min(...args);
    return args
  }
}


//Solution 2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}