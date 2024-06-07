//FUNCTION 
//function without a parameter

function Squ(){
    let x=5;
    let Sq=x*x;
    console.log(Sq);
}
Squ();

// function with  a parameter

function add(x,y,z){
    let sum=x+y+z;
    console.log(sum);
}
add(1,5,3);

function printFullname(firstname,lastname){
    let fullname=firstname+" "+lastname;
    return fullname;
}
let fn=printFullname("Sankalp","Barriar");
console.log(fn);

// function to find area of circle
function areaOfCircle(r){
    let area =Math.PI*r*r;
    return area;
}
let fx=areaOfCircle(5);
console.log(fx);