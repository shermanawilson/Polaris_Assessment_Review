
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const randomNamesArray = ["Harry","Ross","Bruce","Cook","Carolyn","Morgan","Albert","Walker","Randy","Reed","Larry","Barnes","Lois","Wilson","Jesse","Campbell","Ernest","Rogers","Theresa","Patterson","Henry","Simmons","Michelle","Perry","Frank","Butler","Shirley"]
let randomName = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];

function randomPositiveEvenNumber() {
    var randomNumber = getRandomIntInclusive(1,1000);
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = getRandomIntInclusive(1,1000);
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = getRandomIntInclusive(1,1000);
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = getRandomIntInclusive(1,1000);
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();
let randomPositiveNumericString = getRandomIntInclusive(1,1000).toString();
let randomNegativeNumericString = (getRandomIntInclusive(1,1000) * -1).toString();
let randomNegativeNumber = (getRandomIntInclusive(1,1000) * -1);
let randomPositiveNumber = getRandomIntInclusive(1,1000);
const emptyString = "";
const notANumber = NaN;


function randomizeNumbers(){
    randomPositiveNumericString = getRandomIntInclusive(1,1000).toString();
    randomNegativeNumericString = (getRandomIntInclusive(1,1000) * -1).toString();
    randomNegativeNumber = (getRandomIntInclusive(1,1000) * -1);
    randomPositiveNumber = getRandomIntInclusive(1,1000);
}

function randomizeName(){
    randomName = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];
}

function randomizeAll(){
    randomizeNumbers();
    randomizeName()
}


describe("Declare doingJavaScriptRightNow Function",function (){

    describe("Core Functionality", function (){
        it('should be a declared function', function () {
            expect(doingJavaScriptRightNow).toBeDefined();
        });
        it('should return true when called without an argument.', function () {
            expect(doingJavaScriptRightNow()).toBeTrue();
        });
    })

    describe("Validation", function (){
        it('should return true when called with an argument regardless of argument value.', function () {
            expect(doingJavaScriptRightNow(null)).toBeTrue();
        });
    })
})

describe("Declare onMarsRightNow Function",function (){

    describe("Core Functionality", function (){
        it('should be a declared function', function () {
            expect(onMarsRightNow).toBeDefined();
        });
        it('should return false when called without an argument.', function () {
            expect(onMarsRightNow()).toBeFalse();
        });
    })

    describe("Validation", function (){
        it('should return false regardless if argument is passed', function () {
            expect(onMarsRightNow("Hello")).toBeFalse()
        });
    })
})


