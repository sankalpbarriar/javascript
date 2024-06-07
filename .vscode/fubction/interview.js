const arr=["Hitesh",true,false,"anurag",22];
let mynewarray=[];
arr.forEach(element => {
    
    if(typeof(element)=="string"){
        mynewarray.push(element);
    }
    
});
console.log(mynewarray);

//Given an array consisting multiple data types values you need to extract only the number from it and store it in a new array
const myarray=[11,"hitsh",true,55,34];
let newarray=[];
for(let element of myarray){
    if(typeof(element)=="number"){
        newarray.push(element);
    }
}
console.log(newarray); 