// let person = {
//     firstName : 'Jane',
//     lastName : 'Alex',
//     age : 22,
//     email : "johnalex@gmail.com",
//     sayHello(){
//         console.log("Hello my name is " + this.firstName + ' ' + car.brand);
//     },
//     fullName : function(){
//         return this.age + " " + this.email
//     }
// }

// let car = {
//     brand : 'Toyotta',
//     model: 'lexas'
// }
// console.log(person);
// person.sayHello();
// console.log(person.fullName());




// function Student(name, fathername, age, cls, email){
//     this.FullName = name
//     this.FatherName = fathername
//     this.Age = age
//     this.Class = cls
//     this.email = email
//     this.nationality ="Pakistani"

//     }
     



// let student1 = new Student("Ali raza", "Raza Khan", 22, "XII", "aliraza@gmail.com")
// student1.nationality = "Pakistani"



// let student2 = new Student("Mehreen", "Yameen", 22, "XI", "mehreen@gmail.com")
// let student3 = new Student("Neha", "john Alex", 22, "BSCS", "neha21@gmail.com")
// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(Student);


// function Patient(name, age, nameofdisease, contactnumber, symptoms, indentificationmark){
//     this.FullName = name
//     this.Age = age
//     this.nameofdisease = nameofdisease
//     this.ContactName = contactnumber
//     this.symptoms = symptoms
//     this.IndentificationMark = indentificationmark
//     this.nationality = "Indian"
// }

// let patient1 = new Patient("Alia", 23, "typhoid", 1566612, "flu", "lefthand")
// patient1.nationality = "Indian"

// let patient2 = new Patient("Tim", 17, "malaria", 2345644, "nausea", "rightleg")
// let patient3 = new Patient("Rex", 34, "hepatitisA", 1236887, "dizziness", "back")
// console.log(patient1);
// console.log(patient2);
// console.log(patient3);
// console.log(Patient);



let person = {
    name: 'John',
    age: 30,
    greet: function(){
        console.log('Hello, my name is ' + this.name + ' and I am' + this.age + ' years old.');
    }
};
// person.greet()

// let name1 = "age" in person
// console.log(name1);

// let name1 = "email" in person
// console.log(name1);


delete person.age;

console.log(person.age);


