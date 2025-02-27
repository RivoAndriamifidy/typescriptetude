var marks = [15, 17.5, 11, 19, 13.5, 18.5];
var total = 0;
for (var i = 0; i < marks.length; i++) {
    total += marks[i];
}
var average = total / marks.length;
console.log("Mark average ".concat(average));
var cities = ["Casablanc", "Rabat", "Fianaren", "tulearen", "Tana", "Tamataven"];
for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
//simple boule + if
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    if (city == "Casablanc") {
        console.log(city + " Maroc");
    }
    else {
        console.log(city + " Tunisie ou Madagascar");
    }
}