describe("Declare sayHello Function",function (){

    describe("Core Functionality", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it('should be a declared function', function () {
            expect(sayHello).toBeDefined();
        });
        it(`should return "Hello, ${randomName}!" when passed argument "${randomName}".`, function () {
            expect(sayHello(randomName)).toBe(`Hello, ${randomName}!`);
        });
        it(`should return "Hello, world!" if argument no argument is passed`, function () {
            expect(sayHello()).toBe("Hello, world!")
        });
    })

    describe("Validation", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it(`should return "Hello, world!" when passed argument undefined`, function () {
            expect(sayHello(undefined)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed argument null`, function () {
            expect(sayHello(null)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed the numeric string "${randomPositiveNumericString}"`, function () {
            expect(sayHello(randomPositiveNumericString)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed the numeric string "${randomNegativeNumericString}"`, function () {
            expect(sayHello(randomNegativeNumericString)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed the number ${randomPositiveNumber}`, function () {
            expect(sayHello(randomPositiveNumber)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed the number ${randomNegativeNumber}`, function () {
            expect(sayHello(randomNegativeNumber)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed an empty string`, function () {
            expect(sayHello(emptyString)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed the boolean true`, function () {
            expect(sayHello(true)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed the boolean false`, function () {
            expect(sayHello(false)).toBe("Hello, world!")
        });
        it(`should return "Hello, world!" when passed ${notANumber}`, function () {
            expect(sayHello(notANumber)).toBe("Hello, world!")
        });
    })
})

describe("Declare plusTwo Function",function (){

    describe("Core Functionality", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it('should be a declared function', function () {
            expect(plusTwo).toBeDefined();
        });
        it(`should return ${randomPositiveNumber + 2} when passed argument ${randomPositiveNumber}`, function () {
            expect(plusTwo(randomPositiveNumber)).toBe(randomPositiveNumber + 2);
        });
        it(`should return ${randomNegativeNumber + 2} when passed argument ${randomNegativeNumber}`, function () {
            expect(plusTwo(randomNegativeNumber)).toBe(randomNegativeNumber + 2);
        });
        it(`should return ${(1 * randomPositiveNumericString) + 2} when passed the positive numeric string "${randomPositiveNumericString}" as an argument`, function () {
            expect(plusTwo(randomPositiveNumericString)).toBe((1 * randomPositiveNumericString) + 2);
        });
        it(`should return ${(1 * randomNegativeNumericString) + 2} when passed the negative numeric string "${randomNegativeNumericString}" as an argument`, function () {
            expect(plusTwo(randomNegativeNumericString)).toBe((1 * randomNegativeNumericString) + 2);
        });
        it(`should return 2 when passed 0 as an argument`, function () {
            expect(plusTwo(0)).toBe(2);
        });
        it(`should return 2 when passed "0" as an argument`, function () {
            expect(plusTwo("0")).toBe(2);
        });
    })

    describe("Validation", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it(`should return NaN when called without passing an argument`, function () {
            expect(plusTwo()).toBeNaN();
        });
        it(`should return NaN when passed an the string "${randomName}"`, function () {
            expect(plusTwo(emptyString)).toBeNaN();
        });
        it(`should return NaN when passed an empty string`, function () {
            expect(plusTwo(emptyString)).toBeNaN();
        });
        it(`should return NaN when passed argument undefined`, function () {
            expect(plusTwo(undefined)).toBeNaN();
        });
        it(`should return NaN when passed argument null`, function () {
            expect(plusTwo(null)).toBeNaN();
        });
        it(`should return NaN when passed an true`, function () {
            expect(plusTwo(true)).toBeNaN();
        });
        it(`should return NaN when passed an false`, function () {
            expect(plusTwo(false)).toBeNaN();
        });
        it(`should return NaN when passed NaN`, function () {
            expect(plusTwo(notANumber)).toBeNaN();
        });
    })
})

describe("Declare addOne Function",function (){

    describe("Core Functionality", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it('should be a declared function', function () {
            expect(addOne).toBeDefined();
        });
        it(`should return ${randomPositiveNumber + 1} when passed argument ${randomPositiveNumber}`, function () {
            expect(addOne(randomPositiveNumber)).toBe(randomPositiveNumber + 1);
        });
        it(`should return ${randomNegativeNumber + 1} when passed argument ${randomNegativeNumber}`, function () {
            expect(addOne(randomNegativeNumber)).toBe(randomNegativeNumber + 1);
        });
        it(`should return ${(1 * randomPositiveNumericString) + 1} when passed the positive numeric string "${randomPositiveNumericString}" as an argument`, function () {
            expect(addOne(randomPositiveNumericString)).toBe((1 * randomPositiveNumericString) + 1);
        });
        it(`should return ${(1 * randomNegativeNumericString) + 1} when passed the negative numeric string "${randomNegativeNumericString}" as an argument`, function () {
            expect(addOne(randomNegativeNumericString)).toBe((1 * randomNegativeNumericString) + 1);
        });
        it(`should return 2 when passed 0 as an argument`, function () {
            expect(addOne(0)).toBe(1);
        });
        it(`should return 2 when passed "0" as an argument`, function () {
            expect(addOne("0")).toBe(1);
        });
    })

    describe("Validation", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it(`should return NaN when called without passing an argument`, function () {
            expect(addOne()).toBeNaN();
        });
        it(`should return NaN when passed an the string "${randomName}"`, function () {
            expect(addOne(emptyString)).toBeNaN();
        });
        it(`should return NaN when passed an empty string`, function () {
            expect(addOne(emptyString)).toBeNaN();
        });
        it(`should return NaN when passed argument undefined`, function () {
            expect(addOne(undefined)).toBeNaN();
        });
        it(`should return NaN when passed argument null`, function () {
            expect(addOne(null)).toBeNaN();
        });
        it(`should return NaN when passed an true`, function () {
            expect(addOne(true)).toBeNaN();
        });
        it(`should return NaN when passed an false`, function () {
            expect(addOne(false)).toBeNaN();
        });
        it(`should return NaN when passed NaN`, function () {
            expect(addOne(notANumber)).toBeNaN();
        });
    })
})

describe("Declare isPositive Function",function (){

    describe("Core Functionality", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it('should be a declared function', function () {
            expect(isPositive).toBeDefined();
        });
        it(`should return true when passed argument ${randomPositiveNumber}`, function () {
            expect(isPositive(randomPositiveNumber)).toBeTrue();
        });
        it(`should return false when passed argument ${randomNegativeNumber}`, function () {
            expect(isPositive(randomNegativeNumber)).toBeFalse();
        });
        it(`should return true when passed the positive numeric string "${randomPositiveNumericString}" as an argument`, function () {
            expect(isPositive(randomPositiveNumericString)).toBeTrue();
        });
        it(`should return false when passed the negative numeric string "${randomNegativeNumericString}" as an argument`, function () {
            expect(isPositive(randomNegativeNumericString)).toBeFalse();
        });
        it(`should return true when passed argument 0.000001`, function () {
            expect(isPositive(0.000001)).toBeTrue();
        });
        it(`should return false when passed argument -0.000001`, function () {
            expect(isPositive(-0.000001)).toBeFalse()
        });
        it(`should return true when passed argument "0.000001"`, function () {
            expect(isPositive("0.000001")).toBeTrue()
        });
        it(`should return false when passed argument "-0.000001"`, function () {
            expect(isPositive("-0.000001")).toBeFalse()
        });
        it('should return true when passed the argument of Infinity', function () {
            expect(isPositive(Infinity)).toBeTrue();
        });
        it('should return false when passed the argument of -Infinity', function () {
            expect(isPositive(-Infinity)).toBeFalse();
        });
        it(`should return false when passed 0 as an argument`, function () {
            expect(isPositive(0)).toBeFalse();
        });
        it(`should return false when passed "0" as an argument`, function () {
            expect(isPositive("0")).toBeFalse();
        });
    })

    describe("Validation", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it(`should return NaN when called without passing an argument`, function () {
            expect(isPositive()).toBeNaN();
        });
        it(`should return NaN when passed an the string "${randomName}"`, function () {
            expect(isPositive(emptyString)).toBeNaN();
        });
        it(`should return NaN when passed an empty string`, function () {
            expect(isPositive(emptyString)).toBeNaN();
        });
        it(`should return NaN when passed argument undefined`, function () {
            expect(isPositive(undefined)).toBeNaN();
        });
        it(`should return NaN when passed argument null`, function () {
            expect(isPositive(null)).toBeNaN();
        });
        it(`should return NaN when passed an true`, function () {
            expect(isPositive(true)).toBeNaN();
        });
        it(`should return NaN when passed an false`, function () {
            expect(isPositive(false)).toBeNaN();
        });
        it(`should return NaN when passed NaN`, function () {
            expect(isPositive(notANumber)).toBeNaN();
        });
    })
})

