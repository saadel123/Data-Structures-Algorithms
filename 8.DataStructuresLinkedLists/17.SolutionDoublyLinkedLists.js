class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    // newNode.prev = {
    //   value: this.tail.value,
    //   next: this.tail.next,
    //   prev: this.tail.prev,
    // };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    //use a while loop when you need to repeat a task while a condition is true, and you don't know how many iterations are needed.
    //Use a for loop when you want to iterate over a collection or repeat a task for a known number of times.
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    /* we want to grab the refrence to the leader and insert within it let's assume that the index = 2 and value = 7 here's the list [2,4,6,9] by doing  index-1
      This means the index will save the leader as 4 and add next to 4 the value = 7 and the list will be [2,4,7,6,9]
      we wanna achieve something like this :
      *   *      * - *  - *
       \ /
        *
      */

    //[1,10,5,16]
    const leader = this.traverseToIndex(index - 1); //[10]
    const follower = leader.next; //[5]
    leader.next = newNode; //[10 9damha nzido newNode]
    newNode.prev = leader; //[10]
    newNode.next = follower; // [5]
    follower.prev = newNode; // [the follower that it is 5 has a prev value that point to our new node]
    this.length++;
    console.log(this);
    return this.printList();
  }
  remove(index) {
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }
    /*
    let's assume we have this array [1,5,3,4] and we want to remove 3 the index=2
    leader = this.traverseToIndex(index - 1) = leader will stock the pointer of 5 (index=1)
    unwantedNode = leader.next = unwanted will stock the pointer of 3(index=2)
    leader.next = unwantedNode.nex = leader.next will move into 4 (index=2)
     */
    const leader = this.traverseToIndex(index - 1); // index=2 so leader is [5]
    const follower = leader.next; // so fllower is [3]
    leader.next = follower.next;// leader.next[3] will be follower.next[4] here we till the leader to escape 3
    follower.prev = leader;// follower.prev[5] = follower.prev
    this.length--;
    return this.printList();

  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);

console.log(myDoublyLinkedList.insert(1, 99));
//   // console.log(myDoublyLinkedList.insert(20, 88));
  console.log(myDoublyLinkedList.remove(1));

// console.log(myDoublyLinkedList);
// console.log(myDoublyLinkedList.printList());
