
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


const randomNamesArray = ["Harry","Ross","Bruce","Cook","Carolyn","Morgan","Albert","Walker","Randy","Reed","Larry","Barnes","Lois","Wilson","Jesse","Campbell","Ernest","Rogers","Theresa","Patterson","Henry","Simmons","Michelle","Perry","Frank","Butler","Shirley"]
let randomName = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];

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

    describe("Edge Cases", function (){
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

    describe("Edge Cases", function (){
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

    describe("Edge Cases", function (){
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

    describe("Edge Cases", function (){
        beforeAll(function (){
            randomizeAll();
        })
        it(`should return NaN when passed an empty string`, function () {
            expect(plusTwo(emptyString)).toBeNaN();
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