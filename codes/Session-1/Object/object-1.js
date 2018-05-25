var x = {};

Object.getPrototypeOf(x);

x.__proto__;

// x -> Object -> null

x.toString()

x.__proto__.__proto__;

var y = [];

y.__proto__

// x -> Array -> Object -> null

y.__proto__

y.__proto__.__proto__

y.__proto__.__proto__.__proto__

y.__proto__ === Array.prototype
y.__proto__.__proto__ === Object.prototype

OR

Array.prototype.isPrototypeOf(y);
Object.prototype.isPrototypeOf(Array);

OR

y instanceOf Array
y instanceOf Object
Array instanceOf Object

Object instanceOf Array // false



function Person(name, email) {
  this.name = name;
  this.email = email;

  this.getEmail = function() {
    return `Your email is ${this.email}`;
  }
}

let p = new Person('Ashwin', 'ashwin@gmail.com');
p.name;

Object.getPrototypeOf(p);
p instanceof Person;

Person.prototype.getName = function() {
  return `My name is ${this.name}`;
}

p.getEmail();
p.getName();

function Engineer(name, email, skill) {
  Person.call(this, name, email);
  this.skill = skill;
}

function Teacher(name, email, skill) {
  Person.call(this, name, email);
  this.skill = skill;
}

let e = new Engineer('Elon Mask', 'elonmask@gmail.com', 'Engineering');
e.name
e.skill

let t = new Teacher('Einstein', 'einstein@gmail.com', 'Physics');
t.name
t.skill




function Person(name, email) {
  this.name = name;
  this.email = email;

  this.getEmail = function() {
    return `Your email is ${this.email}`;
  }
}

Person.prototype.getName = function() {
  return `My name is ${this.name}`;
}

function Engineer(name, email, skill) {
  Person.call(this, name, email);
  this.skill = skill;
}

Person.prototype.getSkill = function() {
  return `Your skill is ${this.skill}`;
}

Engineer.prototype = Object.create(Person.prototype);

let e = new Engineer('Elon Mask', 'elonmask@gmail.com', 'Engineering');
e.name
e.getEmail();
e.getName();


