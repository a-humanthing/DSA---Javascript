class TNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
        this.size =0;
    }

    isEmpty(){
        return this.root==null;
    }

    getSize(){
        return this.size;
    }

    insertNewNode(newNode, parent){
        if(newNode.value<parent.value){
            if(!parent.left){
                parent.left = newNode;
            }else{
                this.insertNewNode(newNode,parent.left)
            }
        }else{
            if(!parent.right){
                parent.right = newNode;
            }else{
                this.insertNewNode(newNode,parent.right)
            }
        }

    }

    insert(value){
        const newNode = new TNode(value)
        let parent = this.root;
        this.size++;
        if(this.isEmpty()){
            this.root = newNode
            return
        }else{
            this.insertNewNode(newNode,parent)
        }
       
        // while(true){
        //     if(value < parent.value){
        //         if(!parent.left){
        //             parent.left = newNode;
        //         }

        //         parent = parent.left
        //         return
        //     }else{
        //         if(!parent.right){
        //             parent.right = newNode;
        //         }
        //         parent = parent.right;
        //         return
        //     }
        // }
    }

    searchNode(value,parent){
        if(!parent) return false;
        if(value==parent.value) return true;
        if(value<parent.value){
            return this.searchNode(value,parent.left)
        }else{
            return this.searchNode(value,parent.right)
        }
    }

    search(value){
        const root = this.root;
        if(this.isEmpty()){
            return false
        }else{
            return this.searchNode(value,root)
        }
    }

    preOrder(parent){
        if(parent){
            console.log(parent.value)
            this.preOrder(parent.left)
            this.preOrder(parent.right)
        }
    }

    inOrder(parent){
        if(parent){
            this.inOrder(parent.left)
            console.log(parent.value)
            this.inOrder(parent.right)
        }
    }

    postOrder(paret){
        if(paret){
            this.postOrder(paret.left)
            this.postOrder(paret.right)
            console.log(paret.value)
        }
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            const curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(parent){
        while(parent.left){
            parent = parent.left
        }
        return parent.value;
    }

    max(parent){
       if(!parent.right){
           return parent.value
    }else{
        return this.max(parent.right)
       }
    }

    deleteNode(parent,value){

        if(value<parent.value){
            parent.left = this.deleteNode(parent.left,value)
        }else if(value>parent.value){
            parent.right = this.deleteNode(parent.right,value)
        }else{
            if(!parent.left && !parent.right){
                return null;
            }

            if(!parent.left){
                return parent.right
            }else if(!parent.right){
                return parent.left
            }

            parent.value = this.min(parent.right)
            parent.right = this.deleteNode(parent.right,parent.value)
        }
        return parent;
       
    }

    // delete(value){
    //     if(this.isEmpty()){
    //         console.log("Tree is empty")
    //         return;
    //     }
    //     let parent = this.root;
    //     parent = this.deleteNode(parent,value)
    // }

    delete(value) {
        if (this.isEmpty()) {
            console.log("Tree is empty");
            return;
        }
        this.root = this.deleteNode(this.root, value);
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)
console.log(bst.isEmpty())
console.log(bst.getSize())
console.log(bst.search("arun"))
console.log("preorder")
bst.preOrder(bst.root)
console.log("inorder")
bst.inOrder(bst.root)
console.log("postorder")
bst.postOrder(bst.root)
console.log("LevelOrder")
bst.levelOrder()

bst.delete(5)
console.log("min=",bst.min(bst.root))
bst.levelOrder()
console.log("max=",bst.max(bst.root))