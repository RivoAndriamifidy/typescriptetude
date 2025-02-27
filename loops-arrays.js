var marks = [15, 17.5, 11, 19, 13.5, 18.5];
var total = 0;
for (var i = 0; i < marks.length; i++) {
    total += marks[i];
}
var average = total / marks.length;
console.log("Mark average ".concat(average));
