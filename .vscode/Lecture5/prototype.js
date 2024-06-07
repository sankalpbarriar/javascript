let userName=function(name,count){
    this.name=name;
    this.count=count;
    this.getcourseCount=function(){
        console.log(`the course count is ${this.count}`);
    };

};
let user1=new userName("Sankalp:",6);
user1.getcourseCount();