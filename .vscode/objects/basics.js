// let userDetails={
//     firstName:"Sankalp",
//     lastName:"Barriar",
//     role:"admin",
//     loginCount:25,
// };
// console.table(userDetails);
// console.log(userDetails.firstName);
// userDetails.loginCount=27;
// console.table(userDetails);

//mini program
// let userDetailsCourse={
//     firstName:"Anurag",
//     lastName:"Tiwari",
//     role:"strudent",
//     googleLogib:true,
//     courseList:[],
//     buyCourse:function(coursename){
//         this.courseList.push(coursename);
//     },
//     getcoursecount:function(){
//         return `${this.firstName}is enrolled in ${this.courseList.length} courses`;       //method to know the no. of coursecount
//     },
// };
// console.log(userDetailsCourse.firstName);
// userDetailsCourse.buyCourse("Java course");
// console.log(userDetailsCourse.courseList);

// userDetailsCourse.buyCourse("React JS");
// console.log(userDetailsCourse.courseList);
// console.log(userDetailsCourse.getcoursecount());
let userDetails={
    firstName:"Sankalp",
    lastName:"Barriar",
    role:"admin",
    loginCount:25,
};
for(let x in userDetails){
    // console.log(x);
    console.log(`the key is ${x} and the value is ${userDetails[x]}`);
}

//MAP
let numbers=[1,2,3,4,5,6];
let srore=numbers.map((num)=>num*num);
console.log(srore);

let names=["sankalp","avinash","ketan","nikhil"];
let store=names.map((naam)=>naam.toUpperCase());
console.log(store);

let countries=["India","canada","Kenya","Japan"];
let score=countries.filter((country)=>country.includes("an"));
console.log(score);

