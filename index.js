// var x = 10;
//         a();
//         b();
//         console.log(x);

//         function a() {

//                 var x = 10;
//                 console.log(x);
//         }

//         function b() {

//                 var x = 100;
//                 console.log(x);
//         }


// Lexical Scope: In JavaScript
// function outerFunction() {
//         var outerVar = 10;
        
//         function innerFunction() {
//           console.log(outerVar); // innerFunction has access to outerVar
//         }
        
//         return innerFunction;
//       }
      
//       var closure = outerFunction();
//       closure(); // Outputs 10 because innerFunction still has access to outerVar
      

// // Use Cases: Closures
// function counter() {
//         var count = 0;
        
//         return function() {
//           count++;
//           console.log(count);
//         };
//       }
      
//       var increment = counter();
//       increment(); // Outputs 1
//       increment(); // Outputs 2


//       //this is use of Closures
//       function x(){
//         var a = 7;
//         function y(){
//                 console.log(a);
//         }
//         return y;
//       }

//       var z = x();
//       console.log(z); //it reeturns the function y(){ ...}



      //closures example
//       function x(){
//         for(var i = 1; i<=5; i++) { //use let for run correctly
//                 setTimeout(function (){
//                         console.log(i);
//                 }, i * 1000);
//         }
//         console.log('Done');
//       }

//       x(); // it will print lways to the console 6 6 6 6 6 
      //if you use i with let variable than it works and if you want to use with var metjod than it show always 6


      //closures example to use with var
//       function x(){
//         for(var i = 1; i<=5; i++) { 
//                 function closure(i){
//                         setTimeout(function (){
//                                 console.log(i);
//                         }, i * 1000);
//                 }
//                 closure(i);
//         }
//         console.log('Done');
//       }
//       x();
   

      //another example 
//       class Counter {
//         constructor() {
//                 var count = 0;
//                 this.incrementCounter = function () {
//                         count++;
//                         console.log(count);
//                 };
//                 this.decrementCounter = function () {
//                         count--;
//                         console.log(count);
//                 };
//         }
// }
//       var counter1 = new Counter();
//       counter1.incrementCounter();
//       counter1.incrementCounter();
//       counter1.decrementCounter();





// Things learned:
// 1.  What is Function Statement ?
// A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
//       For Ex  -  function xyz(){
//                             console.log("Function Statement");
//                        }

// 2.  What is Function Expression ?
// A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
//       For Ex - var a = function(){
//                             console.log("Function Expression");
//                     }

// 3.  What is Anonymous Function ?
// A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
//       For Ex - function(){
//                      }

// 4.  What is Named Function Expression ?
// A.  A function with a name is known as Named Function Expression.
//       For Ex - var a = function xyx(){
//                             console.log("Names Function Expression");
//                      }

// 5.  Difference b/w Parameters and Arguments ?
// A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
//        For Ex - function ab( param1, param2 ){
//                               console.log("
//                       }
//        & When we call this function & pass a variabel in this ( ) that is our Arguments
//        For Ex - ab( 4, 5 );

// 6.  What is First Class Function Or First class citizens?
// A.   The Ability of use function as value,
// *     Can be passed as an Argument,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
//        For Ex - var b = function(param){
//                              return function xyz(){
//                                      console.log(" F C F ");
//                              }
//                      } 

// 7. Function are heart of JS. They are called first class citizens or first 
// class functions because they have the ability to be stored in the variables, passed as 
// parameters and arguments. They can also be returned in the function.







//function statement or function Declaration is same thing
// :-- this way of creating a function is known as a function statement.
//you can call this function before declaration
// example-
// function a(){
//         console.log('a called');
// }
// a();

//function expression
// :-- this way of creating a function to store it in a variable is known as a function expression.
////you cann't call this function before declaration like here: b();
//example-
// var b = function(){
//         console.log('b called');
// }
// b();

//anonyous function 
//var b = function(){
//         console.log('b called');
// } here function(){ }
// is an anonyous function, we can say in simple word function is withpout function name.


//name function expression 
// var x = function xyz(){
//         console.log('xyz called');
// }
// function stored in variable and that have own name that is called name function expression


