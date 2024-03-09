// **BASIC INPUT OUTPUT**

// ✅1) Make a variable user and initialize a value "Ram" and print it on console 

// const user = "Ram";
// console.log(user);

// ✅2) Make two variables and print their sum, mul, div, sub

// const intA = 5
// const intB = 7

// const sum = intA + intB
// const mul = intA * intB
// const div = intA / intB
// const sub = intA - intB

// ✅3) Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

// const triangleArea = (a, b, c) => {
//     const s = (a + b + c) / 2;
//     const heronsEqvation = s * (s - a) * (s - b) * (s - c);     // we are using herons Equtation for the calculation to triangleArea
//     return heronsEqvation
// }
// const ans = triangleArea(5, 6, 7);
// console.log(ans);

// ✅4) Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then print triple their sum.

// const sumCalculate = (a, b) => {
//   let sum = a + b;
//   if (a === b) {
//     sum *= 3;
//   }
//   return sum;
// };
// const ansSum = sumCalculate(2, 2);
// console.log(ansSum);

// ✅5) Accept a number from a user and print it on console
// const user = Number(prompt('Number'))
// console.log(user);

// ✅6) Ask a user his/her name and say hello (eg. "Hello Sarthak")
// const user = prompt('enter your name')
// const fullName = "Hello";
// console.log(fullName + " " + user);

// ✅7) Accept two integers from user and print the sum
//    Ex - The sum of 45 & 12 = 57

// const num1 = Number(prompt("enter first number"))
// const num2 = Number(prompt("enter first number"))
// console.log(num1+num2);

// ✅8) Accept the User's name, age and print in following manner
//    Ex - Hello Shery, you are 12 years old.

// const fullName = prompt("Enter your name");
// const age = prompt("Enter your age");
// console.log(`hello ${fullName}, you are ${age} years old`);

//                 **CONDITIONAL STATEMENTS**

// ✅9) Accept two numbers and print the greatest between them

// const askUesr = Number(prompt("Enter a number"));
// const askUesr2 = Number(prompt("Enter a number"));

// if(askUesr<askUesr2) {
//     console.log(askUesr2);
// }else{
//     console.log(askUesr);
// }

// ✅10) Accept the gender from the user (M or F) and print the respective greeting message
//      Ex - Good Morning Sir (on the basis of gender)

// const gender = prompt('Gender');
// if (gender=='Male'){
// console.log(`Good Morning sir: ${gender}`);
// }else if (gender=='Female'){
// console.log(`Good Morning mem: ${gender}`);

// }

// 11) Extend the previous program and handle the wrong inputs.
//       Print Good Morning sir for input m or M & Good morning Mam for input F or f
//       else print Wrong Input
// 12) Accept an integer and check whether it is an even number or odd.
// 13) Accept name and age from the user. Check if the user is a valid voter or not.
//       Vaid - Hello Shery, You are a valid voter.
//       Invalid - Sorry Shery, you can't cast the vote.

// 14) extend preious program and Print after how many years the user will be eligible

// 15) Write a JavaScript program to find the largest of three given integers.

// 16) ask a user his bijli ki units and if it is more than 100 unit calculate bill on the basis of 10 rs/ unit, if more than 50 units 8 rs/unit and if less 7 rs/unit

// ✅17) ask a user his salary and if it is more than 1 lakh 30% tax if more than 70k 20% tax and if more than 50k 10% tax and less than that no tax and print tax amount and amount left after paying tax

//ther is a formula of function calculate (persentage*amount)/100

// const userSalary = Number(prompt("enter your salary"))

// const salary = (pay) => {

// if(100000 < pay){
//     let per = (30*pay)/100
//     let amount = pay - per
//     console.log("Your Tax Amount: 30% " + per);
//     console.log("Your Salary after Tax of : 30% is " + amount);
// }
// else if(70000 < pay){
//     let per = (20*pay)/100
//     let amount = pay - per
//     console.log("Your Tax Amount: 20% " + per);
//     console.log("Your Salary after Tax of : 20% is " + amount);
// }
// else if(50000 < pay){
//     let per = (10*pay)/100
//     let amount = pay - per
//     console.log("Your Tax Amount: 10% " + per);
//     console.log("Your Salary after Tax of : 10% is " + amount);
// }
// else if(49999 < pay){
//     console.log("Your Tax is 0%");
//     console.log("Your Salary after Tax of : 0% is " + pay);
// }
// }
// const sa = salary(userSalary);

// ✅18) Ask a user 3 sides of triangle and check
// 	equilateral triangle
// 	isoscales trianle
// 	scalene triangle

// const fir = prompt("give me a 3 sides of triangle what is first")
// const mid = prompt("give me a 3 sides of triangle what is middle")
// const las = prompt("give me a 3 sides of triangle what is last")

