// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 0+1+1+2+3

//For example: fibonacciRecursive(6) should return 8
// 0 1 1 2 3 5

function fibonacciIterative(n) { // O(n-2) = O(n )
  //code here;
  let fabionacci = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    console.log(fabionacci[i - 2]);
    fabionacci.push(fabionacci[i - 2] + fabionacci[i - 1]); // 0 + 1 = 1
  }
  return fabionacci[n];
}
console.log(fibonacciIterative(5));

function fibonacciRecursive(n) { // O((2^n) Exponential- recursive algorithms that solves a problem of size N
  if (n < 2) {
    //because if have one of these indexes 0, 1, 1 will return itself
    return n;
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciRecursive(100));

// The function relies on recursive calls to calculate Fibonacci numbers, and with each increase in n, the number of recursive calls increases significantly.
// This leads to a large number of redundant and repeated calculations.

// For example, when you call fibonacciRecursive(100), the function will make an enormous number of recursive calls, leading to a substantial amount of redundant work.
// The inefficiency of the recursive approach becomes more apparent as n increases.


