'use strict';
const numberOfFilms = +prompt('How many movies did you wached?', '');

const   personalMovieOB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

for (let i = 0; i < 2; i++) {
const   a = prompt('The last wached movie?', ''),
        b = prompt('How you will rate it?', '');

if (a !=null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieOB.movies[a] = b;
        console.log ('done');
}   else {
    console.log('error');
    i--;
    }
}

if (personalMovieOB < 10) {
    console.log("Not too many");
} else if (personalMovieOB.count >= 10 && personalMovieOB.count < 30) {
    console.log("You are classic");
} else if (personalMovieOB.count >= 30){
    console.log("You are movie lover");
} else {
    console.log("Erorr");
}

console.log(personalMovieOB);