describe("Declare isNegative Function",function (){

    describe("Core Functionality", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it('should be a declared function', function () {
            expect(isNegative).toBeDefined();
        });
        it(`should return false when passed argument ${randomPositiveNumber}`, function () {
            expect(isNegative(randomPositiveNumber)).toBeFalse();
        });
        it(`should return true when passed argument ${randomNegativeNumber}`, function () {
            expect(isNegative(randomNegativeNumber)).toBeTrue();
        });
        it(`should return false when passed the positive numeric string "${randomPositiveNumericString}" as an argument`, function () {
            expect(isNegative(randomPositiveNumericString)).toBeFalse();
        });
        it(`should return true when passed the negative numeric string "${randomNegativeNumericString}" as an argument`, function () {
            expect(isNegative(randomNegativeNumericString)).toBeTrue();
        });
        it(`should return false when passed argument 0.000001`, function () {
            expect(isNegative(0.000001)).toBeFalse();
        });
        it(`should return true when passed argument -0.000001`, function () {
            expect(isNegative(-0.000001)).toBeTrue();
        });
        it(`should return false when passed argument "0.000001"`, function () {
            expect(isNegative("0.000001")).toBeFalse();
        });
        it(`should return true when passed argument "-0.000001"`, function () {
            expect(isNegative("-0.000001")).toBeTrue();
        });
        it('should return false when passed the argument of Infinity', function () {
            expect(isNegative(Infinity)).toBeFalse();
        });
        it('should return true when passed the argument of -Infinity', function () {
            expect(isNegative(-Infinity)).toBeTrue();
        });
        it(`should return false when passed 0 as an argument`, function () {
            expect(isNegative(0)).toBeFalse();
        });
        it(`should return false when passed "0" as an argument`, function () {
            expect(isNegative("0")).toBeFalse();
        });
    })

    describe("Validation", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it(`should return NaN when called without passing an argument`, function () {
            expect(isNegative()).toBeNaN();
        });
        it(`should return NaN when passed an the string "${randomName}"`, function () {
            expect(isNegative(emptyString)).toBeNaN();
        });
        it(`should return NaN when passed an empty string`, function () {
            expect(isNegative(emptyString)).toBeNaN();
        });
        it(`should return NaN when passed argument undefined`, function () {
            expect(isNegative(undefined)).toBeNaN();
        });
        it(`should return NaN when passed argument null`, function () {
            expect(isNegative(null)).toBeNaN();
        });
        it(`should return NaN when passed an true`, function () {
            expect(isNegative(true)).toBeNaN();
        });
        it(`should return NaN when passed an false`, function () {
            expect(isNegative(false)).toBeNaN();
        });
        it(`should return NaN when passed NaN`, function () {
            expect(isNegative(notANumber)).toBeNaN();
        });
    })
})


