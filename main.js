let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('один фильм', '');
    const b = prompt('оцените', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }  
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if ( personalMovieDB.count < 10 ) {
    alert('просмотрели мало фильмов');
  } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
    alert('Вы классный зритель');
  } else if ( personalMovieDB.count > 30 ) {
    alert('Cool');
  } else {
    alert('error');
  }
}

detectPersonalLevel();

console.log(personalMovieDB);