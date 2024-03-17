/// this this is chat gpt given the qutions for logic buliding

// --------------------------------------------------------------day ->1  3/3/24--------

//✅ 1 Declare variables of different data types (string, number, boolean, array, object) and log their values to the console.


// ----solution-------->


/* const str = 'hello world';
   const num = 12;
   const boolean = false;
   const array = [1,2,3];
   const object = {name: 'hello world'}; */

//✅ 2 Write a function that determines if a given number is positive, negative, or zero.

//mistek we do
//i'll dont understand the quetion that we use the if condition to determine


// ----solution-------->


/* const fnc = num => {
       if(num === 0) {
           return 'zero';
       }
       else if(num > 0) {
           return 'positive';
       }
       else if(num < 0) {
           return 'negative';
       }
   };
   console.log(fnc(0)); */

//✅ 3 Write a program that prints numbers from 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".

//mistek we do
// i'm not a write a console.log i in else 



// ----solution-------->


/* for(let i = 0; i <= 100; i++) {
       if( i % 3 === 0 ) {
           console.log("fizz");
       }else if(i % 3 === 0 && i % 5 === 0){
           console.log("FizzBuzz");
       }
       else if(i % 5 === 0){
           console.log("buzz");
       }
       else{
           console.log(i);      
       }
   } */

//✅ 4 Create an array of your favorite foods. Write a function that returns the length of the array and the first and last elements of the array.


//mistek we do

// i'll don't read a quetion for the print first and last elements


// ----solution-------->

/* const favorite = ['chiken', 'pizza', 'chiken twister', 'cheese',];

   const fnc = food => {
       return [food.length, food[0], food[food.length-1]]      
   }
   console.log(fnc(favorite)); */




//✅ 5 Write a function that takes two numbers as parameters and returns their sum.


// ----solution-------->


/* const fnc = (num1, num2) => {
       return num1 + num2;
   };
   console.log(fnc(12,14)); */ 





// --------------------------------------------------------------day ->2  4/3/24--------



//✅ 6) Write a function that takes a string as input and returns the reverse of that string.


//mistek we do
// i'll direct apply the reverse method


// ----solution-------->

/* const str = "sohel"

 const fnc = str => {
     return str.split('').reverse().join('');
 }
 console.log(fnc(str)); */





//✅ 7) Create an array of numbers. Write a function that takes this array as input and returns the sum of all the numbers in the array.


// ----solution-------->


/* const numArr = [12,32,4,534,213,]
 let sum = 0

 const fnc = num => {
     sum = 0
     num.forEach((elem)=>{
         sum += elem
     })
     return sum
 }
 console.log(fnc(numArr)); */


//✅ 8) Create an object representing a person with properties like name, age, and occupation. Write a function that takes this object as input and logs a message to the console like "John is 30 years old and works as a teacher".

// ----solution-------->

/* const person = {
     name: "john",
     age: 30,
     occupation: "teacher"
 }

 const fnc = person => {
     console.log(`${person.name} is ${person.age} years old and works as a ${person.occupation}`);
 }
 fnc(person) */

//✅ 9) Write a function that takes a number as input and returns "even" if it's even and "odd" if it's odd.


//mistek we do
// firstly we use a else if condition and we usnig the forEach that's why the return value are showing the undifined value
// secondly we don't use the return keyword before the num.map that's why the return value is showing the undifined value





// ----solution-------->

/* const arrNum = [12,45,23,13,2,43]

 const fnc = num => {
     return num.map((n)=>{
         if(n % 2 === 0){
             return 'even'
         }
         else {
             return 'odd'
         }
     })
 }
 console.log(fnc(arrNum)); /


//✅🔥 10) Create a nested array representing a tic-tac-toe board. Write a function that takes this array as input and checks if any player has won the game (three in a row horizontally, vertically, or diagonally).


/* const tic = [
    [0,1,2],[3,4,5],[6,7,8],
]

const fnc = num => {
    // Horizontal check
    for(let row of num){
        if(row.every(x => x === 'x') || row.every(x => x === 'o')){
            return true
        }

        //once for each element present in the array until it finds one where the callback returns a falsy value. If such an element is found, every immediately returns false. Otherwise, if the callback returns a truthy value for all elements, every returns true.
    }
    // Vertical check
    for(let i = 0; i < num.length; i++){
        if(num[0][i]===num[1][i] && num[1][i]===num[2][i] && (num[0][i]==='x' || num[0][i] === 'o')){
            return true
        }
    }
    // Diagonal check
    if(num[0][0]==='x'||num[0][0]==='o' && num[0][0] === num[1][1] && num[1][1] === num[2][2] || num[0][2] === num[1][1] && num[1][1] === num[2][0]){
        return true;
    }
    return false        //In the context of the tic-tac-toe game and the provided code, the return false; statement is used to indicate that no player has won the game after checking all rows, columns, and diagonals for winning combinations.
}
console.log(fnc(tic)); */



