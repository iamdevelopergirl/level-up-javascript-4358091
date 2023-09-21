class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
class TechnicalBook extends Book {
  constructor(title, author, isbn, numOfCopies, edition) {
    super(title, author, isbn, numOfCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of the book is ${this.edition}`
  }
}

const javaBook = new TechnicalBook('Head First Java', 'Rodigrez', '1234567', 20, 2);
console.log(javaBook.getEdition());
console.log(javaBook.getAvailability());

