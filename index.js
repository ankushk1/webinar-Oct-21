// var usernum = "10";
// var age = 10;
// var bool = true;


// console.log(username, age, bool)

// var personName = 'ABC';

//That when we add a var with name, it is called declaration
//when we add some value to it, it is called initialization

// console.log(personName)

// console.log(typeof Boolean(age))

// console.log("12" - 10)

// console.log("HEY" + "HEllo")

// console.log(usernum === age);

//let and const

// let a;

// a = 20
// console.log(a)

// const a = 20;
// // a = 30;
// console.log(a)

//VAR  - You can declare a variable more than one time.
//LET - You cannot redeclare but initialize/update it.

//VAR and LET - You can first declare a variable and afterwards in nextline you can initialize

// CONST - You have to declare and initialize on same line, you cannot update a const.

// console.log(3**2)

// const num = 0;

// if (num >= 10) {
//   console.log("Num greater than equal to 10");
// }
// // } else if (num >= 5 && num <= 10) {
// //   console.log("Num greater than 5 but less than 10");
// // }
// else if (num == 2 && num == 4 || num == 5) {
//   console.log("Num is equal to 2 or 4");
// } else {
//   console.log("Num less than 5");
// }

//ternary operator
// let condition = num ? true : false
// console.log(condition)

//truthy and falsy values
// Case String - if variable are undefined, null or "", so this will be treated as false or not fullfilling the condition
// Case Number - if variable are undefined, null or 0
// Case Boolean - if it is false, so it will be not fullfilling the condition

// const flag = 0;
// console.log(flag ? true : false)

// if(flag){ // this will check if variable are not undefined, null , "" , 0 and false
//   console.log(true)
// } else{ // this will check if variable are undefined, null,  "" , 0 and false
//   console.log(false)
// }

// const number = 16;
// console.log(
//   number > 10 ? number > 15 ? "Num greater than 15" : "Less than 15" : "Num greater than 10"
// );

// console.log(number < 10 ? "Num less than 10" : number > 15 ? "Num greater than 15" : "Less than 15")

// let a = 365

// switch(a) {
//   case 366: console.log("leap year")
//   break;
//   // case 3: console.log("Value is 3")
//   // break;
//   default: console.log('Not leap year')
//   break;
// }

// let day = 2;
// switch(day) {
//   case 1 : console.log('Monday')
//   break;
//   case 2 : console.log('Tuesday')
//   break;
//   case 3 : console.log('Wednesday')
//   break;
// }

// var x = 4

// while(x > 0){
//   console.log(x)
//   x--
// }

// for(const i = 0; i < 4 ; i++){
//   console.log(i)
// }

//JS Strings
// let username = "Yashaswi"

// console.log(username.length)
// console.log(username.substring(1,5)) // cannot use negetive vals
// console.log(username.substr(1,5)) // first param is starting index and second param is length to be sliced
// console.log(username.slice(1,5))

//With only one param
// console.log(username.substring(3))

// let str = "hello, I am saying hello, Hello"

// console.log(str.toLowerCase().replaceAll("hello", "hey"))

// let person = "Sam"
// // console.log(person.toUpperCase())

// // For concatination of Strings
// console.log(person.concat(" says ",person))
// console.log(person + " says " + str)

//Trim method

// let car = "  BMW  "
// console.log(car.trim())

//String split
// let myStr = "Hey, my name?is ABC, I am 20 years old"
// console.log(myStr.split(",")[1].split("?")[0].trimStart());

// arr = [1,2,3]
// console.log(arr[0])

// Explore on your own
//padStart
//padEnd

//JS Arrays
// const arr2 = ["A", "B", "C"]
// console.log(arr.length)
// const arr3 = arr.concat(arr2)
// console.log(arr3);

// //To add at last position
// arr.push("FERRARI")
// console.log(arr)

// //To remove from last position
// arr.pop()
// console.log(arr)

// //To add at first position
// arr.unshift("MERC")
// console.log(arr)

// //To remove from first position
// arr.shift()
// console.log(arr)

// const numArr = [1,2,3,4,5,6,7]
// const newNumArr = numArr.map(elem => elem+2)
// console.log(newNumArr)

// const newFilterArr = numArr.filter(elem => elem%2== 0)
// console.log(newFilterArr)

// const ages = [12, 33, 16, 40];

// console.log(ages);
// console.log(ages.valueOf());

// console.log(ages.every((age) => age > 18));

// console.log(ages.some((age) => age > 18));

// console.log(ages.filter((age) => age> 12));
// console.log(ages.find((age) => age >12));
// console.log(ages.findIndex((age) => age === 33));

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Mango", "Apple"];
// let index = fruits.indexOf("Apple",2);
// console.log(index)

