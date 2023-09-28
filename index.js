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
      function x(){
        for(var i = 1; i<=5; i++) { 
                function closure(i){
                        setTimeout(function (){
                                console.log(i);
                        }, i * 1000);
                }
                closure(i);
                
        }
        console.log('Done');
      }

      x();   