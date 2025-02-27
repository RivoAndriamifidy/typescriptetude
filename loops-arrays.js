"use strict";
let marks = [15, 17.5, 11, 19, 13.5, 18.5];
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
let average = total / marks.length;
console.log(`Mark average ${average}`);
let cities = ["Casablanc", "Rabat", "Fianaren", "tulearen", "Tana", "Tamataven"];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
//simple boule + if
for (let city of cities) {
    if (city == "Casablanc") {
        console.log(city + " Maroc");
    }
    else {
        console.log(city + " Tunisie ou Madagascar");
    }
}
//ajouter d'autre ville
cities.push("Mananjary");
cities.push("Manakara");
for (let city in cities) {
    console.log(cities[city]);
}
