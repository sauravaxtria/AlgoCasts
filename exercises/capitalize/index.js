// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let sentence = str[0].toUpperCase();
    for(let i=1; i<str.length; i++){
        if(str[i-1] == " "){
            sentence += str[i].toUpperCase();
        } else{
            sentence += str[i];
        }
    }
    return sentence;
}

// function capitalize(str) {
//     const words = [];
//     for(let word of str.split(' ')){
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }

// function capitalize(str) {
//     const arr = [];
//     for(let s of str.split(" ")){
//         let wordArr = s.split("");
//         wordArr[0] = wordArr[0].toUpperCase()
//         arr.push(wordArr.join(""));
//     }
//     return arr.join(" ");
// }

module.exports = capitalize;




