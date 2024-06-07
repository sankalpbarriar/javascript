const names=["Sankalp","siddharth","Nikhil","sanku","Amit"];
console.log(names);
names.push("Ketan");
console.log(names);
console.log(names.length);
//to print last element
console.log(names[names.length-1]);
console.log(names.slice(0,4));
//splice function
names.splice(1,3,"team1","team2","team3");
console.log(names);
let lastName=["abc","ggg","hhh","hty"];
let fullName=names.concat(lastName);
console.log(fullName);
for(i=0;i<names.length;i++){
    console.log(names[i]);
}




