// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  debugger;
  if (number == 0 || number == 1) {
    return 1;
  }
  //or we can use this code
  // if (number == 2) {
  //   return 2;
  // }
  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));

// 0 1  2 3 4
// 1  2 3 4 5
function findFactorialIterative(number) {
  let answer = 1; // Initialize answer to 1 as it's the identity element for multiplication
  if (number === 2) {
    return (answer = 2); // Because factorial of 2 is 2*1 =2 so there's no need to use a loop
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i; // Multiply the current answer by the loop variable i
  }
  return answer;
}

console.log(findFactorialIterative(1));
