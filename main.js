// func1

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNames(baho) {
//   return students
//     .map((student) => {
//       let grade;
//       if (student.percent >= 85 && student.percent <= 100) {
//         grade = 5;
//       } else if (student.percent >= 70 && student.percent < 85) {
//         grade = 4;
//       } else if (student.percent >= 60 && student.percent < 70) {
//         grade = 3;
//       } else {
//         grade = 0;
//       }
//       return { ...student, grade };
//     })
//     .filter((student) => student.grade === baho)
//     .map((student) => student.name);
// }

// console.log("5 baho olganlar " + getNames(5));
// console.log("4 baho olganlar " + getNames(4));
// console.log("3 baho olganlar " + getNames(3));

// func2

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// const wordCount = animals.reduce((count, animal) => {
//   count[animal] = (count[animal] || 0) + 1;
//   return count;
// }, {});

// console.log(wordCount);

// func3

// const inputArr = [1, 2, 3, 4, 5];

// const squaredArr = inputArr.map(element => element * element);

// console.log(squaredArr);

// func4

// const inputArr = [1, -4, 12, 0, -3, 29, -150];

// const getNumbers = inputArr
//   .filter((number) => number > 0)
//   .reduce((sum, number) => sum + number, 0);

// console.log(getNumbers);

// func5

// const inputStr = 'George Raymond Richard Martin';

// const initials = inputStr
//   .split(' ')
//   .map(word => word[0])
//   .join('');

// console.log(initials);

// func6

// const people = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ];

// people.sort((a, b) => a.age - b.age);

// const ageDifference = people[people.length - 1].age - people[0].age;

// console.log(ageDifference);

// func7

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = arr.filter((number) => number % 2 === 0);
// const oddNumbers = arr.filter((number) => number % 2 !== 0);

// console.log("Even Numbers:", evenNumbers);
// console.log("Odd Numbers:", oddNumbers);

// func8

// const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
// const uniqueValues = arr.reduce((accumulator, currentValue) => {
//   if (!accumulator.includes(currentValue)) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

// console.log(uniqueValues);

// func9

// const products = [
//   { id: 3, name: "Product C", price: 25.99, rating: 4.5, discount: 0.1 },
//   { id: 1, name: "Product A", price: 19.99, rating: 4.2, discount: 0 },
//   { id: 4, name: "Product D", price: 35.99, rating: 4.8, discount: 0.15 },
//   { id: 2, name: "Product B", price: 29.99, rating: 4.0, discount: 0.05 },
// ];

// const sortedById = products.slice().sort((a, b) => a.id - b.id);
// console.log("ID:", sortedById);

// const sortedByName = products.slice().sort((a, b) => a.name - b.name);
// console.log("Name:", sortedByName);

// const sortedByPrice = products.slice().sort((a, b) => a.price - b.price);
// console.log("Price:", sortedByPrice);

// const sortedByRating = products.slice().sort((a, b) => b.rating - a.rating);
// console.log("Rating:", sortedByRating);

// const sortedByDiscount = products.slice().sort((a, b) => a.discount - b.discount);
// console.log("Discount:", sortedByDiscount);

// func10

// const products = [
//   { id: 3, name: "Product C", price: 25.99, rating: 4.5, discount: 0.1 },
//   { id: 1, name: "Product A", price: 19.99, rating: 4.2, discount: 0 },
//   { id: 4, name: "Product D", price: 35.99, rating: 4.8, discount: 0.15 },
//   { id: 2, name: "Product B", price: 29.99, rating: 4.0, discount: 0.05 },
// ];

// const sortedByRating = products.slice().sort((a, b) => b.rating - a.rating);

// const highestRatedProduct = sortedByRating[0];

// console.log("Eng kotta reytingli product:", highestRatedProduct);

// func11

// const products = [
//   { id: 3, name: "Product C", price: 25.99, rating: 4.5, discount: 0.1 },
//   { id: 1, name: "Product A", price: 19.99, rating: 4.2, discount: 0 },
//   { id: 4, name: "Product D", price: 35.99, rating: 4.8, discount: 0.15 },
//   { id: 2, name: "Product B", price: 29.99, rating: 4.0, discount: 0.05 },
// ];

// const sortedByPrice = products.slice().sort((a, b) => a.price - b.price);

// const lowestPricedProduct = sortedByPrice[0];

// console.log("Eng pas narxli product:", lowestPricedProduct);

// func12

// const products = [
//   { id: 3, name: "Product C", price: 25.99, rating: 4.5, discount: 0.1 },
//   { id: 1, name: "Product A", price: 19.99, rating: 4.2, discount: 0 },
//   { id: 4, name: "Product D", price: 35.99, rating: 4.8, discount: 0.15 },
//   { id: 2, name: "Product B", price: 29.99, rating: 4.0, discount: 0.05 },
// ];

// const totalPrices = products.reduce((acc, el) => {
//   return acc + el.price;
// }, 0);

// console.log("Yigindisi:", totalPrices);

// func13

// const products = [
//   { id: 3, name: "Product C", price: 25.99, rating: 4.5, discount: 0.1 },
//   { id: 1, name: "Product A", price: 19.99, rating: 4.2, discount: 0 },
//   { id: 4, name: "Product D", price: 35.99, rating: 4.8, discount: 0.15 },
//   { id: 2, name: "Product B", price: 29.99, rating: 4.0, discount: 0.05 },
// ];

// const productNames = products.map((product) => product.name);

// console.log("Names:", productNames);

// func14

// const products = [
//   { id: 3, name: "Product C", price: 25.99, rating: 4.5, discount: 0.1 },
//   { id: 1, name: "Product A", price: 19.99, rating: 4.2, discount: 0 },
//   { id: 4, name: "Product D", price: 35.99, rating: 4.8, discount: 0.15 },
//   { id: 2, name: "Product B", price: 29.99, rating: 4.0, discount: 0.05 },
//   { id: 5, name: "Product E", price: 45.99, rating: 4.9, discount: 0.2 },
// ];

// const productWithId5 = products.find((product) => product.id === 5);

// console.log("IDsi 5 bolgan product " + productWithId5.name);

// func15

// let products = [
//   {
//     id: 6,
//     name: "Smartphone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const productIdToRemove = 4;

// const delProducts = products.filter((product) => product.id !== productIdToRemove);

// console.log("Ochirilgan productlar:", delProducts);

// func16

// const inputStr = "Qale ishla vasya";

// const onlyLetters = inputStr.split("");

// const containsOnlyLetters = onlyLetters.every((character) => {
//   return /^[A-Z a-z]+$/.test(character);
// });

// console.log(containsOnlyLetters);

// func17

// const arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

// const truthy = arr.filter((item) => item);
// const falsy = arr.filter((item) => !item && item !== false);

// console.log(truthy, falsy);

// func18

// const str = "Men Abdulaziz Programmerman";
// const wordsArray = str.split(" ");
// const wordLengths = wordsArray.map((word) => word.length);

// console.log(wordLengths);

// func19

// const str = "Men Abdulaziz Programmerman";
// const wordsArray = str.split(" ");
// const hasEmpty = wordsArray.some((word) => word !== "");

// console.log(hasEmpty);

// func20

// const obj = { a: 2, b: 5, c: 7 };
// const entries = Object.entries(obj);
// const result = entries.map(([key, value]) => `${key}${value}`);

// console.log(result);

// func21

// const digitSum = (...nums) => {
//   let res = 0;
//   nums.forEach((el) => {
//     res += el;
//   });
//   return res;
// };

// console.log(digitSum(7, 4));

// func22

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let res = pupils.reduce((acc, el, index, arr) => {
//   acc = acc + el.protcent/arr.length;
//   return acc;
// }, 0);

// console.log(res);

// func23

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// pupils.map((pupil) => {
//   pupil.protcent >= 90
//     ? (pupil.grade = 5)
//     : pupil.protcent >= 80
//     ? (pupil.grade = 4)
//     : pupil.protcent >= 70
//     ? (pupil.grade = 3)
//     : (pupil.grade = 2);
// });

// console.log(pupils);

// func24

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// pupils.map((pupil) => {
//   pupil.protcent >= 70 ? (pupil.isPassed = true) : (pupil.isPassed = false);
// });

// console.log(pupils);

// func25

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let res = pupils.reduce(
//   (acc, el) => {
//     if (el.protcent >= 70) {
//       acc.passed++;
//     } else {
//       acc.notPassed++;
//     }
//     return acc
//   },
//   { passed: 0, notPassed: 0 }
// );

// console.log(res);