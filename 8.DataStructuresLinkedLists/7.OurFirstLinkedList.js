// 10 --> 5 --> 16 let's code a linked list for this numbers
// const LinkedList2 = {
//   Head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      /*setting next to null properly initializes the reference when first creating a single node LinkedList,
      to represent that it is currently the sole node at the start of an empty linked list. nodes are added via methods like append().*/
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    let newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  /* This was my code " wrong" */
  //   append(value) {
  //     let headlist = this.head;
  //     headlist.next = {
  //       value: value,
  //       next: null,
  //     };
  //     this.length++;
  //     // this.head = headlist;
  //     return this.head;
  //     // console.log(this.head);
  //   }

  //   prepend(value) {
  //     this.head = {};
  //     let newNodeFirst = {
  //        value: value,
  //       next: this.tail,
  //     };
  //     this.head = newNodeFirst;
  //     this.tail = newNodeFirst;
  //     this.length++;
  //     console.log("from prepand" + this);
  //     return this;
  //}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(7);
myLinkedList.prepend(5);
myLinkedList.append(8);
myLinkedList.append(99);
myLinkedList.prepend(11);
myLinkedList.prepend(9);
console.log(myLinkedList);

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
