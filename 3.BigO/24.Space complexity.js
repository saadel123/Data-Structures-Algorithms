//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

// Even as n grows very large, each iteration of the loop will still take the same constant amount of time.
// Therefore, the overall runtime is directly proportional to the number of loop iterations n. But since the basic
// operation has constant time, we ignore constants and say the function has O(1) time complexity.

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6);
// o(n);
