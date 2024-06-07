class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get getFirstName(){
        return this.firstName;
    }
}
getfullName=this.firstName+""+this.lastName;
let user1=new User("javascript","developer");
console.log(user1.getFirstName);


