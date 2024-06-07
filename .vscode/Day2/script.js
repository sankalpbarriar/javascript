//switch
//mini app based on user

let user="mentor";
switch (user) {
    case "admin":
        console.log("You have got full access to the course");
        break;
    
    case "mentor":
        console.log("you have got course access");
        break;
    case "student":
        console.log("You have got purchased course access");
        break;

    default:
        console.log("You are a normal user");
        break;
}
const now= new Date();
console.log(now);
// console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMinutes());
console.log(now.getHours());