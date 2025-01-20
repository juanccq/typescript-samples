interface Book {
  id: number,
  title: string,
  author: string,
  publishedDate: string
}


function logMethod(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    try {
      const result = originalMethod.apply(this, args);
      console.log(`${key} returned: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      if(error instanceof Error) {
        console.error(`Error in ${key} ${error.message}`);
        return null
      }
    }
  };

  return descriptor;
}

function validateBook(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    try {
      const [book] = args;
      if(!book.title && !book.author && !book.publishedDate) {
        throw new Error('Invalid input. At least one field (title, author or published date) must be provided');
      }

      return originalMethod.apply(this, args);
    } catch (error) {
      if( error instanceof Error) {
        console.error('vlaidation failed');
        
      }
    }
  }

  return descriptor;
}

function getUserInput(prompt: string): string {
  const readLineSync = require('readline-sync');
  return readLineSync.question(prompt);
}

function displayError(message: string) {
  console.error(`Error ${message}`);
}

class BookManager<T extends Book>{
  private books: T[] = [];

  @logMethod
  @validateBook
  addBook(book: T): void {
    if( book ) {
      this.books.push(book);
    }
  }

  @logMethod
  updateBook(id: number, updatedBook: Partial<T>): void {
    try {
      const index = this.findBookIndexById(id);
      if(index !== -1) {
        this.books[index] = { ...this.books[index], ...updatedBook}
      }
      else {
        console.error(`Book not found with ID ${id}`);
      }
    } catch (error) {
      
    }
  }

  @logMethod
  deleteBook(id: number): void {
    try {
      const index = this.findBookIndexById(id);
      if(index !== -1) {
        const deletedBook = this.books.splice(index, 1)[0];
      }
      else {
        console.error(`Book not found with ID ${id}`);
        
      }  
    } catch (error) {
      
    }
    
  }

  @logMethod
  listBooks(): T[] {
    this.books.forEach((book) => {
      console.log(`${book.id}: ${book.title} by ${book.author}`);
      
    });

    return this.books;
  }

  private findBookIndexById(id: number): number {
    return this.books.findIndex((book) => book.id === id);
  }
}

function main(): void {
  const bookManager1 = new BookManager<Book>();

  while (true) {
    console.log(`\nOptions: `);
    console.log(`1. Add book:`);
    console.log(`2. Update book:`);
    console.log(`3. Delete book:`);
    console.log(`4. List books:`);
    console.log(`5. Exit:`);

    const choice = parseInt(getUserInput('Enter your choice: '), 10);

    switch (choice) {
      case 1: 
        const newBook: Book = {
          id: bookManager1.listBooks().length +1,
          title: getUserInput('Enter the book title: '),
          author: getUserInput('Enter the books author: '),
          publishedDate: getUserInput('Enter the published date; ')
        }

        bookManager1.addBook(newBook);
        break;

      case 2:
        const idToUpdate = parseInt(getUserInput('Enter the book ID to update: '), 10);

        const updatedBook: Partial<Book> = {
          title: getUserInput('Enter the updated title: (leave emtpy to skip) '),
          author: getUserInput('Enter the updated author: (leave emtpy to skip) '),
          publishedDate: getUserInput('Enter the updated date: (leave emtpy to skip) '),
        };

        bookManager1.updateBook(idToUpdate, updatedBook);
        break;
      
      case 3:
        const idToDelete = parseInt(getUserInput('Enter the book ID to delete: '), 10);

        bookManager1.deleteBook(idToDelete);
        break;
      
      case 4:
        bookManager1.listBooks();
        break;
      
      case 5:
        console.log('Exiting...');
        process.exit(0);

      default: 
        displayError('Invalid choice. Please choose a valid option')
    }
  }
}

main();