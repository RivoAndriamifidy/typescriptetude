let marks: number[] = [15, 17.5, 11, 19, 13.5, 18.5]

let total: number = 0
for (let i = 0; i<marks.length; i++){
    total += marks[i]
}

let average: number = total / marks.length
console.log(`Mark average ${average}`)

let cities: string[] = ["Casablanc", "Rabat", "Fianaren", "tulearen", "Tana", "Tamataven"];

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i])
}

//simple boule + if
for (let city of cities) {
    if (city == "Casablanc") {
        console.log(city + " Maroc")
    }else{
        console.log(city + " Tunisie ou Madagascar")
    }
}