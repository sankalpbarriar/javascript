// class User{
//     talk(){
//        console.log("hello js");
//     }
// }
// let user1=new User();
// user1.talk();
class User{
    constructor(firstNsme,lastName,email,password){
        this.firstNsme="Javascript";
        this.lastName="tutorial";
        this.email="sankalp@gmail.com";
        this.password="1234454";
    }
    getfullName(){
        const fullName=this.firstNsme+" "+this.lastName;
        return fullName;
    }
}
let user1=new User();
console.log(user1.getfullName());