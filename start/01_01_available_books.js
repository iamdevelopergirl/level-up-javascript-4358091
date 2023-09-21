// Write your code here
class BookInventory {
  books = [{
  title: 'Title1',
  author: 'Author1',
  isbn: 'ISBN1',
  numOfCopies: 0
},
{
  title: 'Title2',
  author: 'Author2',
  isbn: 'ISBN2',
  numOfCopies: 1
},
{
  title: 'Title3',
  author: 'Author3',
  isbn: 'ISBN3',
  numOfCopies: 10
},
{
  title: 'Title4',
  author: 'Author1',
  isbn: 'ISBN4',
  numOfCopies: 13
}];

  getAvailability(title) {
    const filteredBook = this.books.find(book => book.title === title);
    if(filteredBook.numOfCopies === 0) {
      return 'out of stock';
    }
    if(filteredBook.numOfCopies < 10) {
      return 'limited stock'
    }
    return 'in stock';
  }

  sell(title, numSold = 1) {
    const isAvailable = this.getAvailability(title);
    if(isAvailable === 'in stock') {
      const bookToSellIndex = this.books.findIndex(book => book.title === title);
      this.books[bookToSellIndex].numOfCopies = this.books[bookToSellIndex].numOfCopies - numSold;
    }
  }

  restock(title, numReStock = 5) {
    const bookToSellIndex = this.books.findIndex(book => book.title === title);
    this.books[bookToSellIndex].numOfCopies = this.books[bookToSellIndex].numOfCopies + numReStock
  }
}

const biObj = new BookInventory();
console.log(biObj.getAvailability('Title1'));
console.log(biObj.getAvailability('Title2'));
console.log(biObj.getAvailability('Title3'));
console.log(biObj.getAvailability('Title4'));
biObj.sell('Title3');
console.log(biObj.books);
biObj.sell('Title1');
console.log(biObj.books);
biObj.restock('Title1');
console.log(biObj.books);