//JS Functions
// function test(name, number) {
//   console.log(`Function called ${name} ${number}`);
// }

// var test2 = function () {
//   console.log("Function2 called");
// };

// var test3 = () => {
//   console.log("Function3 called");
// };

// test("XYZ", 10);
// test2();
// test3();

// const userDetails = (name, ...argumnets) => {
//   const [num1] = argumnets;
//   console.log(num1);
//   // console.log(age ? age : '')
// };

// userDetails("Amarnath", 10, 20, 30, "x", "y");

// (function (a, b) {
//   console.log(console.log(a+b))
// })(1, 2);

// console.log(
//   (function (a, b) {
//     return a + b;
//   })(1, 2)
// );

// console.log(
//   ((a, b) => {
//     return a + b;
//   })(1, 2)
// );

// // function abc(num1 , num2, ...params) {
//   console.log(num1, num2)
//   console.log(arguments[1])
//   console.log(params)
// }
// console.log(abc(1,2,3,4,5,6,7))

// const f1 = (a, b = null) => {
//   if(!b) {
//     return a
//   }
//   return a + b;
// };

// console.log(f1(1));

// JS Objects
// const obj = {
//   user: "ABC",
//   age: 18,
//   isTrue: true,
//   userInfo : function (name) {
//     return this.isTrue ? `hey ${this.user} ${this.age}` : "Not true"
//   }
// };

// obj.city = "Delhi"
// // obj.age = 20

// console.log(obj)

// console.log(obj["user name"]);
// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj.userInfo("AMAN"))

// const obj2 = Object.create(obj)
// obj2.user = "XYZ"
// // obj2.age = 11
// console.log(obj2.userInfo())

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// const entries = Object.entries(obj)
// console.log(entries)

// entries.forEach(entry => {
//   console.log(entry[0])
//   console.log(entry[1])
// })

// const obj = {
//   user: "ABC",
//   age: 18,
//   userInfo: function () {
//     return  `${this.user} age is ${this.age} `
//   }
// };

// const obj2 = {
//   name:"XYZ",
//   age:10
// }

// const bindFunc = obj.userInfo.bind(obj2)
// console.log(typeof(bindFunc))

// const obj2 = {
//   user:"XYZ",
//   age:10
// }

// const obj3 = {
//   user:"SAM",
//   age:14
// }

// const bindFunc = obj.userInfo.bind(obj2)
// // const bindFunc2 = obj.userInfo.bind(obj3)
// console.log(bindFunc("gurugram", "haryana"))
// console.log(bindFunc("Delhi", "Delhi"))

// //Function borrowing
// console.log(obj.userInfo.call(obj, "gurugram", "haryana"))
// console.log(obj.userInfo.apply(obj, ["gurugram", "haryana"]))

//This method freezes the object. You cannot add anything nor update the object
// Object.freeze(obj)

//This method seals the object. You cannot add anything but can update the object
// Object.seal(obj)

// obj.user = "XYZ"
// obj.address = "Delhi"

// console.log(obj);

// const obj = {
//   user: "ABC",
//   age: 18,
//   userInfo: function (city,state) {
//     return  `${this.user} age is ${this.age} lives in ${city},${state}`
//   }
// };

// const obj2 = {
//   user:"XYZ",
//   age:10,
//   city: "Delhi",
// }

// obj2.age = 35
// obj2.city = "Mumbai"
// console.log(obj2)

// const obj3 = {...obj2, age:30}
// console.log(obj3)

// const arr = [1,2,3,4,5,6]
// const arr2 = [4,5,6]

// // console.log(...arr, ...arr2)
// // const a = [...arr, ...arr2]
// // console.log((a));

// const [num1, num3, num2, ...nums] = arr
// console.log(num1 + num2 + num3);
// console.log(nums)

// const obj2 = {
//   user:"XYZ",
//   age:10,
//   city: "Delhi",
// }

// const {user, city, age} = obj2

// console.log(user, age, city)

// console.log(user)

// const arr = [1, 2, 3];
// arr.forEach(obj => console.log(obj))

// const data = [
//   {
//     user: "user 1",
//     userHobbies: ["Sing", "cricket", "travelling"],
//     address: {
//       houseNumber: "12",
//       city: "Delhi",
//       state: "Delhi"
//     }
//   },
//   {
//     user: "user 2",
//     userHobbies: ["cricket", "travelling"],
//     address: {
//       houseNumber: "22",
//       city: "Mumbai",
//       state: "Maharashtra"
//     }
//   },
//   {
//     user: "user 3",
//     userHobbies: ["dance", "football"],
//     address: {
//       houseNumber: "22",
//       city: "Mumbai",
//       state: "Maharashtra"
//     }
//   }
// ];

// console.log(data[0].userHobbies.includes("Sing"))

