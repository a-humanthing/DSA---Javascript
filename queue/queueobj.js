class Queue {
    constructor (){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(value){
        this.items[this.rear]= value
        this.rear++;
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front ++;
        return item;
    }

    isEmpty(){
       return this.rear === this.front
    }

    peak(){
        return this.items[this.front]
    }

    size(){
        return this.rear- this.front
    }

    print(){
        console.log(this.items)
    }
}

const q = new Queue()

q.enqueue("first")
q.enqueue(2)
q.enqueue(3)
console.log(q.isEmpty())
q.print()
console.log(q.dequeue())
q.print()
console.log(q.size())
console.log(q.peak())