//@ts-check

let isTheSkyBlue
let isTheSunUp

if (isTheSkyBlue) {
    isTheSunUp=false
    // this will run if true
    console.log("the sky is indeed blue")
} else if (!isTheSunUp) 
    {console.log("it must be night and the grass is")
} else {
    // this willrun if false
    console.log("it must be cludy or solar eclipse")
}

console.log(isTheSkyBlue, isTheSunUp)