// if("equilateral" == fir && "isoscales" == mid && "scalene" == las){
//     console.log("your so write");
// }else{
//     console.log("not");
// }

// 19) Accept a year and check if it a leap year or not (google to find out what's a leap year)
// 20) You are given a variable marks. Your task is to print:
// 	- A+ if marks is greater than 90.
// 	- A if marks is greater than 80 and less than or equal to 90.
// 	- B+ if marks is greater than 70 and less than or equal to 80.
// 	- B if marks is greater than 60 and less than or equal to 70.
// 	- C if marks is greater than 45 and less than or equal to 60.
// 	- D if marks is greater than or equal to 33 and less than or equal to 45.
// 	- F if marks is less than 33.

//               **ITERATIVE STATEMENTS**

// 21) Accept an integer and Print hello world n times
// 22) Print natural number up to n.
// 23) Reverse for loop. Print n to 1.
// 24) Take a number as input and print its table
//        5 * 1 = 5
//        5 * 2 = 10 ... up to 10 terms
// 25) Sum up to n terms.
// 26) Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Sheryians" instead of the number and for multiples of five print "coding". For numbers multiples of both three and five print "Sheryians coding school".
// 26) Factorial of a number
// 28) Print the sum of all even & odd numbers in a range seperately.
// 29) Print all the numbers which are either divisible by 3 or 5 in a range
// 30) Print all the factors of a number.
// 31) Print the sum of all factors of a number, 50 - 1 + 2 + 5 + 10 + 25 = 43
// 32)  Accept a number and check if it a perfect number or not.
//       A number whose sum of factors(excluding number itself)  = Number
//       Ex -  6 = 1, 2, 3 = 6
// 33) ask a user and string and a number and addon the string n number of times (if number is 3 and string is "hey" print "heyheyhey")
// 34) Seprate each digit of a number and print it on the new line
// 35) Check if the number is Prime or not.

// 		**FUNCTIONS**

// 36) Create a function named greet that takes a name as an argument and prints a greeting message to the console.

// 37) Write a function called square that takes a number as a parameter and returns its square.

// 38) Create a function named isEven that takes an integer as an argument and returns true if it's even and false if it's odd.

// 39) Create a function named countDown that takes a positive integer as a parameter and prints a countdown from that number to 1.

// 		**Array**

// ✅40) Create an array named fruits containing three different types of fruits. Log each fruit to the console.

// arr.forEach((e)=>{
//     console.log(e);
// })

// ✅41) Write a program that checks if a specific fruit exists in the fruits array from last question.

// const arr = ["apple", "banana", "mango"];

// arr.forEach(e => {
//     if(e === "apple"){
//         console.log("apple");
//     }
// })


// ✅42) Create an array named evenNumbers using a loop, containing even numbers from 2 to 10.
// let evenNumbers = []
// for(i = 2; i<= 10; i+=2){
//     evenNumbers.push(i)
// }
// console.log(evenNumbers);

// ✅43) Write a loop to find and print the sum of all elements in an array of numbers.
// const arr = [2,4,6,8,10];
// let sum = 0;
// for(let val =  val < arr.length; val++){
//      sum += arr[val];
//      console.log(sum);
//     }


// solve this by for of loop 
// let sum = 0;
// for (let num of arr) {
//     sum += num; // we accsess the every index of the array in for loop like this 
//     console.log(sum);
//     // arr[val]        we are don't accsess the index of element like this in this for of looop
// }



// 44) Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


//✅ 45) Find the largest number in an array of numbers using a loop and conditional statements.



// --solutions:-


// const arr = [1, 2, 3, 14, 5, 6, 7];

// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }

// }





//✅ 46) Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// --solutions:-

// we are using bubble short to the solve this quetion (short the array).

// const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// for(let i = 0; i < arr1.length; i++) {
//     console.warn(arr1[i]);
//     for(let j = 0; j < arr1.length; j++) {
//         console.log(arr1[j]);
//         if(arr1[j]>arr1[j+1]){
//             let temp = arr1[j]
//             arr1[j] = arr1[j+1]
//             arr1[j+1] = temp
//         }
//     }
// }






//✅ 47) Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


// --solutions:-


// const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// this is a hash map to find most frequent items in an array

// const solve = arr => {
//     let freqMap = {};
//     let maxFreq = 0;
//     let mostFrequentItem;
//     for(let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         console.log(freqMap[item]);
//         if(freqMap[item] === undefined){
//             freqMap[item] = 1;
//         }
//         else{
//             freqMap[item]++;
//         }
//         if(freqMap[item]>maxFreq){
//             maxFreq = freqMap[item]
//             mostFrequentItem = item
//         }
//     }
//     return mostFrequentItem
// }
// console.log(solve(arr));


