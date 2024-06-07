let arr=[99,5,09,78,1];   //Bubble Sort
let n=5;
for(let i=0; i<n-1; i++){
    for(let j=0; j<n-1; j++){
        if (arr[j] > arr[j + 1])
            {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
    }
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}