var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this._firstName = fName;
        this._lastName = lName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var myPerson = new Person("Rivo", "Andriamifidy");
//let myPerson = new Person()
//myPerson.firstName = "Rivo"
//myPerson.lastName = "Andriamifidy"
console.log("Bonjour, ".concat(myPerson.firstName, " ").concat(myPerson.lastName));
