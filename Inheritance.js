// function Person(){
//     this.name = 'Jewel';
// }

// function Teacher(){
//     Person.call(this);
//     this.subject = 'Javascript';
// }
// in line 6 inheritance occur by calling [Person.call(this)]

// Teacher.prototype = {
//     email : 'raihanurrahmanjewel@gmail.com',
//     age : 24,
// }

// var teacher = new Teacher();

function Person(name){
    this.name = name;
}

Person.prototype = {
    email : 'raihanurrahmanjewel@gmail.com',
    age : 24,
    print : function(){
        console.log(this.name);
    },
    another : function(){
        console.log('This is an another function');
    }
}

function Student(name, id){
    Person.call(this,name)
    this.id = id;
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.constructor = Student

var student = new Student('jewel', 1234);