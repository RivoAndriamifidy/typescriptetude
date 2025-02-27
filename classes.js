var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    return Person;
}());
var myPerson = new Person("Rivo", "Andriamifidy");
//let myPerson = new Person()
//myPerson.firstName = "Rivo"
//myPerson.lastName = "Andriamifidy"
console.log("Bonjour, ".concat(myPerson.firstName, " ").concat(myPerson.lastName));
