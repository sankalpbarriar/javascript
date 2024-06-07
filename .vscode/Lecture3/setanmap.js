                                //SETS

let a=[1,2,3,1,3,2,4,12,3,1,4];
let num= new Set(a);    //Set only contains unique valyes
console.log(num);

for(let i of num){
    console.log(i); 
}
num.add(5);
console.log(num);
num.delete(12);
console.log(num);
console.log(num.has(7));
                                  //MAPS
            //Map holds key value pair where keys can be of any data type
let newmap=new Map();
newmap.set("1","one");
newmap.set(1,"one");            
newmap.set(true,"one");
console.log(newmap);

let city=[["India","delhi"],
["Gujrat","surat"],
["jharkhand","ranchi"]];
let newcity= new Map(city);
console.log(newcity);