// DECISION MAKING EXERCISE
// 1a
/*
let randomNum = Math. floor((Math.random()*5));
randomNum++;
console.log(randomNum);
*/
// OR
/*
let randomNum = Math.floor((Math.random()*5)+1);
console.log(randomNum);
*/
// OR 
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// 1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum === 3 || randomNum === 2) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c

if (randomNum !== 3) {
    console.log("Not equal to 3");
}

// 1d
if (randomNum !==3 && randomNum !== 5){
    console.log("NOT equal to 3 AND not equal to 5");
}

// OR 
if (randomNum !== 3 && 5){
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum === 2 || randomNum === 4) {
    console.log("Equal to 2 or equal to 4");
}

// BONUS
// 2