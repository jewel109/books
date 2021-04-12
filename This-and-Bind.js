/* 
'this' in a object refers to that object.

If 'this' in  a function and that function is not a part of a object,then 'this' will refer window object. 


*/

// var obj = {
//     name : 'Jewel Rana',

//     print : function(){
//         console.log(this);
//     }
// }

// obj.print()

// function myFunc(){
//     console.log(this);

//     function inner(){
//         console.log(this);
//     }
//     new inner()
// }

// myFunc();



// function add(num){

//     return this.value + num;

// }

// var obj = {
//     value : 39
// }

// var obj2 = {
//     value : 20
// }

// var result = add.bind(obj, 10);
// var r = result()
// r

// var obj = {
//     name : 'Jewel',

//     print : function(){
//         console.log(this.name);
        
//         setTimeout(function(){

//             console.log('Hello! ' + this.name);

//         }.bind(this),2000)
//     }
// }


//FROM THE BOOK SERIES YOU DON'T KNOW JAVASCRIPT

function identify(){
    return this.name.toUpperCase();
}

function speak(){
    var greeting = "Hello , I'm "  + identify(this);
    console.log(greeting);
}

// var me = {
//     name : 'jewel'
// };

var reading= {
    name : "rana"
};

// var p1 = identify.call(me);
var p2 = identify.call(reading);

// speak.call(me);
speak.call(reading);
