//Log all pairs of array
const nemo = [1, 2, 3, 4, 5];

function calc(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
calc(nemo);
//O(n*n)
//O(n^2)
//Many interview question they ask you to solve this and make it from horrible to good or excellen O(n) or o(1)