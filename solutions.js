// Write your Solutions here!!
// # 1 - Done
function doingJavaScriptRightNow() {
    return true;
}
// console.log(doingJavaScriptRightNow());
// console.log(doingJavaScriptRightNow(null));

// # 2 - Done
function onMarsRightNow() {
    return false;
}
// # 3 Done
function sayHello(name) {
   // let name ;
    if (typeof name === "string" && name !== "" && isNaN(name)) {
    //if(typeof name == isNaN, typeof name == "number", typeof name == NaN) {
            return "Hello, " + name + "!";
    } else {
        return "Hello, world!";
    }
    // if(typeof name == "string") {
    //     return "Hello, " + name + "!";
     }

console.log(sayHello("Armani"));

// #4
// function plusTwo(number) {
//     if (number !== isNaN) {
//         return (Number(number) + 2);
//     }
//     if (typeof number == "string") {
//         return NaN;
//     }
//
// }
// console.log(plusTwo(""));

// parseInt- if you put in a number or string, it will return integer value, if it cant it'll return NaN
function plusTwo(number) {
    return parseFloat(number) + 2;
}

function anotherNumber(number) {
    result = parseInt(number) + 2;
}
// #5
// function addOne(number) {
//     if(typeof number == "number") {
//         number = (Number(number));
//         return (number + 1);
//     } else {
//         return NaN;
//     }
//
// }

function addOne(number) {
    return parseFloat(number) + 1;
}
// # 6
// function isPositive(number) {
//     if(parseFloat(number) > 0) {
//         return true;
// }
//     if(parseFloat(number) < 0) {
//         let answer = parseFloat(number);
//     return false;
//     } else {
//         return NaN;
//     }
// }

function isPositive(number) {
    let answer = parseFloat(number);
    console.log(number);
    console.log(NaN);
    if (isNaN(answer)) {
        return NaN;
    }
    return (answer > 0);
}
// # 7

function isNegative(number) {
    let answer = parseFloat(number);
    if (isNaN(answer)) {
        return NaN;
    }
    return (answer < 0);
}


// # 8

function isNumeric(number) {
    // if(number !== NaN) {
    //     return true;
    // }
    // if(number == NaN) {
    //     return false;
    // }
    let answer = parseFloat(number);
        return !isNaN(answer);

}


// # 9 ** Useful to know**
function isNotNumeric(number) {
    let answer = parseFloat(number);
    return isNaN(answer);
}
// #10

function isVowel(value) {
    if (typeof value !== "string") {
        return false;
    }
    // if(value.length !== 1) {
    //     return false;
    // }
    value = value.toUpperCase();
    //console.log(value);
    //console.log("");
    switch (value) {
        case "A" :
            return true;
        case "E" :
            return true;
        case "I" :
            return true;
        case "O" :
            return true;
        case "U" :
            return true;
    }
    return false;
}