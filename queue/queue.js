class Queue {
    constructor (){
        this.items = []
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return Boolean(!this.items.length)
    }

    peak(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
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