// First class function

//A Function can be stored in a variable.
 
//A Function can be stored in an arry.

//A Function can be stored as an Object Field or Property.

//We can create a Function as we needed.

//We can pass Function as an arguments.
function print(name, fun){
    return fun(name);// Return is used for returning 
                    //returnig something fron the function.
}

var printMe = print('jewel ', function(name){
    return('Hello ' + name);
});
console.log(printMe);



//We can return a Function from another Function.

