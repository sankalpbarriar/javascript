//Trim()--> trims all the trailiing spaces from a String

// challenge is to crate such a function that trims the trailing spaces from every string in ehich it is called

String.prototype.trueLength=function(){             //accessing all the string protos 
    console.log(`true length of the string is ${this.trim().length}`);
}

console.log("Hitesh".length);
"Hitesh  ".trueLength();


