//Hoisting in js --> If we are able to access a function before its decleration then it is called Hoisting
console.log(name);
sum();
var name="Sankalp";
function sum(){
    console.log("hello world"); 
}