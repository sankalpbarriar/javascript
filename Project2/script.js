//Need to create 3 buttons incremetn,decrement and reset
let count=0;

let value=document.getElementById("value");
// console.log(value);
let btns=document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach(function (item) {
    item.addEventListener("click", function () {
        let style = item.classList;

        if (style.contains("increase")) {
            count++;
        } else if (style.contains("decrease")) {
            count--;
        } else if (style.contains("reset")) {
            count = 0;
        }
        if(count>0){
            value.style.color="Blue";
        }
        else if(count<0){
            value.style.color="Red";
        }
        else{
            value.style.color="Black";
        }

        value.textContent = count;
    });
});