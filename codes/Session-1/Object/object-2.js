class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return `Your email is ${this.email}`;
  }

  getName() {
    return `My name is ${this.name}`;
  }
}

let p = new Person('Ashwin', 'ashwin@gmail.com');
p.name;

Object.getPrototypeOf(p);
p instanceof Person;

p.getEmail();
p.getName();

class Engineer extends Person {
  constructor(name, email, skill) {
    super(name, email, skill);

    this.skill = skill;
  }

  getSkill() {
    return `You are a ${this.skill}`;
  }
}

class Teacher extends Person {
  constructor(name, email, skill) {
    super(name, email, skill);

    this.skill = skill;
  }

  getSkill() {
    return `You are a ${this.skill}`;
  }
}

let e = new Engineer('Elon Mask', 'elonmask@gmail.com', 'Engineering');
e.name
e.skill

let t = new Teacher('Einstein', 'einstein@gmail.com', 'Physics');
t.name
t.skill
