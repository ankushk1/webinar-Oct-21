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

const arr2 = ["A", "B", "C"]
console.log(arr.length)
const arr3 = arr.concat(arr2)
console.log(arr3);

//To add at last position
arr.push("FERRARI")
console.log(arr)

//To remove from last position
arr.pop()
console.log(arr)

//To add at first position
arr.unshift("MERC")
console.log(arr)

//To remove from first position
arr.shift()
console.log(arr)


const numArr = [1,2,3,4,5,6,7]
const newNumArr = numArr.map(elem => elem+2)
console.log(newNumArr)


const newFilterArr = numArr.filter(elem => elem%2== 0)
console.log(newFilterArr)
