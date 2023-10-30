class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }
  peek() {
    return this.array[this.length - 1];
  }
  push(value) {
    this.array.push(value);
    this.length++;
    return this;
  }
  pop() {
    this.array.pop();
    this.length--;
    return this;
  }
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
  }
}

// The bottom code was mine its working but it works for the the last added value to the first lifo concept
// class Stack {
//   constructor() {
//     this.top = [];
//     this.bottom = [];
//     this.length = 0;
//   }
//   peek() {
//     return this.top[0];
//   }
//   push(value) {
//     if (this.length === 0) {
//       this.top.push(value);
//       this.bottom.push(value);
//     } else {
//       this.top.unshift(value);
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     this.top.shift();
//     return this;
//   }
// }

const myStack = new Stack();
myStack.push("first");
myStack.push("second");
myStack.push("third");
myStack.pop();
console.log(myStack.peek());
console.log(myStack);
// myStack.pop();

//Discord
//Udemy
//google
