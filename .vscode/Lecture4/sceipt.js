//Call stack in js

var count=10;
var counttwo=07;
function fullName(){
    var firstName="Anurag";
    var lastName="tiwari";
    console.log(firstName,lastName);
}
fullName();


// code from scipt.js
var a=10;
var b=20;
function ab(){
    var aa=10;
    var bb=20;
    console.log(aa+bb);
    function abc(){
        console.log("Hello World");
    }
    abc();
    }
    ab();
