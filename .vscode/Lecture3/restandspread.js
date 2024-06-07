//REST & SPREAD
//rest
let array=[1,2,3,4,5,6,7,8,9];
let [a,b,...rest]=array
console.log(rest);

//spread
function sum(x,y){
    return x+y;
}
let arr=[5,7];
console.log(sum(...arr));

function sumtwo(...args){       //this args wraps all the values into an array
    let sum=0;
    for(let a of args){
        sum+=a;

    }
    return sum;
}
console.log(sumtwo(1,2,3,4,5,6));