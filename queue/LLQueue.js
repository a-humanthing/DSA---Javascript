import {LinkedList} from '../linkedlist/LinkedList.js'
class LinkedListQueue {
    constructor(){
        this.items = new LinkedList()
    }

    enqueue(value){
        this.items.append(value)
    }

    dequeue(){
        const removedValue = this.items.removeFromFront()
        return removedValue
    }

    print(){
            this.items.print()
    }

    size(){
        return this.items.getSize()
    }

    front(){
        return this.items.head.value;
    }

    isEmpty(){
        return this.items.isEmpty()
    }
}

const queue = new LinkedListQueue()
queue.enqueue(30)
queue.enqueue("av")
queue.print()
console.log("Deleted: ",queue.dequeue())
queue.print()
queue.enqueue("2")
queue.enqueue(3)
queue.print()
console.log("size: ",queue.size())
console.log("Deleted: ",queue.dequeue())
console.log("size: ",queue.size())
queue.print()
console.log("Front: ",queue.front())
