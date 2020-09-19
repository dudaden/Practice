'use strict';
const numberOfFilms = +prompt('How many movies did you wached?', '');

const   personalMovieOB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const   a = prompt('The last wached movie?', ''),
        b = prompt('How you will rate it?', ''),
        c = prompt('The last wached movie?', ''),
        d = prompt('How you will rate it?', '');

personalMovieOB.movies[a] = b;
personalMovieOB.movies[c] = d;

console.log(personalMovieOB);