let myHeroes=["Thor","Spiderman"];
let heropower={
    thor:"hammer",
    spiderman:"sling",
    
    getSpiderpower:function(){
        console.log(`Spidy Poer is ${this.spiderman}`);
    }
}

Object.prototype.sankalp=function(){
    console.log(`Sankalp is present in all the objects`);
}
// myHeroes.sankalp();   //this shows that even the array can access the manipulation of object


Array.prototype.heyArray=function(){                 //creating a function which can return the length of any array
    console.log(`total elements are ${this.length}`);
}



//INHERITENCE

const user={
    name:"top name",
    email:"example@gmail.com"
}
const Teacher={
    makeVideos:"True"
}
//Teacher.__proto__=user;
// Teacher.prototype=user;
Object.setPrototypeOf(Teacher,user);