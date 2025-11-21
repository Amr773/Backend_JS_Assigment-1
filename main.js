//Question #1

let x1 = "123";
let y1 = Number(x1) + 7;
console.log("Question #1 Answer: " + y1);

//Question #2

let x2 = false;
if (!x2) {
  console.log("Question #2 Answer: Invalid");
} else {
  console.log("Question #2 Answer: Valid");
}

//Question #3

let x3 = [];
for (let i = 1; i < 11; i++) {
  if (i % 2 == 1) {
    continue;
  } else {
    x3.push(i);
  }
}
console.log("Question #3 Answer: " + x3);

//Question #4

let x4 = [1, 2, 3, 4, 5];
let evenArray = x4.filter((n) => n % 2 == 0);
console.log("Question #4 Answer: " + evenArray);

//Question #5

let x5 = [1, 2, 3];
let y5 = [4, 5, 6];
let sum5 = [...x5, ...y5];
console.log("Question #5 Answer: " + sum5);

//Question #6

let x6 = 8;
switch (x6) {
  case 1:
    console.log("Question #5 Answer: Sunday");
    break;
  case 2:
    console.log("Question #5 Answer: Monday");
    break;
  case 3:
    console.log("Question #5 Answer: Tuesday");
    break;
  case 4:
    console.log("Question #5 Answer: Wednesday");
    break;
  case 5:
    console.log("Question #5 Answer: Thursday");
    break;
  case 6:
    console.log("Question #5 Answer: Friday");
    break;
  case 7:
    console.log("Question #5 Answer: Saturday");
    break;
  default:
    console.log("Question #5 Answer: Please enter a number between 1 to 7");
}

//Question #7

let x7 = ["a", "ab", "abc"];
let y7 = x7.map((n) => n.length);
console.log("Question #7 Answer: " + y7);

//Question #8

let x8 = 30;
if (x8 % 3 == 0 && x8 % 5 == 0) {
  console.log("Question #8 Answer: Divisible by both");
} else {
  console.log("Question #8 Answer: Indivisible by both");
}

//Question #9

let power = (x9) => {
  return x9 ** 2;
};
console.log("Question #9 Answer: " + power(5));

//Question #10

const person = { name: "Amr", age: 26 };
function destruct(obj) {
  let { name, age } = obj;

  console.log("Question #10 Answer: " + `${name} is ${age} years old`);
}
destruct(person);

//Question #11

function sum(...nums) {
  return nums.reduce((total, n) => total + n);
}

console.log("Question #11 Answer: " + sum(1, 2, 3, 4, 5));

//Question #12
function success() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Question #12 Answer: Success");
      reject("Question #12 Answer: Falied to Load the Message");
    }, 3000);
  });
}

success()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//Question #13

let x13 = [1, 3, 7, 2, 5];

function largeNum(numArray) {
  return Math.max(...numArray);
}

console.log("Question #13 Answer: " + largeNum(x13));

//Question #14

let x14 = { name: "John", age: 30 };

console.log("Question #14 Answer: " + Object.keys(x14));

//Question #15

let x15 = "The quick brown fox";
console.log("Question #15 Answer: " + x15.split(" "));
