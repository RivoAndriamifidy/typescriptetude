"use strict";
class Person {
    // private _firstName: string
    // private _lastName: string
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    // constructor(fName: string, lName: string){
    //     this._firstName = fName
    //     this._lastName = lName
    // }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myPerson = new Person("Rivo", "Andriamifidy");
//let myPerson = new Person()
//myPerson.firstName = "Rivo"
//myPerson.lastName = "Andriamifidy"
console.log(`Bonjour, ${myPerson.firstName} ${myPerson.lastName}`);
