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