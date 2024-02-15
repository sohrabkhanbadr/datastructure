let queue = [];

function enqueue() {
  let value = Math.floor(Math.random() * 10) + 1;
  queue.push(value);
  renderQueue();
}

function dequeue() {
  if (queue.length === 0) {
    alert("Queue is empty!");
    return;
  }
  queue.shift();
  renderQueue();
}

function peek() {
  if (queue.length === 0) {
    alert("Queue is empty!");
    return;
  }
  alert("Front of queue: " + queue[0]);
}

function checkOrder() {
  if (queue.length !== 5) {
    alert("Queue must have 5 elements to check order!");
    return;
  }
  let expectedOrder = [queue[0], queue[1], queue[2], queue[3], queue[4]];
  let actualOrder = [];
  for (let i = 0; i < 5; i++) {
    actualOrder.push(queue.shift());
  }
  if (JSON.stringify(expectedOrder) === JSON.stringify(actualOrder)) {
    alert("Correct order!");
  } else {
    alert("Incorrect order!");
  }
  renderQueue();
}

function renderQueue() {
  document.getElementById("queue").innerHTML = "";
  for (let i = 0; i < queue.length; i++) {
    let div = document.createElement("div");
    div.innerText = queue[i];
    document.getElementById("queue").appendChild(div);
  }
  document.getElementById("result").innerText = "Queue size: " + queue.length;
}