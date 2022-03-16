// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1


// use unshift/shift or push/pop
class Stack {
    constructor(){
        this.data = [];
    }
    push(rec){
        this.data.push(rec);
    }
    peek(){
        return this.data[this.data.length-1];
    }
    pop(){
        return this.data.pop();
    }
}

// class Stack {
//     constructor(){
//         this.data = [];
//     }
//     push(rec){
//         this.data.unshift(rec);
//     }
//     peek(){
//         return this.data[0];
//     }
//     pop(){
//         if(this.peek()){
//             return this.data.shift();
//         }
//     }
// }

module.exports = Stack;
