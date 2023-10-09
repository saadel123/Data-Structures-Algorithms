const str = "Hello World i'm saad";

function reverse(string) {
  let reversedWord = ""; //O(1)
  for (let index = string.length - 1; index >= 0; index--) {
    // console.log(index)
    reversedWord += string[index] + " ";
  }
  console.log(reversedWord); // Output: "saad i'm World Hello"
}

reverse(str);
