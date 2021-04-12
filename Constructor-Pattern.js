/*



*/




function Person(name, email){
    // console.log('Hello!');
    this.name = name;
    this.email = email;
    this.print = function(){
        console.log('Name '+ this.name);
    }
}
 
//Prototype

Person.prototype = {
    age : 24,
    address: {
        district : 'Kurigram',
        upozila : 'Bhurungamari',
        union : 'Sonahut'
    }
}

var p1 = new Person('Jewel ', 'raihanurrahmanjewel@gmail.com');
// console.log(p1);
// console.log(p1.name); 
console.dir(p1)
//[p1] is a Object. 

var p2 = new Person('rana ' ,'jewelrana176517@gmail.com')
var p3 = new Person('raihanur ','jewelrana140990@gmail.com')
var people = [p1, p2, p3];
// console.log(people);

// people.forEach(function(Person){
//     // console.log(Person.name);
//     Person.print();
// })

// for (var props in p1){
//     console.log('properties = '+ props);

// }
// console.log(Person.constructor);