//what is parameter or Argument.?
// example
// function addition (parameter1, parameter2) { // which is passed directly in function is called parameter.
//         return parameter1 + parameter2;
// }
// console.log(addition(1,2)); // which is passed by calling function is called argument.


// first class function in javascript 
// The Ability of use function as value,
// *     Can be passed as an Argument,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
//        For Ex - var b = function(param){
//                              return function xyz(){
//                                      console.log(" F C F ");


// Pass Functions as Arguments:
// function doSomething(callback){
//       console.log("doSomething called");
//       callback();
// }
// function sayHi (){
//       console.log("sayHi called");
// }
// doSomething(sayHi);
// // Return Functions from Functions:
// function first(multiple) {
//       return function (number){
//             return multiple * number;
//       };
// }
// var multiply = first(2); // console.log(multiply);
// console.log(multiply(5));
// // Assign Functions to Variables:
// var sayHello = function () {
//       console.log('Say Hello');
// }
// sayHello();
// // Create Anonymous Functions (Function Expressions):
// const add = function (x, y){
//       return x + y;
// }
// const result = add(5,6);
// console.log(result);


//callback function in javascript
//A callback function in JavaScript is a function that is
//  passed as an argument to another function and is typically executed after some 
//  asynchronous operation has completed or as a response to an event.
      // setTimeout(function (){
      //       console.log('setTimeout');
      // }, 5000);

      // function x(y){
      //       console.log('x');
      //       y();
      // }
      // x(function y(){
      //       console.log('y');
      // });      


//addEventListener in javascript
// addEventListener is a method in JavaScript that allows you to attach event handlers to
//  HTML elements. It is commonly used to listen for specific events (like clicks, mouse
// movements, keypresses, etc.) on web pages and execute JavaScript code in response to 
// those events. 

// document.getElementById("clickMe").addEventListener('mouseover', function() {
//       // Code to execute when the mouse hovers over the button
//       clickMe.style.backgroundColor = 'yellow';
//     });
    
//     document.getElementById("clickMe").addEventListener('mouseout', function() {
//       // Code to execute when the mouse leaves the button
//       clickMe.style.backgroundColor = 'red';
//     });
    

      // function addEventListener(){
      //       var count = 0;
      //       document.getElementById('clickMe').addEventListener('click', function(){
      //       clickMe.style.backgroundColor = "green";
      //       console.log('Button Clicked', ++count);
      //       });     
      // }
      // addEventListener();



//       console.log('Start');

// setTimeout(function() {
//   console.log('Inside setTimeout callback');
// }, 1000);

// console.log('End');     


//heigher order function
// Function that takes another function as argument(callback function) is known as Higher order functions.
// It is this ability that function can be stored, passed and returned,  they are called first class citizens.

// const radius = [5,7,9,13];

// const calculateArea = function (radius) {
//       const output = [];
//       for (let i = 0; i < radius.length; i++) {
//             output.push(Math.PI * radius[i] * radius[i]);
//       }
//       return output;
// };

// console.log(calculateArea(radius));

// const calculateCicumference = function (radius) {
//       const output = [];
//       for (let i = 0; i < radius.length; i++) {
//             output.push(2 * Math.PI * radius[i]);
//       }
//       return output;
// };

// console.log(calculateCicumference(radius));


// const calculateDiameter = function (radius) {
//       const output = [];
//       for (let i = 0; i < radius.length; i++) {
//             output.push(2 * radius[i]);
//       }
//       return output;
// };

// console.log(calculateDiameter(radius));
//you can optimize this code to manage easy debugging
//example how can we make easier to calculate

const radius = [5, 6, 7, 8];

const area = function (radius) {
      return Math.PI * radius * radius;
};

const diameter = function (radius) {
      return 2 * radius;
}

const cicumference = function (radius) {
      return 2 * Math.PI * radius;
}

const calculate = function (radius, logic) {
      const output = [];
      for (let i = 0; i < radius.length; i++) {
            output.push(logic(radius[i]));
      }
      return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, cicumference));


