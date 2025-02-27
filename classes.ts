class Person{
    // private _firstName: string
    // private _lastName: string

    constructor(private _firstName: string, private _lastName: string){
        
    }
    // constructor(fName: string, lName: string){
    //     this._firstName = fName
    //     this._lastName = lName
    // }

    public get firstName():string {
        return this._firstName
    }
    public set firstName(value: string) {
        this._firstName = value
    }
    public get lastName(): string {
        return this._lastName
    }
    public set lastName(value: string) {
        this._lastName = value
    }
}

let myPerson = new Person("Rivo", "Andriamifidy")
//let myPerson = new Person()
//myPerson.firstName = "Rivo"
//myPerson.lastName = "Andriamifidy"

console.log(`Bonjour, ${myPerson.firstName} ${myPerson.lastName}`)