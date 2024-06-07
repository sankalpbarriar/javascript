// arr = [1, 2, 3, 4, 5];
// //map method is used to create a new array based on other array
// const newArr = arr.map((e) => {
//   return e * 2;
// });
// //each element of arr comes inside e
// console.log(newArr);

// //FILTER METHOD
// arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const newArr2 = arr2.filter((e) => {
//   return e % 2 != 0;
// });
// console.log(newArr2);

// //REDUCE METHOD
// arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr3 = arr3.reduce((prev, next) => {
//   return prev + next;
// });
// console.log(newArr3);

//Q-1
function doubleNumbers(arr) {
  const arr1 = arr.map((e) => {
    return e * 2;
  });
  return arr1;
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//Q-2
function stringItUp(arr) {
  const arr2 = arr.map((e) => {
    return e.toString();
  });
  return arr2;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//Q-3
function capitalizeNames(arr) {
  const arr3 = arr.map((e) => {
    return e.replace(e[0], e[0].toUpperCase());
  });
  return arr3;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//Q-4
function namesOnly(arr) {
  const arr4 = arr.map((e) => {
    return e.name;
  });
  return arr4;
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//Q-5
function readyToPutInTheDOM(arr){
    const arr5=arr.map((e)=>{
        return `<h1>${e.name}</h1> ,<h2>${e.age}</h2>`;
    })
    return arr5;
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
