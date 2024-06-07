let rectangle={
    length:1,
    bredth:2,
    draw:function(){
        console.log('drawing a rectangle:');
    }
};
function createRectangle(len,bre){
    return rectangle={
    length:len,
    bredth:bre,
    draw(){
        console.log('Drawing a rectangle');
    }

    };
}

object creation using function call
let rectangleObj1=createRectangle(5,2);
let rectangle2=createRectangle(7,9);
let rectangle3=createRectangle(7,7);

function Rectangle(len,bre){
    this.length=len;
    this.bredth=bre;
    this.draw=function(){                //this represents current object
        console.log('drawing');
    }
}

let rectangleObject=new Rectangle(5,4);
rectangleObject.color='Yellow';
let a=10;
let b=a;
a++;
console.log(a);
console.log(b);

let a={ value:10 };
let b=a;
a.value++;
console.log(value.a);
console.log(value.b);