describe("Declare isNumeric Function",function (){

    describe("Core Functionality", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it('should be a declared function', function () {
            expect(isNumeric).toBeDefined();
        });
        it(`should return true when passed argument ${randomPositiveNumber}`, function () {
            expect(isNumeric(randomPositiveNumber)).toBeTrue();
        });
        it(`should return true when passed argument ${randomNegativeNumber}`, function () {
            expect(isNumeric(randomNegativeNumber)).toBeTrue();
        });
        it(`should return true when passed the positive numeric string "${randomPositiveNumericString}" as an argument`, function () {
            expect(isNumeric(randomPositiveNumericString)).toBeTrue();
        });
        it(`should return true when passed the negative numeric string "${randomNegativeNumericString}" as an argument`, function () {
            expect(isNumeric(randomNegativeNumericString)).toBeTrue();
        });
        it(`should return true when passed argument 0.000001`, function () {
            expect(isNumeric(0.000001)).toBeTrue();
        });
        it(`should return true when passed argument -0.000001`, function () {
            expect(isNumeric(-0.000001)).toBeTrue();
        });
        it(`should return true when passed argument "0.000001"`, function () {
            expect(isNumeric("0.000001")).toBeTrue();;
        });
        it(`should return true when passed argument "-0.000001"`, function () {
            expect(isNumeric("-0.000001")).toBeTrue();
        });
        it('should return true when passed the argument of Infinity', function () {
            expect(isNumeric(Infinity)).toBeTrue();
        });
        it('should return true when passed the argument of -Infinity', function () {
            expect(isNumeric(-Infinity)).toBeTrue();
        });
        it(`should return true when passed 0 as an argument`, function () {
            expect(isNumeric(0)).toBeTrue();
        });
        it(`should return true when passed "0" as an argument`, function () {
            expect(isNumeric("0")).toBeTrue();
        });
        it(`should return false when called without passing an argument`, function () {
            expect(isNumeric()).toBeFalse()
        });
        it(`should return false when passed an the string "${randomName}"`, function () {
            expect(isNumeric(emptyString)).toBeFalse()
        });
        it(`should return false when passed an empty string`, function () {
            expect(isNumeric(emptyString)).toBeFalse()
        });
        it(`should return false when passed argument undefined`, function () {
            expect(isNumeric(undefined)).toBeFalse()
        });
        it(`should return false when passed argument null`, function () {
            expect(isNumeric(null)).toBeFalse()
        });
        it(`should return false when passed an true`, function () {
            expect(isNumeric(true)).toBeFalse()
        });
        it(`should return false when passed an false`, function () {
            expect(isNumeric(false)).toBeFalse()
        });
        it(`should return false when passed NaN`, function () {
            expect(isNumeric(notANumber)).toBeFalse()
        });
    })

})

