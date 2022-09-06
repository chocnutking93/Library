class Book {
    constructor(title,author,pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Interface {
    static showBooks() {
        const BookList = [
            {
                title: "Harry Potter and the Prisoner of Azkaban",
                author: "J.K. Rowling",
                pages: "371"
            }
        ];
        
        const books = BookList;

        books.forEarch((book) => Interface.addToBookList(book));
    }

    static addToBookList(book) {
        
    }
}
