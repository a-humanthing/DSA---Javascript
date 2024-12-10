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
}

const bst = new BST()
bst.insert(2)
bst.insert(5)
bst.insert(1)
console.log(bst.isEmpty())
console.log(bst.getSize())
console.log(bst.search("arun"))
console.log("preorder")
bst.preOrder(bst.root)
console.log("inorder")
bst.inOrder(bst.root)
console.log("postorder")
bst.postOrder(bst.root)