describe("Declare isNotNumeric Function",function (){

    describe("Core Functionality", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it('should be a declared function', function () {
            expect(isNotNumeric).toBeDefined();
        });
        it(`should return false when passed argument ${randomPositiveNumber}`, function () {
            expect(isNotNumeric(randomPositiveNumber)).toBeFalse()
        });
        it(`should return false when passed argument ${randomNegativeNumber}`, function () {
            expect(isNotNumeric(randomNegativeNumber)).toBeFalse()
        });
        it(`should return false when passed the positive numeric string "${randomPositiveNumericString}" as an argument`, function () {
            expect(isNotNumeric(randomPositiveNumericString)).toBeFalse()
        });
        it(`should return false when passed the negative numeric string "${randomNegativeNumericString}" as an argument`, function () {
            expect(isNotNumeric(randomNegativeNumericString)).toBeFalse()
        });
        it(`should return false when passed argument 0.000001`, function () {
            expect(isNotNumeric(0.000001)).toBeFalse()
        });
        it(`should return false when passed argument -0.000001`, function () {
            expect(isNotNumeric(-0.000001)).toBeFalse()
        });
        it(`should return false when passed argument "0.000001"`, function () {
            expect(isNotNumeric("0.000001")).toBeFalse()
        });
        it(`should return false when passed argument "-0.000001"`, function () {
            expect(isNotNumeric("-0.000001")).toBeFalse()
        });
        it('should return false when passed the argument of Infinity', function () {
            expect(isNotNumeric(Infinity)).toBeFalse()
        });
        it('should return false when passed the argument of -Infinity', function () {
            expect(isNotNumeric(-Infinity)).toBeFalse()
        });
        it(`should return false when passed 0 as an argument`, function () {
            expect(isNotNumeric(0)).toBeFalse()
        });
        it(`should return false when passed "0" as an argument`, function () {
            expect(isNotNumeric("0")).toBeFalse()
        });
        it(`should return true when called without passing an argument`, function () {
            expect(isNotNumeric()).toBeTrue()
        });
        it(`should return true when passed an the string "${randomName}"`, function () {
            expect(isNotNumeric(emptyString)).toBeTrue()
        });
        it(`should return true when passed an empty string`, function () {
            expect(isNotNumeric(emptyString)).toBeTrue()
        });
        it(`should return true when passed argument undefined`, function () {
            expect(isNotNumeric(undefined)).toBeTrue()
        });
        it(`should return true when passed argument null`, function () {
            expect(isNotNumeric(null)).toBeTrue()
        });
        it(`should return true when passed an true`, function () {
            expect(isNotNumeric(true)).toBeTrue()
        });
        it(`should return true when passed an false`, function () {
            expect(isNotNumeric(false)).toBeTrue()
        });
        it(`should return true when passed NaN`, function () {
            expect(isNotNumeric(notANumber)).toBeTrue()
        });
    })

})

