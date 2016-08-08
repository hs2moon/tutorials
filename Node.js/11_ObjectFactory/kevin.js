var movies = require("./movies");

var kevinsMovies = movies();
kevinsMovies.favMovie = "The Dark Knight";
console.log("Kevin's favorite movie is: "+ kevinsMovies.favMovie);