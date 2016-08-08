var Bucky= {
    favFood: "bacon",
    favMovie: ""
};
var Person = Bucky;
Person.favFood = "salad";

console.log(Person.favFood);
