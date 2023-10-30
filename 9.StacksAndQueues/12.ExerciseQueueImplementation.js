class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return this.first;
    }
    if (this.first === this.top) {
      //this is equals to this.length === 0
      this.first = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
// console.log(myQueue.peek());
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("sqd");

myQueue.dequeue();
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir
