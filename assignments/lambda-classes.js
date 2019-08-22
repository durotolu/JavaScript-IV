// CODE here for your Lambda Classes
class Person {
    constructor (name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

let duro = new Person ("durotolu", 02, 'lag');

class Student extends Person {
    constructor(name, age, location, previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }
    listsSubject () {
        return this.favSubjects;
    }
    PRAssignments (subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class Instructor extends Person {
    constructor (name, age, location, speciality, favLanguage, catchPhrase) {
        super(name, age, location);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`
    }
}

let gabe = new Instructor ('gabriel', 12, 'eu', 'redux', 'JS', 'serotonine')
let dude = new Student ('gabriel', 12, 'eu', 'redux', 'JS', 'serotonine')



class ProjectManagers extends Instructor {
    constructor (name, age, location, speciality, favLanguage, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, speciality, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode (Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
    }
}

let vebra = new ProjectManagers('justinas', 20, 'eur', 'html', 'python', 'gdmn', 'jclass', 'gabe')