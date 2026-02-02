const myLibrary = []
const bookModal = document.querySelector('#book-modal');
const newBookButton = document.querySelector('.modal-button');
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

    bookModal.close();
});

let name_ = 'fzljzdfj'
let author_ = 'zldfkmzlkk'
let pages_ = 932;
let read_ = 'Yes';

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

    const cardDiv = book.querySelector('.book-card');
    book.id = bookObj.id;
    cardDiv.dataset.id = a;

    const bookDelete = book.querySelector('.delete-card');
    bookDelete.addEventListener('click', (e) => {
        const cardToRemove = e.target.closest('.book-card');
        const cardId = cardToRemove.dataset.id;
        const idx = myLibrary.findIndex(b => b.id == cardId);
        if (idx !== 1) myLibrary.splice(idx, 1)
        cardToRemove.remove();
    });

    bookshelf.appendChild(book);
}

addBookToLibrary(name_, author_, pages_, read_);