'use strict';

const   personalMovieOB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
            personalMovieOB.count = +prompt('How many movies did you wached?', '');

            while (personalMovieOB.count == '' || personalMovieOB.count == null || isNaN(personalMovieOB.count)) {
                personalMovieOB.count = +prompt('How many movies did you wached?', '');
            }
        },
        rememberMyFilms: function() {
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
        },
        detectPersonalLevel: function() {
            if (personalMovieOB < 10) {
                console.log("Not too many");
            } else if (personalMovieOB.count >= 10 && personalMovieOB.count < 30) {
                console.log("You are classic");
            } else if (personalMovieOB.count >= 30){
                console.log("You are movie lover");
            } else {
                console.log("Erorr");
            }
        },
        showMyDB: function() {
            if (!hidden) {
                console.log(personalMovieOB);
            }
        },
        toggleVisibleMyDB: function() {
            if (personalMovieOB.privat) {
                personalMovieOB.privat = false;
            
        } else {
            personalMovieOB.privat = true;
            }
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++){
                let genre = prompt(`Your favorite class of the movies ${i}`);
                if (genre === '' || genre == null) {
                    console.log('Incorrect data or nothing');
                    i--;
                } else {
                    personalMovieOB.genres[i - 1] = genre;
                }
            }
               personalMovieOB.genres.forEach((item, i) => {
                    console.log(`Favorite class ${i + 1 } - this is ${item}`);
            });
        }
};

// console.log(personalMovieOB);