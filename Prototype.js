// function Person(name, age ){
//     this.name = name;
//     this.age = age;

//     this.print = function(){
//         console.log(this.name, this.age);
//     }
// }
// function Person(name, age ){  
//     this.name = name;         
//     this.age = age;           
                              
// }
// // 'Person' is a constructor // 'Person' is also a Object
// // 'Person' has prototype // 'Person' is a class!


// Person.prototype.print = function(){
//     console.log(this.name, this.age);
// };
// Person.prototype ={   
//     print : function(){
//         console.log(this.name, this.age)
//     },
//     email : 'raihanurrahmanjewel@gmail.com',
//     skill : 'Javascript'
// }
//Inherritance is occured using prototype in javascript

// var p1 = new Person('Jewel', 24);// p1 is a variable having 
// var p2 = new Person('Sahin',25);//object 'Person'

// // console.log(p1);
// // console.log(p2);

// // Person.prototype.email = 'raihanurrahmanjewel@gmail.com';



// // var pp1 = p1.email;
// // pp1;

// // Person.prototype = {
// //     skill : 'Javascript',
// //     email : 'jewelrana176517@gmail.com'//eivabe dile kaj korbe na karon p1 agei declare kora hoese
// // }
// console.log(p1);
// console.log(p2);

// // p1.__proto__.print==p2.__proto__.print
// // true

// // p1.prototype  //there is no prototype in object but __proto__ 
// // undefined     //is present in object cause 

// console.log(Person.prototype











//Prototype is the foundation of Javascript


// let person = {};

// person.name = 'Jewel';
// person.age = 24;

// person.eat = function(){
//     console.log(`person is eating. `)
// };

// person.sleep = function(){
//     console.log(`person is sleeping. `)
// };

// function Person(name, age){
//     let person = {};

//     person.name = name;
//     person.age = age;

//     person.eat = function(){
//         console.log(`person is eating. `)
//     };

//     person.sleep = function(){
//         console.log(`person is sleeping. `)
//     };

//     return person;
// };
// let jewel = Person("jewel",24)
// console.log(jewel); 

const personMethods = {
    eat(){
        console.log(`person is eating. `)
    },
    sleep(){
        console.log(`person is sleeping. `)
    }

};

function Person(name, age){
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = personMethods.eat;
    person.sleep = personMethods.sleep;

    return person;
};
let jewel = Person("jewel",24)
console.log(jewel);