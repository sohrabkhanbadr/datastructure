class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (!this.items.length) return;
    return this.items.pop();
  }

  display() {
    return this.items.join(' -> ');
  }
}

const stack = new Stack();
const pushButton = document.getElementById('push');
const popButton = document.getElementById('pop');
const stackElement = document.getElementById('stack');

pushButton.addEventListener('click', () => {
  stack.push(Math.floor(Math.random() * 100));
  stackElement.innerHTML = stack.display();
});

popButton.addEventListener('click', () => {
  stack.pop();
  stackElement.innerHTML = stack.display();
});

stackElement.innerHTML = stack.display();