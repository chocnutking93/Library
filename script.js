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
            },
            {
                title: "Harry Potter and the Philosophers Stone",
                author: "J.K. Rowling",
                pages: "371"
            },
            {
                title: "Harry Potter and the Chamber of Secrets",
                author: "J.K. Rowling",
                pages: "37123"
            }
        ];
        
        const books = BookList;

        books.forEach((book) => Interface.addToBookList(book));

    }

    static addToBookList(book) {
        const list = document.querySelector("#book-list");

        const card = document.createElement('div');

        card.innerHTML = `
        <div class ="single-book">
        <h4>Book Title: ${book.title}
        <h4> Author: ${book.author}
        <h4> # of Pages: ${book.pages}
        </div>
        `;

        list.appendChild(card);
    }

    // delete book
    static deleteBook(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('.table');
        container.insertBefore(div, form)

        setTimeout(()=> document.querySelector('.alert').remove(),3000);
    }

    static clearFields () {
        document.querySelector("#bookList").value ='';
        document.querySelector('#author').value ='';
        document.querySelector('#pages').value ='';

    }
}



document.addEventListener('DOMContentLoaded', Interface.showBooks);

    // Add book

document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault();

    // Get input values
    const title = document.querySelector('#bookList').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    // validate 
    if (title === '' || author === '' || pages === '') {
        Interface.showAlert('Please fill in all fields');
    } else{
    // new book

    const book = new Book(title,author,pages);

    // add book to interface
    Interface.addToBookList(book);

    // clears form after adding
    Interface.clearFields();    
    }

});

// delete book 
document.querySelector('#book-list').addEventListener('click', (e) => {
    Interface.deleteBook(e.target);
});