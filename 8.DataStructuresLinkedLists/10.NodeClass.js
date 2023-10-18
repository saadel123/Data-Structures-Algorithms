class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
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
    let newNode = new NewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    let newNode = new NewNode(value);

    this.head = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(7);
myLinkedList.prepend(5);
myLinkedList.append(8);
myLinkedList.append(99);
myLinkedList.prepend(11);
myLinkedList.prepend(9);
console.log(myLinkedList);
