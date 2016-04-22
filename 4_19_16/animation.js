console.log("animation");

var numbers = [1,2,3,4];
var newNumbers = [];

/*
for (var i = 0; i < numbers.length ; i++){
    newNumbers[i] = numbers[i] * 2;
}
*/

//Using array.map makes this code much more concise 'n stuff
newNumbers = numbers.map(function(number){
    return number * 2;
}) // [2, 4, 6, 8]

//And since numbers.map simply returns an array, we can chain it!
.map(function(number){
    return number + 1;
}); // [3, 5, 7, 9]

console.log("The doubled numbers are", newNumbers);

numbers = [1,2,3,4];
newNumbers = [];

//Filter: removes sometype of thing from a list
for (var i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 !== 0){
	newNumbers[i] = numbers[i] * 2;
    }
} // [2,6]
console.log("The only even doubled numbers are", newNumbers);

numbers = [1,2,3,4]
newNumbers = [];

//Let's use that filer function instead :)
newNumbers = numbers.filter(function(number){
    return (number % 2 !== 0);
}).map(function(number){
    return number*2;
});

console.log("The only even doubled numbers are", newNumbers);
