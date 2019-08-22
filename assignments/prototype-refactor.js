/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


    //TASK 1
  
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    greet() {
        return 'Hello my name is ' + this.name + ' I am ' + this.age + ' years old';
    }
    eat() {
        this.stomach.push(edibles);
    }
    poop() {
        this.stomach = [];
    }
}


    //TASK 2
  class Car {
      constructor (modelName, make) {
        this.modelName = modelName;
        this.make = make;
        this.odometer = 0;
      }
      drive() {
        return this.odometer = this.odometer + Number(distance);
      }
      crash() {
        return "I crashed at " + this.odometer + " miles!"
      }
      repaired() {
        return "Can be driven again";
      }
      reset() {
          return this.odometer = 0;
      }
  }
  
  
    //TASK 3

class Baby extends Human {
    play() {
        return `${this.name} plays too much`
    }
}
  
    
    //TASK 4


  class Devices {
      constructor(make, storage, size) {
        this.make = make;
        this.storage = storage;
        this.size = size;
      }
      browse() {
        return `${this.name} can browse`;
      }
      pocket() {
        if (this.size === 'mobile' || this.size === 'tablet')
        {
          return `${this.make} can fit in your pocket or purse`;
        } return `not pocket sized`;
      }
  }
