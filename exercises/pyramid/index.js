// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### ' 2*i-1
//       '#####' 2*n-1

function pyramid(n) {
    const midPoint = Math.floor((2*n+1)/2);
    for(row=1; row<=n; row++){
        let stair = '';
        for(col=1; col<=2*n-1; col++){
            if(col-row < midPoint || col-row > midPoint){
                stair += ' ';
            }else{
                stair += '#';
            }
        }
        console.log(stair);
    }
}

module.exports = pyramid;
