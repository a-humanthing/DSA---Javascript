class LLNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

 export class DLinkedList {
    constructor (){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size ===0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new LLNode(value)

            if(!this.head && !this.tail){
                this.head = node;
                this.tail = node
            }else{
                node.next = this.head;
                this.head = node;
            }
            this.size++;
            return;
        }

    append(value){  // add item with the tail;
        const node = new LLNode(value);
        if(!this.head&&!this.tail){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node
        }
        this.size ++;
        return;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let str = ""
            let curr = this.head;
            while(curr!=null){
                str = str+ `${curr.value} -> `;
                curr = curr.next;
            }
            console.log(str)
        }
    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log("List is empty")
            return;
        }else{
           const removed = this.head.value;
           this.head = this.head.next;
           this.size--;
           return removed;  
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log("List is empty")
            return;
        }else if(this.size===1){
            const removed = this.tail;
            this.head = null;
            this.tail = null;
            this.size--;
            return removed;
        }
        else{
            const removed = this.tail.value;
            let prev = this.head;
            while(prev.next!==this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev
            this.size--;
            return removed;
        }
    }

    insert(value,index){
        const node = new LLNode(value)
        if(index < 0 || index > this.getSize()){
            console.log("Invalid index")
            return;
        }else if(index==0){
            this.prepend(value);
        }else{
            let i =0;
            let prev = this.head
            while(prev.next){
                i++;
                if(i==index){
                   let temp = prev.next
                   prev.next = node
                   node.next = temp
                   this.size++;
                   return;
                }
                prev = prev.next
            }
            this.size++;
            prev.next = node
        }
    }

    removeFromIndex(index){
        let removedNode;
        if(this.isEmpty()){
            console.log("List is empty")
            return
        }
        else if(index<0||index>=this.getSize()){
            console.log("Invalid Index")
            return
        }else if(index===0){
            removedNode = this.head
            this.head = this.head.next
            this.size--;
        }
        else{
            let curr = this.head;
            for(let i =0;i<index-1;i++){
                curr = curr.next
            }
            removedNode = curr.next
            curr.next = removedNode.next
            this.size--; 
        }

        return removedNode.value;
    }

    removeValue(value){
        let removedNode;
        if(this.isEmpty()){
            console.log("List is empty")
            return
        }else if(this.head.value===value){
            removedNode = this.head;
            this.head = removedNode.next;
            this.size--;
            console.log('removed-',value);
            return
        }else{
            let prev = this.head
            while(prev.next && prev.next.value!==value){  
                prev = prev.next;
            }
            if(prev.next){
                removedNode = prev.next
                prev.next = removedNode.next
                this.size--;
                console.log('removed-',removedNode.value);
                return
            }
            
            console.log('Not found')
            return 
        }
    }

    searchValue(value){
        if(this.isEmpty()){
            return "List is empty";
        }else {
            let current = this.head;
            let i = 0;
            while(current){
                if(current.value === value){
                    return `Fount at index:${i}`;
                }
                i++;
                current = current.next;
            }
            return "Not found"
        }
    }

    reverseList(){
        if(this.isEmpty()){
            return "List is empty"
        }else if(!this.head.next){
            return "Only one item in list"
        }else{
            let current = this.head;
            let prev = null;
            while(current){
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next
                // this.head = next
            }
            this.head = prev;
            return "reversed"
        }
    }

}


// const dll = new DLinkedList()
// dll.append(3)
// dll.append(6)
// dll.prepend(10)
// dll.prepend(888)
// dll.print()