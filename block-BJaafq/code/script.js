function addTwoNumber(numA,numB){
    return numA+numB;
}

let result, expected;
function test (message,cb){
    try{
        cb();
        console.log("✅", message)
    }catch(error){
console.error(error);
console.log("❌",   message)
    }
}
function testAdd(){
    result= addTwoNumber (2,4);
    expected = 6;
    if (result !== expected){
    throw new Error(`${result}is not equal to ${expected}`)
    }
}
test('adding 2,and 4',testAdd);

function testOdd(){
    result= addTwoNumber (2,4);
    expected = 5;
    if (result !== expected){
    throw new Error(`${result}is not equal to ${expected}`)
    }
}
test('adding 2,and 4',testOdd);

function testString(){
    result= addTwoNumber (2,4);
    expected = 'string';
    if (typeof result !== expected){
    throw new Error(`${result}is not equal to ${expected}`)
    }
}
test('adding 2,and 4',testString);

function testName(){
    result= addTwoNumber (6,4);
    expected = "Abhishek";
    if (result !== expected){
    throw new Error(`${result}is not equal to ${expected}`)
    }
}
test('adding 2,and 4',testName);


function multiplyTwoNumber(numA,numB){
    return numA*numB
}

function testMul(){
    result= multiplyTwoNumber (6,6);
    expected =36;
    if (result !==expected){
        throw new Error(`${result}is not equal to ${expected}`)
    }
}

test('multiply 5,and 5',testMul);

function testMulOdd(){
    result= multiplyTwoNumber (5,7);
    expected =25;
    if (result !==expected){
        throw new Error(`${result}is not equal to ${expected}`)
    }
}

test('multiply 5,and 7',testMulOdd);

function testMulEven(){
    result= multiplyTwoNumber (6,8);
    expected =25;
    if (result !==expected){
        throw new Error(`${result}is not equal to ${expected}`)
    }
}

test('multiply 6,and 8',testMulEven);

function testMulEvens(){
    result= multiplyTwoNumber (6,8);
    expected =48;
    if (result !==expected){
        throw new Error(`${result}is not equal to ${expected}`)
    }
}

test('multiply 6,and 8',testMulEvens);