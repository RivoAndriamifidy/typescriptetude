class Person{
    firstName: string
    lastName: string

    constructor(fName: string, lName: string){
        this.firstName = fName
        this.lastName = lName
    }
}

let myPerson = new Person("Rivo", "Andriamifidy")
//let myPerson = new Person()
//myPerson.firstName = "Rivo"
//myPerson.lastName = "Andriamifidy"

console.log(`Bonjour, ${myPerson.firstName} ${myPerson.lastName}`)