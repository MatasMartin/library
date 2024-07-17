
let numOfBooks = 0;

class theBook {
    constructor(bookName, bookAuthor, bookPages, bookYouRead) {
        this.name = bookName.value;
        this.author = bookAuthor.value;
        this.pages = bookPages.value;
        this.youRead = bookYouRead.checked;
    }
}


function createBooks(theBooks) {

    const books = document.getElementById("books");

    for(let i=0; i<numOfBooks+1; i++) {
        const book = document.createElement("div");
        book.className = "book";
        books.appendChild(book);

        const name = document.createElement("p");
        name.innerHTML = theBooks[numOfBooks].name;
        book.appendChild(name);

        const author = document.createElement("p");
        author.innerHTML = theBooks[numOfBooks].author;
        book.appendChild(author);

        const pages = document.createElement("p");
        pages.innerHTML = theBooks[numOfBooks].pages;
        book.appendChild(pages);

        const read = document.createElement("button");
        read.className = "read";
        if(theBooks[numOfBooks].youRead) {
            read.id = "read";
        }
        const readText = document.createElement("p");
        readText.innerHTML = "READ";
        read.appendChild(readText);
        book.appendChild(read);

        const remove = document.createElement("button");
        remove.className = "remove";
        const removeText = document.createElement("p");
        removeText.innerHTML = "REMOVE";
        remove.appendChild(removeText);
        book.appendChild(remove);


    }

}

function buttonFunction() {

    const black = document.getElementsByClassName("black")[0];
    const bookScreen = document.getElementsByClassName("bookScreen")[0];

    black.classList.toggle("move");
    bookScreen.classList.toggle("move");
    console.log("clicked");
}

function submitFunction() {

    const bookName = document.getElementById("name");
    const bookAuthor = document.getElementById("author");
    const bookPages = document.getElementById("pages");
    const bookYouRead = document.getElementById("youRead");

    
    const theBooks = [];

    theBooks[numOfBooks] = new theBook(bookName, bookAuthor, bookPages, bookYouRead)

    
    //console.log(theBooks[numOfBooks].name);

    if(theBooks[numOfBooks].name == "" || theBooks[numOfBooks].author == "" || theBooks[numOfBooks].pages < 0 || theBooks[numOfBooks].pages == "") {
        alert("Please fill out the form!")
    } else {
        createBooks(theBooks);
        buttonFunction();

        bookName.value = '';
        bookAuthor.value = '';
        bookPages.value = '';
        bookYouRead.checked = false;
    }

    


}

document.addEventListener("DOMContentLoaded", function() {
    
    

    const addBook = document.getElementsByClassName("add")[0];
    const submit = document.getElementById("submit");


    submit.addEventListener("click", submitFunction);
    addBook.addEventListener("click", buttonFunction);

  });