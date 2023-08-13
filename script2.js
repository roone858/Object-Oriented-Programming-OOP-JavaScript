class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.isEngineRunning = false;
  }
  start() {
    this.isEngineRunning = true;
    return "the car starting ....";
  }
  stop() {
    this.isEngineRunning = false;
    return "the car stopped ....";
  }
  honkHorn() {
    return "Honk! Honk!";
  }
}
const car1 = new Car("BMW", "X6", "2020", "Red");
// console.log(car1.make);
// console.log(car1.start());
// console.log(car1.isEngineRunning);
// console.log(car1.stop());
// console.log(car1.honkHorn());
// console.log(car1.isEngineRunning);
//////////////////

// class Vehicle {
//   constructor(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;
//   }

//   drive() {
//     console.log(`Driving the ${this.type}
//     with ${this.wheels} wheels.`);
//   }
// }

// class Car extends Vehicle {
//   constructor(vendor) {
//     super("car", 4);
//     this.vendor = vendor;
//   }
// }

// const car1 = new Car("BMW");
// console.log(car1);

// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   getName() {
//     return this._name;
//   }

//   updateName(newName) {
//     isNaN(newName)
//       ? (this._name = newName)
//       : console.log("please enter valid name");
//   }

//   getAge() {
//     return this._age;
//   }

//   updateAge(newAge) {
//     isFinite(newAge)
//       ? (this._age = newAge)
//       : console.log("please enter valid age");
//   }
// }
// const person1 = new Person("Mahmoud", 25);
// console.log(person1._age);
// person1._age = 20;
// console.log(person1._age);

// Abstraction: Design a class called BankAccount
// that abstracts the basic functionalities of abank account.
// It should have methods like deposit(), withdraw(), and getBalance().
// Hide the underlying data and implementation details from the user.
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(value) {
    this.balance += value;
  }
  set withdraw(value) {
    this.balance -= value;
  }
  get getBalance() {
    console.log(this.balance);
  }
}
const acc1 = new BankAccount(5000);
// acc1.deposit(100);

// acc1.getBalance;
// acc1.withdraw=(20);
// acc1.getBalance;
// console.log(acc1.balance);
// console.log(typeof Math);
// console.log(Math);
// console.log(typeof Date);
// console.log(Date.prototype);

// Create a class called `Library`
//that is composed of an array of `Book` objects.
// The `Library` class should have methods to add books,
// remove books, and list all the books in the library.
class Book {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

class Library {
  constructor(books = []) {
    this.books = books;
  }
  addBook(id, title) {
    const newBook = new Book(id, title);
    this.books.push(newBook);
  }
  removeBook(id) {
    this.books = this.books.filter((book) => id != book.id);
  }
  get listAllBooks() {
    console.log("all");
    this.books.forEach((book) => console.log(book));
  }
}
const lib = new Library();
console.log(lib.books);
lib.addBook(1, "title");
lib.addBook(2, "title2");
lib.listAllBooks;

lib.removeBook(1);
lib.listAllBooks;

// Interfaces and Contracts:
//Define an interface Shape with methods like calculateArea() and calculatePerimeter().
//Then create classes like Circle and Rectangle
//that implement the Shape interface and provide their own implementations for the methods.
class Shape {
  calculateArea() {
    throw new Error("Subclasses must implement calculateArea method.");
  }
  calculatePerimeter() {
    throw new Error("Subclasses must implement calculatePerimeter method.");
  }
}
class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }
  calculateArea() {
    console.log(`Area of Rectangle = ${this.height * this.width}`);
  }
  calculatePerimeter() {
    console.log(`Area of Rectangle = ${(this.height + this.width) * 2}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
const square = new Rectangle(10, 10);
square.calculateArea();
square.calculatePerimeter();
