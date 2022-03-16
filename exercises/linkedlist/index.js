// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let count = 0;
        let node = this.head;
        while(node){
            count ++;
            node = node.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(this.head === null){
            return null;
        } 
        let last = this.head;
        while(last.next !== null){
            last = last.next;
        }
        return last;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    // insertLast(data){
    //     let node = new Node(data);
    //     if(!this.head){
    //         this.head = node;
    //         return;
    //     }
    //     this.getLast().next = node;
    // }

    insertLast(data){
        const last = this.getLast();
        if(last){
            last.next = new Node(data);
        } else{
            this.head = new Node(data);
        }
    }

    getAt(n){
        let node = this.head;
        let count = 0;
        while(node){
            if(count == n){
                return node;
            }
            node = node.next;
            count ++ ;
        }
        return null;
    }

    removeAt(n){
        if(!this.head){
            return null;
        }
        if(n==0){
            this.head = this.head.next;
        }
        let previous = this.head;
        let node = this.head.next;
        let count = 1;
        while(node){
            if(count == n){
                previous.next = node.next;
                return;
            }
            previous = previous.next;
            node = node.next;
            count++;
        }
        return null
    }
}

module.exports = { Node, LinkedList };