// let count = 0;
// let maxFreq = 0;
// let majorElement = 0;

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//             count++;
//         }
//     }
//     if(count>maxFreq){
//         maxFreq = count;
//         majorElement = arr[i]
//     }
// }

// console.log(majorElement);

// var count = 0
// var maxCount = 0;
// var majorityElement = 0;


// for(var i = 0 ; i < arr.length ;i++){
//     count = 0
//     for(var j = 0 ; j < arr.length ;j++){
//         if(arr[i] == arr[j]){
//             count++;
//         }
//     }
//     if (count > maxCount) {
//         maxCount = count;
//         majorityElement = arr[i];
//     }

// }

// console.log(majorityElement);


// 48) Square the value of every element in the array and make new array

// 49) Take an array of strings containing words in lowercase and transform it into an array where each word is capitalized.

// 50) Transform an array of strings by adding a prefix, like "Mr. " or "Ms. ", to each string using map().

// 51) Given an array of temperatures in Celsius, create a new array that converts each temperature to Fahrenheit using the formula (Celsius * 9/5) + 32.

// 52) Given an array of numbers (positive and negative), filter it to get only the positive numbers.

// 53) Filter an array of numbers to only include the even numbers.

// 54) Given an array of strings, filter it to obtain only the words that have more than 5 characters.

// 55) Reverse the order of elements in an array without using the reverse method.

// 		**OBJECTS**

// 56) Create an object named person with properties for name, age, and city. Print each property to the console.

// 57) Add a new property, occupation, to the person object created in the previous question and print the updated object.

// 58) Create an object called calculator with methods for addition, subtraction, multiplication, and division. Use these methods to perform some calculations.

// Combination

// 59) Create an object representing a book with properties for title, author, and year. Store multiple book objects in an array.

// 60) Write a function called printBooks that takes an array of book objects and prints their titles to the console.

// 61) Write a function called filterEvenNumbers that takes an array of numbers, filters out the even ones, and returns a new array.

// 62) Write a program that iterates through an array of objects representing students, calculates their average grade, and prints whether they pass or fail based on a passing threshold.

// 63) Implement a function called calculateBMI that takes an object representing a person with properties height and weight and returns their BMI.

// 64) Write a function called sortBooksByYear that takes an array of book objects and returns a new array of books sorted by year.

// 65) Create a program that simulates a library. It should have an array of book objects, a method to borrow a book, and a method to return a book.

// const myInt = setInterval(() => {
//     let time = 0;
//     time += 9;
//     document.querySelector(`#container-first>h1`).innerHTML = time;

//     // console.log(time);
// }, 1000);


// --------------------------------some quetins give by hars sharma --------------------------------


//✅ 1. make an array which contains string, NaN and numbers and remove everything except string and put it in new array

// --solvution---------->

// const arr = ['s','o',NaN,23,NaN,'3'];

// const newArr =  arr.filter(e => typeof e === 'string')


//✅ 2. make a function which takes an array and returns the count of the numbers as an object
// example->
// [1,,1,1,2,3,4,32,2,2,4] => {1: 3, 2: 3, 3: 1, 32: 0, 4: 2}

// --solvution---------->

// const arr = [1,,1,1,2,3,4,32,2,2,4];

// let map = {}

// const fnc = arr => arr.filter( e => map[e] = map[e]?map[e]+1:1)
// fnc(arr);
// console.log(map);



// 3.make a function which accepts two parameters array and object and chek whether that array contains that object with same values

// const arr = [    
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" }
// ]
// const obj = {id: 1, name: "Alice"}

