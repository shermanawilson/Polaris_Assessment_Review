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
// # 3 (Hard)
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

console.log(sayHello("Shelly"));

// #4
function plusTwo(number) {
    if (number !== isNaN) {
        return (Number(number) + 2);
    }
    if (typeof number == "string") {
        return NaN;
    }

}
console.log(plusTwo(""));

// #5
function addOne(number) {
    if(typeof number == "number") {
        number = (Number(number));
        return (number + 1);
    } else {
        return NaN;
    }

}

// # 6
function isPositive(number) {
    if(number > 0) {
        return true;
}
    if(number <= 0) {
    return false;
    } else {
        return NaN;
    }
}


// # 7

function isNegative(number) {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}


// # 8

function isNumeric(number) {
    if(number !== NaN) {
        return true;
    }
    if(number == NaN) {
        return false;
    }
}


// # 9
function isNotNumeric(number) {
    if(number == isNaN ) {
        if (typeof number !== "number") {
            return true;
        }
    } else {
        return false;
    }
}
// #10

function isVowel(string) {
    if ((string == "a") || (string == "e") || (string == "i") || (string == "o") || (string = "u")) {
        return true;
    }
}