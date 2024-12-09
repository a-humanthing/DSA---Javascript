import { LinkedList } from "../linkedlist/LinkedList.js";

class LinkedListStack {
    constructor(){
        this.items = new LinkedList()
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

    getSize(){
        return this.items.getSize();
    }

    peak(){
        return this.items.head.value;
    }
}

const stack = new LinkedListStack()
stack.push(5)
stack.push("second")
stack.print()
console.log(stack.pop())
stack.push(7)
console.log(stack.peak())
stack.print()