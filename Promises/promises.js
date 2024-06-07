// new Promise(function (resolve, reject) {
//   //Do an asynchronous task
//   //DB calls ,crypto calls,networks calls
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("promise consumed");
// });

// //resolve is directly connected to .then

// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Async tak 2");
//     res();
//   }, 1000);
// }).then(() => {
//   console.log("Async 2 resolved");
// });

// //sending data to .then through resolve
// const promiseThree = new Promise((res, rej) => {
//   setTimeout(() => {
//     res({ userName: "Chai", email: "chai@example.com" });
//   }, 1000);
// });
// promiseThree.then((user) => {
//   console.log(user);
// });

// //callback hell through chaining
// const promiseFour = new Promise((res, rej) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       res({ userName: "sankalp", password: "1234" });
//     } else {
//       rej("ERROR : Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.userName;
//   })
//   .then((myUser) => {
//     console.log(myUser);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });

// //Handling promises through async await
// const promiseFive = new Promise(function (res, rej) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       res({ userName: "javascript", password: "123@#4" });
//     } else {
//       rej("ERROR : JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive; //it is taking resolve of promiseFive
//     console.log(response);
//   } catch (error) {
//     //it is taking reject of promiseFive
//     console.log(error);
//   }
// }
// consumePromiseFive();

//Fetching datas from API
async function getAllUsers() {
  try {
    const response = await fetch("https://leetcode-api-faisalshohag.vercel.app/sankalp_barriar");
    const data = await response.json();
    console.log(data);
    console.log(data.totalSolved)
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUsers();


//SAME THING USING .then
// fetch('https://jsonplaceholder.typicode.com/users') //PROMISWE
// .then((res)=>{
//     return res.json()
// })
// .then(data=>{
//     console.log(data);
// })
// .catch((error) => {
//     console.log("Error occured");
// })