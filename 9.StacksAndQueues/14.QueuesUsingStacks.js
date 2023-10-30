class QueueWithStacks {
    constructor() {
      this.inbox = [];
      this.outbox = [];
    }

    // Enqueue operation, equivalent to "push" in a stack
    enqueue(value) {
      this.inbox.push(value);
    }

    // Dequeue operation, equivalent to removing elements from the front of the queue
    dequeue() {
      if (this.outbox.length === 0) {
        if (this.inbox.length === 0) {
          return undefined; // Queue is empty
        }

        // Transfer elements from inbox to outbox to reverse their order
        while (this.inbox.length > 0) {
          this.outbox.push(this.inbox.pop());
        }
      }

      return this.outbox.pop();
    }

    // Check if the queue is empty
    isEmpty() {
      return this.inbox.length === 0 && this.outbox.length === 0;
    }

    // Get the size of the queue
    size() {
      return this.inbox.length + this.outbox.length;
    }
  }

  // Example usage:
  const queue = new QueueWithStacks();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  console.log(queue.dequeue()); // Output: 1 (first-in, first-out)
  console.log(queue.dequeue()); // Output: 2
  console.log(queue.isEmpty()); // Output: false
  console.log(queue.size());    // Output: 1
