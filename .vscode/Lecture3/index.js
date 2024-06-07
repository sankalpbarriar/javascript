//Changing Datatype
//string to number
let fakenum = "25";
let orgNum= Number(fakenum);
console.log(typeof orgNum);
console.log(typeof fakenum);

//number to string

let newnum = 25;
let strnum = String(newnum);
console.log(typeof strnum);
console.log(typeof newnum);

//Destructuring and Spread
//It is a way to unpack an array/object/properties and assign distinct variables
let scivalue=[2.72,3.14,9.81,37,100];
let [e,pi,g,bodytemp,boiling]=scivalue;
console.log(g);

let arrayone=[1,2,3,4,5];
let [a, ,b, ,c]=arrayone;
console.log(b);

