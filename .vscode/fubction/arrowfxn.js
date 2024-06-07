let twonumber=(x,y)=>{
    console.log(x,y);

};
twonumber(5,9);

const sumOfAll=(...args)=>{
    let sum=0;
    for(let elements of args){
        sum+=elements;
    }
    return sum;
};
 let ans=sumOfAll(1,2,3,4,5,6,7,8,99,10);
 console.log(ans);
//  const items = [1,2,3,4,5];
// items.splice(1,3);
// console.log(items);