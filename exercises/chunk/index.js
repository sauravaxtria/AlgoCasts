// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size){
    const arr = [];
    index = 0;
    while(index < array.length){
        arr.push(array.slice(index, index+size));
        index += size;
    }
    return arr;
}

module.exports = chunk;

// MY SOLUTION
// function chunk(array, size) {
//     const arr = [];
//     let a = [];
//     for(let i=0; i<array.length; i++){
//         if(i % size === 0){
//             a = [];
//             arr.push(a);
//         }
//         a.push(array[i]);
//     }
//     return arr;
// }

// function chunk(array, size) {
//     const arr = [];
//     for(let el of array){
//         let last = arr[arr.length - 1];
//         if(!last || last.length == size){
//             arr.push([el])
//         } else {
//             last.push(el)
//         }
//     }
//     return arr;
// }

// MY SOLUTION
// function chunk(array, size) {
//     const arr = [];
//     while(array.length > 0){
//         arr.push(array.splice(0,size));
//     }
//     return arr;
// }