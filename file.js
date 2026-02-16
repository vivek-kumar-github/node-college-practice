// import os from "os";

// const { response } = require("express");

// console.log("Platform ", os.platform());
// console.log("Architecture ", os.arch());
// console.log("Memory", os.freemem());

// const freeMemGB = (os.freemem() / 1024 / 1024 / 1024);

// console.log(freeMemGB);
// console.log("CPU ", os.cpus());

// const functions = require("./modules");

// import { Add, Multi } from "./modules.js";

// const {Add, Multi} = require("./modules");

// console.log("Add ", Add(1, 2));
// console.log("Multiply ", Multi(2, 3));

// const value = require("./counter");
// const funInPage2 = require("./newfile");
// console.log("Value ", value);
// funInPage2();

// //Wrapper class of js files
// (exports, module, require, __dirname, __filename) = () => {
//     //all out code
// }


// const a = () => {
//     b();
//     console.log(`a : a`);
// }

// const b = () => {
//     console.log(`b : b`);
// }

// a();

//Empty stack

// a is pushed
// b is pushed
// b is executed
// b is popped
// a is executed
// a is popped


// const a = () => {
//     b();
//     console.log(`a : a`);
// }

// const b = () => {
//     console.log(`b init`);
//     setTimeout(() => {
//         console.log("b first");
//     }, 100000);
//     setTimeout(() => {
//         console.log("b second");
//     }, 0);
//     console.log(`b ended`);
// };

// a();
// console.log(`Ended`);

// a is pushed
// b is pushed
// b is executed
// Registering callback
// b is popped
// a is executed
// a is popped
// last line is pushed
// last line is executed
// last line is popped

//Stack overload
// const crash = () => {
//     crash();
// }
// crash();

//call stack --> event loop --> registered call back


// const a = () => {
//     b();
//     console.log(`a : a`);
// }

// const b = () => {
//     console.log(`b init`);

//     setTimeout(() => {                     //Micro task lower priority
//         console.log("b first");
//     }, 0);

//     setTimeout(() => {
//         console.log("b second");
//     }, 0);

//     Promise.resolve().then(() => {         //Macro task Higher priority
//         console.log(`b Promise Portion`);
//     });

//     console.log(`b ended`);
// };

// a();
// console.log(`Ended`);


// const a = () => {
//     b();
//     console.log(`a : a`);
//     Promise.resolve().then(() => {
//         console.log(`a 2nd Promise`);
//     });
// }

// const b = () => {
//     console.log(`b init`);

//     setTimeout(() => {                     //Micro task lower priority
//         console.log("b first");
//     }, 0);

//     Promise.resolve().then(() => {         //Macro task Higher priority
//         console.log(`b Promise Portion`);
//     });

//     console.log(`b ended`);
// };

// a();
// console.log(`Ended`);



// const fetchData = new Promise((resolve, reject) => { //Promise does not need to be called it is executed directly
//     const success = false;
//     if (success) {
//         resolve("Data Fetched");
//         console.log("Data fetched log");
//     } else {                                         // Reject case
//         reject("Data Not Found error");              //Reject message error message
//         console.log("Data not found");
//     }
// });

// fetchData.catch((error) => {                       //error variable contains the error message
//     console.log("Error occured", error)
// })



// const login = () => {
//     return Promise.resolve("Login Success");
// };
// const getUser = () => {
//     return Promise.resolve("User Found");
// };
// const getUserName = () => {
//     return Promise.resolve("User Name Found");
// };

// //Traditiona method
// login().then((err, response) => {
//     if (err) {
//         console.log("Error ", err);
//     }
//     getUser().then(() => {
//         getUserName().then(() => {
//             console.log("User name found");
//         });
//     });
// });

// //Chaining method
// login()
//     .then(getUser)         //output of this .then() is input of next .then()
//     .then(getUserName)
//     .then(console.log)
//     .catch((err) => console.log(err));


// Promise.resolve(10)
//     .then((x) => {
//         return x + 10;      //() => () //this automatically returns value inside it                           
//     })                      //() => {} //But here we need to explicitly return the value
//     .then((x) => {          //if we not return from () => {} it will be undefined
//         return x + 20;      //undefined + 20 = NaN
//     })
//     .then(console.log);



// async await
// const sample = async () => {
//     console.log("Started");
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then((json) => console.log(json));
//     console.log("Ended");
// };
// console.log("Satred_____1");
// sample();
// console.log("Started____2");


//Parallel execution
// const sample = async () => {
//     console.log("Started");
//     const func1 = fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//     // .then((json) => console.log(json));
//     const func2 = fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//     // .then((json) => console.log(json));

//     const a = await func1;
//     const b = await func2;

//     console.log("Sample b ", b);
//     console.log("Sample a ", a);
// };

// sample();


//Sequential execution
// const sample = async () => {
//     console.log("Started");
//     const a = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         // .then((json) => console.log(json));
//     const b = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         // .then((json) => console.log(json));

//     console.log("Sample a ", a);
//     console.log("Sample b ", b);
// };
// sample();