// const objdata = data.filter(obj => obj.userHobbies.includes("Sing"))
// console.log(objdata)

// function hello(callback) {
//   setTimeout(() =>{
//     console.log('hello')
//     // callback()
//   }, 3000)
// }

// function hey(){
//   console.log('hey')
// }

// // hello()
// // hey()

// function isOdd(num) {
//   return num%2 !=0
// }

// function filter(numbers, callback){
//   let results = [];

//   results = numbers.filter(num => callback(num))

//   console.log(results)
//   console.log('result added')
//   return results
// }

// var arr = [1,2,3,4,5,6,7]
// // console.log(arr.filter(num => num%2 != 0 ))

// // filter(arr, isOdd)

// // for(var i = 0; i < arr.length; i++){
// //   console.log(i)
// //   console.log(arr[i])
// // }

// arr.forEach( (num, index) => {
//   console.log(num + " at index "+ index)
// })

// var name = "abc"

// const  test = (callback) => {
//   // console.log(name)
//   callback(name)
// }

// const log = (name) => {
//   console.log('log function called', name)
// }

// test(log)

// const outer = () => {
//   var a = "a";
//   const inner = () => {
//     console.log(a);
//     const b = "b"
//     const innerinner = () => {
//       console.log(b, a)
//     }
//     return innerinner
//   }
//   return inner;
// }

// // const res = outer()
// // console.log(res())

// const res2 = outer()()()
// res2

// for(let i = 0 ; i< 3 ; i++) {

//   setTimeout(function() {
//     console.log(i)
//   }, 1000)
// }

// function makeArmy() {
//   let shooters = [];
//   // let i = 0;
//   for (let i = 0 ; i< 10 ; i++) {
//       let shooter = function() {
//           console.log(i);
//       }
//       shooters.push(shooter);
//       //console.log(shooter);
//   }
//   //console.log(shooters);
//   return shooters;
// }

// let army = makeArmy();
// console.log(army);
// army[0](); // 10
// army[5]();
// army[9]();

// const p = new Promise((resolve, reject) => {
//   let x = 3
//   if(x == 2) {
//     resolve('Success')
//   } else{
//     reject('Failure')
//   }
// })

// function result() {
//   const p = new Promise((resolve, reject) => {
//     let x = 3;
//     if (x == 2) {
//       resolve("Success");
//     } else {
//       reject("Failure");
//     }
//   });

//   return p;
// }

// console.log('promise called')
// p.then((message) => {
//   console.log(message)
// })
// .catch((err) => {
//   console.log(err)
// })

// const promiseCall = async () => {
//  try{
//   const res = await result();
//   console.log(res);
//   console.log("promise called");
//   return res;
//  } catch(err) {
//    console.log(err)
//  }
// };

// promiseCall();

// const p = Promise.resolve(3)
// const q = Promise.reject(0)

// p.then(message => console.log(message))

// get Call
// const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
// // const res = fetch("https://jsonplaceholder.typicode.com/posts");
// res.then((response) => response.json()).then((json) => console.log(json));

//Create call
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "ABCD",
//     body: "bar",
//     userId: 1
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// //update call

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "ABCD",
//     body: "bar",
//     userId: 1
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// //Delete call
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE"
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// const user = {
//   name: "ABC",
//   age: 20
// }

// const arr = [1,2,3]


// localStorage.setItem("user" , JSON.stringify(user))
// localStorage.setItem("username" , user.name)

// console.log(JSON.parse(localStorage.getItem("user")).name)
// // localStorage.removeItem("user")


// // localStorage.clear()



// sessionStorage.setItem("user" , JSON.stringify(user))

// import * as imprts from './js/subFolder/main.js'
// import {age, name, user} from './js/subFolder/main.js'
// import name2 from './js/subFolder/main.js'
// console.log(imprts)
// console.log(imprts.user.username)

// const {username} = user
// console.log(username);

// console.log(sum(user.username))

// console.dir(document)
// // console.dir(document.body)


// console.log(window)


//Aside from getElementById, all the other methods return an array
// of elements

// const h1 = document.getElementById('h1');
// console.log(h1)
// const classh1 = document.getElementsByClassName('c-h1')
// console.dir(classh1);

// classh1[0].innerHTML = "HEY"


// const tahH1 = document.getElementsByName('name-h1')
// console.dir(tahH1)


const h1 = document.querySelector('#h1')
console.dir(h1)

const ch1 = document.querySelectorAll('.c-h1')
console.dir(ch1)

const tagh1 = document.querySelectorAll('h1')
console.dir(tagh1)

const nameh1 = document.querySelectorAll('[type=text]')
nameh1[0].value = 'ABC'
nameh1[0].placeholder = 'NAME'
console.dir(nameh1)