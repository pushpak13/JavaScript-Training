//Return function
function add(num1, num2) {
    return num1 + num2;
}
//const sum = add(3, 5);
console.log(add(4,3));


//Arrow function
let text = () => {
    console.log("Welcome to Jungle");
}
text();

//this in JavaScript functions-refer to single object
//simple example
let person = {
    name: "Akash",
    age: 22,
    qualification: "Bsc in Mathematics",
    personInfo: function() {
        console.log(this.name + " is " + this.age + " years old ");//here this refers to object 'person'
    }
}
//for-in loop 
for(let i in person) {
    console.log(person[i]);
}
person.personInfo();

//Constructor function 
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let student = new Student("Raj", 14);
//adding method to student object
student.studentInfo = function() {
    console.log(this.name + " is " + this.age + " years old ");
}
student.studentInfo();
//change property of student object
//student.age = 12;
//Getting student object
console.log(student);
//Getting single property of student object
//console.log(student.name);
