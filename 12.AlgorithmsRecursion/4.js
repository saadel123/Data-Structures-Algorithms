let counter = 0;
function inception() {
  //   debugger;
  console.log(counter);
  if (counter > 3) {
    return "Done!"; // Base case
  }
  counter++;
  return inception(); // Recursive call
}

console.log(inception());

// 1. Base case: Identify the base case (This is crucial to prevent the function from calling itself indefinitely and causing a stack overflow.)

// 2. Recursive case : Indentify the recursive case in this case we define if statment and we return inception() (This is the part that allows the function to break down a larger problem into smaller, more manageable instances.)

// 3. Approach : Get closer and closer and return when needed. Usually we have 2 returns

// When to Use Recursion:
// Recursion is suitable for solving problems that exhibit the following characteristics:

// Divide and Conquer: The problem can be broken down into smaller, similar sub-problems.
// Self-Similarity: The solution to the problem should resemble the solutions to its sub-problems.
// Simplicity: Recursive solutions often result in cleaner and more readable code for problems that naturally exhibit recursive structures.

//ANOTHER EXAMAPLE


//5! = 5*4*3*2*1
// Recursive function to calculate the factorial of a number
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
    }
  }

  // Example usage
  const result = factorial(5); // Calculates 5!
  console.log(result); // Output: 120


