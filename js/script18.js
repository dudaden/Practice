'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('How many movies did you wached?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many movies did you wached?', '');
   }
}
start();

const   personalMovieOB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

function rememberMyFilms() {
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
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieOB < 10) {
        console.log("Not too many");
    } else if (personalMovieOB.count >= 10 && personalMovieOB.count < 30) {
        console.log("You are classic");
    } else if (personalMovieOB.count >= 30){
        console.log("You are movie lover");
    } else {
        console.log("Erorr");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieOB);
    }
}
showMyDB(personalMovieOB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieOB.genres[i - 1] = prompt(`Your favorite class of the movies ${i}`);
    }
}
writeYourGenres();

// console.log(personalMovieOB);