class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removeNode() {
    if (!this.head) return;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
  }

  display() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements.join(' -> ');
  }
}

const linkedList = new LinkedList();
const addNodeButton = document.getElementById('addNode');
const removeNodeButton = document.getElementById('removeNode');
const linkedListElement = document.getElementById('linkedList');

addNodeButton.addEventListener('click', () => {
  linkedList.addNode(Math.floor(Math.random() * 100));
  linkedListElement.innerHTML = linkedList.display();
});

removeNodeButton.addEventListener('click', () => {
  linkedList.removeNode();
  linkedListElement.innerHTML = linkedList.display();
});

linkedListElement.innerHTML = linkedList.display();