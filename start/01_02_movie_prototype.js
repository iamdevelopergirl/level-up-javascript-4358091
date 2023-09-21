// Write your code here
const MovieInventory = {
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in the year ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

class MovieClass {
  constructor(title, genre, director, releaseYear, rating) {
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
}

function MovieFunction(title, genre, director, releaseYear, rating) {
  this.title = title;
  this.genre = genre;
  this.director = director;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

// Object.assign(MovieClass.prototype, MovieInventory);
// Object.assign(MovieFunction.prototype, MovieInventory);

// in this case, each method in object has to be added seperately. 
MovieClass.prototype.getOverview = MovieInventory.getOverview;
MovieFunction.prototype.getOverview = MovieInventory.getOverview;

const vikramMovie = new MovieClass('Vikram', 'action', 'Lokesh Kanagaraj', '2022', '9.0');
console.log(vikramMovie.getOverview());

const jailerMovie = new MovieClass('Jailer', 'action', 'Nelson', '2023', '8.0');
console.log(jailerMovie.getOverview());


