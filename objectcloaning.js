let src={a:10,
b:20,
c:30};

                               

// let dest={...src};                         //using spread keyword
// console.log(dest)


// let dest={};
// for(let key in src){
//     dest[key]=src[key];                   //using Iteration 
// }
// console.log(dest);



let dest=Object.assign({},src);
console.log(dest);                          //using assign method