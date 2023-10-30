class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      //!null
      return null;
    }
    if (this.top === this.bottom) {
      //this is equals to this.length === 0
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //this was my method and it's working
  //   pop() {
  //     if (this.length === 0) {
  //       return this;
  //     } else {
  //       this.top = this.top.next;
  //       this.length--;
  //       return this;
  //     }
  //   }
  //isEmpty
}

const myStack = new Stack();
myStack.push("first");
myStack.push("second");
myStack.push("third");
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack);
//Discord
//Udemy
//google
