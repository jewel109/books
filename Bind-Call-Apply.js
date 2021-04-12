function printMe(){
    console.log('Hello ' + this.name);
}
//Here 'this' refer to window/global object.  
//so the name property return from window object 
// printMe();
// here this.name returned undefined because no property called 'name' is in window object 
var obj1 = {
    name : 'Jewel',
    age : 24
}
var obj2 = {
    name : 'Sahin',
    age : 25
}

// var binded = printMe.bind(obj1); 

//bind method will joint 'this' with [obj1]. And [this] will 
// then refer the object [obj1]
//Here [binded] return a function . So it need to be called.

// var calledBind = binded();   
// console.log(binded);

// printMe.call(obj1) 
// //Here no need call the [call] like [bind] method. [call] method will immediatly call itself. 
// printMe.call(obj2);