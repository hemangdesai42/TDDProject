class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello`;
  }

  visit(person) {
    return `${this.name} visited ${person.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object') throw new TypeError('Clear message');

    const keys = Object.keys(obj);

    if(keys.includes('name') && keys.includes('age')) throw new TypeError('Name and age please');

    const {name, age} = obj;
    this.name = name;
    this.age = age;

  }
}

module.exports = Person;
