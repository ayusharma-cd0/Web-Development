var age = 10;

console.log(age);

var name = "Ayush";
console.log(name);

let num = 22;
console.log(num);

if (true) {
  num = num + 1;
}
console.log(num);

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.push(6);
console.log(arr);

if ((age = 10)) {
  let num1 = 20;
  console.log(num1);
}

// console.log(num1); It gives Error Because Let Is Block Scope.

const person = {
  name: "Ayush",
};

person.email = "cc.ayusharma@gmail.com";

console.log(person);
