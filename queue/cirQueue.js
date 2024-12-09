class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
    this.currentLength = 0;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(value) {
    if (!this.isFull()) {
     this.rear = (this.rear +1 )%this.capacity;
      this.items[this.rear] = value;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.currentLength) {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.currentLength = this.currentLength -1;
      this.front = (this.front + 1) % this.capacity;
      if (this.isEmpty()) {
        this.front = -1;
      }
      return item;
    }
    return null;
  }

  peak(){
    if(!this.isEmpty()){
        return this.items[this.front]
    }
    return null;
  }

  print(){
    if(!this.isEmpty()){
        let str = '';
        let i = this.front;
       while(i!==this.rear){
            str += this.items[i]
            i = (i+1)%this.capacity;
       }
       str += this.items[i]
       console.log(str)
    }else{
        console.log("Queue is empty.")
    }
  }
}


const cQ = new CircularQueue(5)

console.log(cQ.isEmpty())
console.log(cQ.isFull())
cQ.enqueue(5)
cQ.enqueue(4)
cQ.enqueue(3)
cQ.enqueue(2)
cQ.enqueue(1)
console.log(cQ.peak())
console.log(cQ.dequeue())
cQ.print()
