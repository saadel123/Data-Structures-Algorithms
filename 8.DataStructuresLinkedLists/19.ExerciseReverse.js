class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
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
    };
    const leader = this.traverseToIndex(index - 1);
    /* we want to grab the refrence to the leader and insert within it let's assume that the index = 2 and value = 7 here's the list [2,4,6,9] by doing  index-1
      This means the index will save the leader as 4 and add next to 4 the value = 7 and the list will be [2,4,7,6,9]
      we wanna achieve something like this :
      *   *
       \ /
        *
      */
    const holdingPointer = leader.next; //we wanna get the next value after leader and save it to this variable (this like a pointer that save the variable)
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
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
  remove(index) {
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      // If there's only one element (head), there's nothing to reverse
      return this.head;
    }
    //let's assume that we have this list that we want to revese [1,10,16,88]
    let first = this.head; // Initialize 'first' as the head (1)
    this.tail = this.head;
    let second = first.next; // 'second' becomes the node after 'first' (10)
    while (second) {
      const temp = second.next; // 'temp' holds the next node (16)
      console.log(temp);
      second.next = first; // Reverse the 'next' pointer, so 'second' points to 'first' this equals to (1)
      console.log(second.next);
      first = second; // Move 'first' to the current 'second' 1 ghatweli 10
      console.log(first);
      second = temp; // Move 'second' to 'temp', which is the next node 10 ghatweli 16
      console.log(second);
      console.log("***********");
    }
    this.head.next = null; // Make sure the original head points to null
    this.head = first; // Update the head to the last node (88), which is now the new head

    return this.printList(); // Return the reversed linked list with the new head
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(88);
myLinkedList.prepend(1);
// console.log(myLinkedList.insert(2, 99));
// console.log(myLinkedList.insert(20, 88));
myLinkedList.reverse();
console.log(myLinkedList.printList());

// console.log("LinkedList: ");
// let current = myLinkedList.head;
// while(current) {
//   console.log(`Node: {
//     value: ${current.value},
//     next: {
//       value: ${current.next ? current.next.value : "null"}
//     }
//   }`);

//   current = current.next;
// }
