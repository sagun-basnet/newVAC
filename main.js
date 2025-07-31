// for (let i = 0; i < 10; i++) {
//   console.log("Iteration number: " + i);
// }

// console.log(i);

// function addFun(a, b) {
//   return a + b;
// }

const myFun = (a, b = 0) => a + b;

// const arr = [1, 2, 3, 4, 5];

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

// const [first, second, third, forth] = arr;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(forth);

// const obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// const func = ({ name, age }) => {

// };

// func(obj);

// const { age, city, name } = obj;

// const name = "John";
// const age = 30;
// console.log("My name is " + name + " and I am " + age + " years old.");
// console.log(`My name is ${name} and I am ${age} years old`);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// const newArr = [...arr, ...arr2, 11, 12, 13]; //spread operator

// const [first, second, third, ...res] = arr; //rest operator

// console.log(newArr);

JSON.stringify({ name: "John", age: 30, city: "New York" });
JSON.parse('{"name":"John","age":30,"city":"New York"}');

const myData = [
  {
    id: 1,
    name: "jhon",
    email: "jhon@gmail.com",
  },
  {
    id: 2,
    name: "sita",
    email: "sita@gmail.com",
  },
  {
    id: 3,
    name: "hari",
    email: "hari@gmail.com",
  },
];

myData.map((item, index) => {
  console.log(
    `ID: ${item.id}, Name: ${item.name}, Email: ${item.email} at index ${index}`
  );
});

const obj = {
  name: "Jhon deo",
  address: "Itahari",
  email: "jhon@gmail.com",
  password: "12345678",
};

const { password, ...others } = obj;
console.log(others);



