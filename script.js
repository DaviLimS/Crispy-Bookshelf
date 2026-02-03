const myLibrary = []
const bookModal = document.querySelector('#book-modal');
const newBookButton = document.querySelector('.modal-button');
const bookForm = document.querySelector('#book-form');
const closeButton = document.querySelector('#close');
const cancelButton = document.querySelector('#cancel');
const addButton = document.querySelector('.add-button');
const bookshelf = document.querySelector('.bookshelf');
const bookCardTemplate = document.querySelector('.book-card-template');

newBookButton.addEventListener('click', () => {
    bookModal.showModal();
});

closeButton.addEventListener('click', () => {
    bookModal.close();
});
cancelButton.addEventListener('click', () => {
    bookModal.close();
})

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const author = document.querySelector('#author').value.trim();
    const pages = parseInt(document.querySelector('#pages').value, 10) || 0;
    const read = document.querySelector('#read').type === 'checkbox' ? document.querySelector('#read').checked ? 'Yes' : 'No' : document.querySelector('#read').value.trim();

    addBookToLibrary(name, author, pages, read)

    bookForm.reset();
    bookModal.close();
});

function Book(name, author, pages, read, id) {
    if(!new.target) {
        throw new Error('You must call this function with the "new" operator before it');
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(name1, author1, pages1, read1) {
    const a = crypto.randomUUID();
    const bookObj = new Book(name1, author1, pages1, read1, a);
    myLibrary.push(bookObj);

    let book = bookCardTemplate.content.cloneNode(true);
    book.querySelector('.title').textContent = `Title: ${bookObj.name}`;
    book.querySelector('.author').textContent = `Author: ${bookObj.author}`;
    book.querySelector('.pages').textContent = `Pages: ${bookObj.pages}`;
    book.querySelector('.read').textContent = `Read: ${bookObj.read}`;
    bookObj.read == 'Yes' ? book.querySelector('.read').style.color = 'Green' : book.querySelector('.read').style.color = 'Red';

    const cardDiv = book.querySelector('.book-card');
    book.id = bookObj.id;
    cardDiv.dataset.id = a;

    const bookDelete = book.querySelector('.delete-card');
    bookDelete.addEventListener('click', (e) => {
        const cardToRemove = e.target.closest('.book-card');
        const cardId = cardToRemove.dataset.id;
        const idx = myLibrary.findIndex(b => b.id == cardId);
        if (confirm('Do you want to delete this book? if you want to reverse this action, you will hae to recreate it')) {
            if (idx !== 1) myLibrary.splice(idx, 1);
            cardToRemove.remove();
        }
        else {
            return
        }
    });

    const readUpdate = book.querySelector(".read");
    readUpdate.addEventListener('click', (e) => {
        if (e.target.textContent.trim() == 'Read: Yes') {
            e.target.innerText = 'Read: No';
            e.target.style.color = 'Red'
        }
        else {
            e.target.innerText = 'Read: Yes';
            e.target.style.color = 'Green';
        }
    });

    bookshelf.appendChild(book);
}
