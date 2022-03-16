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

// rememberMyFilms();

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

// detectPersonalLevel();

// альтернатива
// function showMyDB() {
//   if (personalMovieDB.privat === false) {
//     console.log(personalMovieDB);
//   } else {
//     console.log('error');
//   }
// }

// showMyDB();



function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  } else {
    console.log('error');
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    // const genre = prompt(`ваш любимый жанр ${i}`);
    // personalMovieDB.genres[i - 1] = genre;

    personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр ${i}`); //альтернатива
  }
}

writeYourGenres();


const options = {
  name: 'test',
  height: 1024,
  width: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

console.log(Object.keys(options).length);

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`свойство ${key} имеет значение ${options[key]}`);
  }
};