function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

// first test for fail

let result = fullName("ROhit", "Bhatt");
let expected = "RohitBhatt"
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}
// output of 1st test is   Abhishek Bhatt is not equal to AbhishekBhatt


//   2nd test for pass

let result1 = fullName("Rohit", "Bhatt");
let expected1 = "RohitBhatt"
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}


function calculateTotalAmount(amount, taxRate) {
    return amount + (amount * texRate)
}
// ameans amount and t means taxAmount
// test for fail
let result2 = calculateTotalAmount(30, 20);
let expected2 = 600
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}
// output is   630 is not equal to 600

// 2nd test for pass
let result3 = calculateTotalAmount(30, 20);
let expected3 = 630
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}