describe("Declare isVowel Function",function (){

    const upperCaseVowelLetters = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
    const lowerCaseNonVowelLetters = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

    let firstUpperCaseNonVowelLetter = upperCaseVowelLetters[Math.floor(Math.random() * upperCaseVowelLetters.length)];
    let secondUpperCaseNonVowelLetter = upperCaseVowelLetters[Math.floor(Math.random() * upperCaseVowelLetters.length)];
    let thirdUpperCaseNonVowelLetter = upperCaseVowelLetters[Math.floor(Math.random() * upperCaseVowelLetters.length)];

    let firstLowerCaseNonVowelLetter = lowerCaseNonVowelLetters[Math.floor(Math.random() * lowerCaseNonVowelLetters.length)];
    let secondLowerCaseNonVowelLetter = lowerCaseNonVowelLetters[Math.floor(Math.random() * lowerCaseNonVowelLetters.length)];
    let thirdLowerCaseNonVowelLetter = lowerCaseNonVowelLetters[Math.floor(Math.random() * lowerCaseNonVowelLetters.length)];


    describe("Core Functionality", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it('should be a declared function', function () {
            expect(isVowel).toBeDefined();
        });
        it(`should return true when passed an the string "a"`, function () {
            expect(isVowel("a")).toBeTrue()
        });
        it(`should return true when passed an the string "A"`, function () {
            expect(isVowel("A")).toBeTrue()
        });
        it(`should return true when passed an the string "e"`, function () {
            expect(isVowel("e")).toBeTrue()
        });
        it(`should return true when passed an the string "E"`, function () {
            expect(isVowel("E")).toBeTrue()
        });
        it(`should return true when passed an the string "i"`, function () {
            expect(isVowel("i")).toBeTrue()
        });
        it(`should return true when passed an the string "I"`, function () {
            expect(isVowel("I")).toBeTrue()
        });
        it(`should return true when passed an the string "o"`, function () {
            expect(isVowel("o")).toBeTrue()
        });
        it(`should return true when passed an the string "O"`, function () {
            expect(isVowel("O")).toBeTrue()
        });
        it(`should return true when passed an the string "u"`, function () {
            expect(isVowel("u")).toBeTrue()
        });
        it(`should return true when passed an the string "U"`, function () {
            expect(isVowel("U")).toBeTrue()
        });
        it(`should return true when passed an the string "U"`, function () {
            expect(isVowel("U")).toBeTrue()
        });
        it(`should return false  when passed an empty string`, function () {
            expect(isVowel(emptyString)).toBeFalse()
        });
        it(`should return false  when passed the string "${firstLowerCaseNonVowelLetter}"`, function () {
            expect(isVowel(firstLowerCaseNonVowelLetter)).toBeFalse()
        });
        it(`should return false  when passed the string "${secondLowerCaseNonVowelLetter}"`, function () {
            expect(isVowel(secondLowerCaseNonVowelLetter)).toBeFalse()
        });
        it(`should return false  when passed the string "${thirdLowerCaseNonVowelLetter}"`, function () {
            expect(isVowel(thirdLowerCaseNonVowelLetter)).toBeFalse()
        });
        it(`should return false  when passed the string "${firstUpperCaseNonVowelLetter}"`, function () {
            expect(isVowel(firstUpperCaseNonVowelLetter)).toBeFalse()
        });
        it(`should return false  when passed the string "${secondUpperCaseNonVowelLetter}"`, function () {
            expect(isVowel(secondUpperCaseNonVowelLetter)).toBeFalse()
        });
        it(`should return false  when passed the string "${thirdUpperCaseNonVowelLetter}"`, function () {
            expect(isVowel(thirdUpperCaseNonVowelLetter)).toBeFalse()
        });
    })

    describe("Validation", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it(`should return false when called without passing an argument`, function () {
            expect(isVowel()).toBeFalse();
        });
        it(`should return false when passed argument ${randomPositiveNumber}`, function () {
            expect(isVowel(randomPositiveNumber)).toBeFalse();
        });
        it(`should return false when passed argument ${randomNegativeNumber}`, function () {
            expect(isVowel(randomNegativeNumber)).toBeFalse();
        });
        it(`should return false when passed the positive numeric string "${randomPositiveNumericString}" as an argument`, function () {
            expect(isVowel(randomPositiveNumericString)).toBeFalse();
        });
        it(`should return false when passed the negative numeric string "${randomNegativeNumericString}" as an argument`, function () {
            expect(isVowel(randomNegativeNumericString)).toBeFalse();
        });
        it(`should return false when passed 0 as an argument`, function () {
            expect(isVowel(0)).toBeFalse();
        });
        it(`should return false when passed "0" as an argument`, function () {
            expect(isVowel("0")).toBeFalse();
        });
        it(`should return false when passed argument undefined`, function () {
            expect(isVowel(undefined)).toBeFalse();
        });
        it(`should return false when passed argument null`, function () {
            expect(isVowel(null)).toBeFalse();
        });
        it(`should return false when passed an true`, function () {
            expect(isVowel(true)).toBeFalse();
        });
        it(`should return false when passed an false`, function () {
            expect(isVowel(false)).toBeFalse();
        });
        it(`should return false when passed NaN`, function () {
            expect(isVowel(notANumber)).toBeFalse();
        });
    })
})