// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const myObj = {};
    let max = 0;
    let maxChar = '';
    for(let char of str){
        myObj[char]= myObj[char] + 1 || 1;
    }
    console.log(myObj);
    for(let c in myObj){
        if(myObj[c]>max){
            max = myObj[c];
            maxChar = c;
        }
    }
    return maxChar;
}

module.exports = maxChar;
