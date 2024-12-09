import { DLinkedList } from "../linkedlist/DLinkedList.js";

class LinkedListStack {
    constructor(){
        this.items = new DLinkedList()
    }

    push(value){
        this.items.prepend(value);
    }

    pop(){
        return this.items.removeFromFront()
    }

    print(){
        this.items.print()
    }
}

const stack = new LinkedListStack()
stack.push(5)
stack.push("second")
stack.print()
console.log(stack.pop())
stack.print()