// const fnc = (arr, obj) => {
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i].name === obj.name){
//             return true
//         }
//     }
// }
// console.log(fnc(arr,obj));


// 4. make a function which accepts some string and return an object with following pattern:
// example: hello
// {h: 'e', l: 'l', o: null}




// 5.make a function which accepts two string and return the string with all the similar letters next to each other
// example: Hello Harsh
// HHelloarsh

const str1 = "Hello";
const str2 = "Harsh";

const fnc = (str1, str2) => {
    let clutter = "";
    for(let one of str1){
        str2.includes(one)? clutter +=one:undefined;
    }
    for(let two of str2){
        str1.includes(two) && !clutter.includes(two)? clutter +=two:undefined;
    }
    return clutter
};
console.log(fnc(str1, str2));







// letcode =169,229
// condition o(n) & o(1)

// difind the number in the array that repet more then n/2 times 


// make a two variable


// this is the wrong awnser

// const arr = [2,2,3,2,1,2,7,2]

// const vroot = arr => {
//     let count = 0;
// let element = 0;

// for (let i = 0; i < arr.length; i++){
//     if(count == 0){
//         count = arr[i]
//     }
//     if(arr[i] == element){
//         count+= 1
//     }
//     else{
//         count -= 1
//     }
// }
// return element
// }
// vroot(arr);
// console.log(vroot(arr));






// const array = [
//     { name: "sofa", type: "interior", price: 12200},
//     { name: "table", type: "interior", price: 1200},
//     { name: "bed", type: "interior", price: 17000},
//     { name: "bottles", type: "essntials", price: 1200},
//     { name: "joote", type: "sports", price: 5000},
//     { name: "bag", type: "sports", price: 200},
// ];

// let obj = {}

// array.forEach((elem)=>{
//     if(obj[elem.type] === undefined){
//         obj[elem.type] = [elem]
//     } else{
//         obj[elem.type].push(elem)
//     }
// })


// Ismein dekho, hum obj[val.value] ko check kar rahe hain ki yeh undefined hai ya nahi. Agar yeh undefined hai, matlab is key (val.value) ke saath obj object mein koi array nahi hai. Iss case mein, hum ek naya array bana lete hain jismein hum val object daal dete hain aur use obj[val.value] ke saath assign kar dete hain.

// Agar obj[val.value] undefined nahi hai, matlab is key ke saath already ek array hai. Iss case mein, hum val ko uss array ke end mein push() method se daal dete hain.

// Toh, obj[val.value] ek array ban jata hai ya toh kyunki humne use explicit taur par array [val] ke saath banaya hota hai, ya kyunki woh pehle se ek array hota hai aur hum val ko usmein daal dete hain push() method se.







// ----------------------------------------------------------------
// Question:

// Given an array of objects, each representing a person with properties name, id, and friends (an array of friends' names), write a JavaScript function findFriendsByName that takes the array of objects and a friend's name as input. The function should return an array of objects representing the people who have the input friend as one of their friends.

const people = [
    { name: 'Alice', id: 1, friends: ['Bob', 'Charlie'] },
    { name: 'Bob', id: 2, friends: ['Alice', 'David'] },
    { name: 'Charlie', id: 3, friends: ['Alice', 'Eve'] },
    { name: 'David', id: 4, friends: ['Bob'] },
    { name: 'Eve', id: 5, friends: ['Charlie'] }
];

// const logd = 'Alice'

// const ans = people.filter(person => person.name !== 'Alice');
// const ans = people.filter(person => person.friends.indexOf('Bob') !== -1);






// ----------------------------------------------------------------some questions of indexOf method

// 1) Given an array of numbers, write a JavaScript function to find the index of a specific number. If the number is not present, return -1.

// const arr2 = [1, 2, 3, 4,4]

// const fnc2 = (num,ind) => {
//     return num.indexOf(ind)
// }

// console.log(fnc2(arr2,4));


// 2) Write a JavaScript function that takes a string and a substring as input and returns the index of the first occurrence of the substring in the string. If the substring is not found, return -1.

// const str = 'hello world'

// const fnc = (str, sub) => {
//     return str.indexOf(sub)
// }
// console.log(fnc(str, 'sohel')) ;


// 3) Write a JavaScript function to find the index of the second occurrence of a particular element in an array. If the element appears only once, return -1.

// const arr = [1, 2, 3,4,5,6,7,8,8,8,8,9,10,11,12,2,2];





// function findSecondOccurrenceIndex(arr, target) {
//     let firstIndex = -1;
//     let secondIndex = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             if (firstIndex === -1) {
//                 firstIndex = i;
//             } else {
//                 secondIndex = i;
//                 break;
//             }
//         }
//     }

//     if (secondIndex !== -1) {
//         return secondIndex;
//     } else {
//         return -1;
//     }
// }
// console.log(findSecondOccurrenceIndex(arr, 8));



// 4) Write a JavaScript function that takes a string, a search value, and a replacement value as input. The function should replace all occurrences of the search value in the string with the replacement value.
// const text = "The quick brown fox jumps over the lazy dog";
// const fnc = (str, rep, intex) => {
//     return str.split(rep).join(intex);
// }
// console.log(fnc(text, "The quick brown", "the tost is"));

// 5) Write a JavaScript function to check if a specific value exists in an array. Return true if the value exists, and false otherwise.

// const arr = [1, 2, 3,4,5,6,7,8,8,8,8,9,10,11,12,2,2];

// const fnc = (arr, ser) => {
//    return arr.indexOf(ser) !== -1        //apan yanha par bol rahe hen ki 200 agar is array me he jo ki nhi he to ye -1 return karega or fir apan bol rahe hen ki -1 or -1 dono ek barabar nhi he jo ki jhut he to isliye hame false milega
// }
// console.log(fnc(arr, 200));




// question most accoring character in the string

// solution------------------------>

// const str = "sohel";
// let obj = {};

// str.split("").forEach((char)=>{
//     obj[char] = obj[char]?obj[char]+1:1;
// })
// console.log(obj);
