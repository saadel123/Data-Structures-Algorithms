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
    /* here we got the refrence of the unwanted node let's assume that we have this list [2,4,6,9] and the index is 2 so the unwanted node will be 6 since we have leader.next;
    and after that we  leader.next = unwantedNode.next; to escape the 6 and move to 9
    */
    this.length--;
    return this.printList();
  }
  //this my method and it's working too  but it's for array not linked list
  // insert(index, value) {
  //   const arrayList = this.printList();
  //   if (index < 0 || index > arrayList.length) {
  //     // Handle invalid index, e.g., throw an error or return append.
  //     return this.append(value);
  //   }
  //   let newArray = [];
  //   for (let i = 0; i < arrayList.length; i++) {
  //     if (i === index) {
  //       newArray.push(value);
  //     }
  //     newArray.push(arrayList[i]);
  //   }
  //   return newArray;
  //   //the above code is equivalnt to this arrayList.splice(index, 0, value);
  // }
  // //this my method and it's working too  but it's for array not linked list
  // remove(index) {
  //   const arrayList = this.printList();
  //   if (index < 0 || index > arrayList.length) {
  //     // Handle invalid index, e.g., throw an error or return append.
  //     return this;
  //   }
  //   let newArray = [];
  //   for (let i = 0; i < arrayList.length; i++) {
  //     newArray.push(arrayList[i]);
  //     if (i === index) {
  //       newArray.pop(index);
  //     }
  //   }
  //   return newArray;
  //   //the above code is equivalnt to this arrayList.splice(index, 0, value);
  // }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.insert(2, 99));
// console.log(myLinkedList.insert(20, 88));
console.log(myLinkedList.remove(0));

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
