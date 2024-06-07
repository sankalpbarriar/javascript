//mini program
//function to multiply square of a no. with that number

const callback=(n)=>{
     return n**2;
}
function cube(callback,n){
    return callback(n)*n;
}
console.log(cube(callback,3));

//Set interval()
setInterval(()=>{
    console.log("Hello");},3000);
