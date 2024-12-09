export class LLNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size ===0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){ // constant o(1)
        const node = new LLNode(value)
        if(!this.isEmpty()){
            node.next = this.head;   
        }
        this.head = node
        this.size++;
    }

    append(value){ // linear o(n) without tail pointer, with tail can be o(1)
        const node = new LLNode(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size ++;
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


const ll = new LinkedList()
console.log(ll.searchValue("insertedd"))

ll.prepend(1)
ll.prepend(3)
ll.prepend(21)
ll.prepend(5)
ll.prepend(4)
ll.prepend(3)
ll.append("right")
ll.prepend('left')
ll.insert('inserted',8)
ll.print()
// console.log(ll.removeFromIndex(9))
// ll.print()
ll.removeValue("right")
ll.print()
console.log(ll.reverseList())
ll.print()

// const node = new Node(5)
