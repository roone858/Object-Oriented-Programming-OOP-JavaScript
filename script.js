function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
Person.prototype.introduce = function () {
  return `Hi, I'am ${this.name}, ${this.age} years old ${this.gender} `;
};
Person.prototype.updateName = function (newName) {
  this.name = newName;
};
const person1 = new Person("Mahmoud Gamal", 25, "Male");
console.log(person1);

console.log(person1.introduce());
person1.updateName("Ahmed Gamal");
console.log(person1.introduce());

/////////// Constructor Inheritance: /////////////////////////////////
function Student(name, age, gender, major) {
  Person.call(this, name, age, gender);
  this.major = major;
}
Student.prototype = Object.create(Person.prototype);
const student1 = new Student("Mariam Adel", 22, "Female", "Computer Silence");
console.log(student1.introduce());

////Polymorphism: ///////////////////////
function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender);
  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.introduce = function () {
  return `Hi, I'am ${this.name},a teacher of ${this.subject}, ${this.age} years old ${this.gender} `;
};

const teacher1 = new Teacher("Ramy Adel", 45, "Male", "Math");

console.log(teacher1.introduce());
/// Encapsulation: //////////////////////////////////////

function Counter() {
  let count = 0;

  this.increment = () => {
    count++;
  };
  this.decrement = () => {
    count--;
  };
  this.getCounter = () => count;
}

const counter = new Counter();

counter.increment();
counter.increment();
console.log(counter.getCounter());
