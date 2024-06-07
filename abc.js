console.log('Sanku 5.O Barriar');
let a =5;
console.log(a);
let b;                 //undefined
console.log(b);
let c='Sankalp Barriar ';
console.log(c);
let lastName='Barriar';
console.log(lastName);
lastName=5;
console.log(lastName);
let emp=['Sankalp','Ramesh','Rahul','Rohit','Komal','Sangita','Priyanjali','Prerena'];   // Decleration of an Array
for(i=0;i<emp.length;i++){
    console.log(emp[i]);    //Accessing array elements
}
let x=10;
console.log(x++);
// console.log(3===3);
let num=1;
let str='1';
console.log(num===str);       //strict equaltity( both data and value needs to be same)
console.log(num==str);        //loose equality  (only value needs to be same)
let age=19;
let status=(age>=18)?'yes vote':'no vote';
console.log(status);
let marks=18;
if(marks>=90){
    console.log('A');
}
else if (marks>=80){
    console.log('B');
}
else if (marks>=70){
    console.log('C');
}
else if (marks>=60){
    console.log('D');
}
else{
    console.log('E');
}
for(var i=0;i<=5;i++){
    console.log(i);
}


