function sumOfArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;

}
let num=[1,20,39,8,50,6,74,8,99,10];
let holdvalue=sumOfArray(num);
console.log(holdvalue);