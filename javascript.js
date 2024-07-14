document.addEventListener("DOMContentLoaded", (event) => {
    
    const books = document.getElementById("books");
    let isRead = false;
    let numOfBooks = 0;

    for(let i=0; i<numOfBooks; i++) {
        const book = document.createElement("div");
        book.className = "book";
        books.appendChild(book);

        const name = document.createElement("p");
        name.innerHTML = '"Harry Potter"';
        book.appendChild(name);

        const author = document.createElement("p");
        author.innerHTML = "J.K. Rowling";
        book.appendChild(author);

        const pages = document.createElement("p");
        pages.innerHTML = "999 pages";
        book.appendChild(pages);

        const read = document.createElement("button");
        read.className = "read";
        if(isRead) {
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

    const addBook = document.getElementsByClassName("add");

    addBook.addEventListener("click", function() {
        
    });



  });