// --------------------------------------------------------------day ->3  6/3/24--------

// Palindrome Checker:

//✅ 11) Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise. Ignore non-alphanumeric characters.

// ----solution-------->

// const fnc = str => {
//     let newStr = str.replace(/[^a-z0-9]/g, '').split("").reverse().join("");
//     if(str.toLowerCase() !== newStr.toLowerCase()) return false;
// }
// console.log(fnc("level"));




// ----logic solution-------->

// const fnc = str => {
//     let left = 0;
//     let right = str.length -1
//     while(left < right) {
//        if(str[left] === str[right]) return true;
//         left++;
//         right--;
//     }
//     // console.log(right);
//     return false;
// };
// console.log(fnc("sohelel"));


//✅ 12) Write a function that takes a number as input and returns true if it's a prime number, and false otherwise.

// const fnc = num => {
//     if(num <= 1) return false;
//     for(let i= 2; i < num; i++){
//          if(num % i === 0) return false;
//     }
//     return true;
// };
// console.log(fnc(13));


// --------------------------------------------------------------day ->4  7/3/24--------

// -----------------------> some ternary operator question

//✅ 13) Write a JavaScript function that takes an integer as input and returns "Even" if the number is even, and "Odd" if the number is odd, using a ternary operator.

// const fnc = num => {
//     return num % 2 === 0 ? "Even" : "Odd";
// };
// console.log(fnc(12));


//✅ 14) Write a function that takes two numbers as input and returns the larger of the two numbers using a ternary operator.

// const fnc = (num,num2) => {
//     return num > num2 ? num : num2;
// };
// console.log(fnc(14,22));


//✅ 15) Create a function that takes a number as input and returns "Positive" if the number is greater than zero, "Negative" if it's less than zero, and "Zero" if it's equal to zero, using a ternary operator.

// const fnc = num => {
//     return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";   // check the first condition is true then run the code and false then the check second condition is false the run is zero.
// }
// console.log(fnc(-1));




//✅ 16) Write a function that takes an array of numbers as input and returns "All positive" if all numbers are positive, "All negative" if all numbers are negative, and "Mixed" if the array contains both positive and negative numbers, using a ternary operator.

/* const arr = [-1,-2,-3,-4,-5,-6,-7]

const fnc = num => {
    const pos = num.every(num => num > 0)  // if this is true then return all positive 
    const neg = num.every(num => num < 0) //  if this is true then return all negetive  then all the condition false otherwise run "Mixed"
    return pos ? "All Positive" : neg ? "All Negative" : "Mixed"
}

console.log(fnc(arr)); */


// ✅ 15) Create a function that takes a string as input and returns "Short" if the length of the string is less than or equal to 5, and "Long" if it's greater than 5 characters, using a ternary operator.

// const str = "sohesadfl"

// const fnc = str => {
//     return str.length <= 5 ? "short" : "long"
// }
// console.log(fnc(str));


// --------------------------------------------------------------day ->5  8/3/24--------


// -----------------------> some reduce question

// ✅ 16) Write a function that takes an array of numbers and returns the sum of all the numbers using the reduce function.

/* const numbers = [1, 2, 3, 4, 5];
 const fnc = numbers => numbers.reduce((acc, n) => acc + n, 0);
 console.log(fnc(numbers)); */

//✅ 17) Create a function that takes an array of strings and concatenates them into a single string using the reduce function.

/* const strings = ["Hello", " ", "world", "!"];
const fnc = str => str.reduce((acc, s) => acc + s, )
console.log(fnc(strings)); */

// 18) Write a function that takes an array of numbers and returns the maximum number in the array using the reduce function.

// 19) Create a function that takes an array of objects representing expenses, where each object has a amount property, and returns the total sum of all expenses using the reduce function.

// 20) Write a function that takes an array of words and returns an object where the keys are the words and the values are the number of occurrences of each word in the array, using the reduce function.


// ---------------------------------------------------------------- day ->6 5/3/24------ some questions of indexOf method

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
