                  //SPREAD
//syntax for the spread ...
function sum(x,y,z){
    return x+y-z;
}
let arr=[44,66,8];
let result=sum(...arr);    //it destructures that array
console.log(result);

                     //REST
// it wraps the values into an array
function sums(...arr){
    let sum=0;
    for(let a of arr){
        sum+=a;
    }
    return sum;
}
let value=sums(1,2,3,422,543);
console.log(value);