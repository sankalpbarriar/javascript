//ERROR or EXCEPTIONAL  HANDLING


try{
    let firstName="Anurag";                     //this will throw an error
    console.log(firstName+ " " +lastName);
}
catch(err){
    console.log(err.message);        //this will catch the error 
}
finally{
    console.log("Important operation");       //this will finally run so as to not stop the flow of the program
}