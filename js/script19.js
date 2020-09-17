'use strict';

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log (`I study: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('I finshed my lesson!');
});

function learnJS(lang, callback) {
    console.log (`I study: ${lang}`);
    callback();
}

function done() {
    console.log('I finshed my lesson!');
}

learnJS('JavaScript', done);