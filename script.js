const myLibrary = []
const bookModal = document.querySelector('#book-modal');
const newBookButton = document.querySelector('.modal-button');
const closeButton = document.querySelector('#close');
const cancelButton = document.querySelector('#cancel');
// submit handled on the form to allow HTML5 validation to run
const bookForm = document.querySelector('#book-form');

bookModal.showModal(); //for tests

newBookButton.addEventListener('click', () => {
    bookModal.showModal();
});

closeButton.addEventListener('click', () => {
    bookModal.close();
});
cancelButton.addEventListener('click', () => {
    bookModal.close();
})

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const author = document.querySelector('#author').value.trim();
    const pages = parseInt(document.querySelector('#pages').value, 10) || 0;
    const read = document.querySelector('#read').type === 'checkbox' ? document.querySelector('#read').checked ? 'Yes' : 'No' : document.querySelector('#read').value.trim();

    // TODO: create Book and add to library
    bookModal.close();
});

let name1 = 'fzljzdfj'
let author1 = 'zldfkmzlkk'
let pages1 = 932;
let read1 = 'Yes';

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

function addBookToLibrary() {
    let a = crypto.randomUUID();
    myLibrary.push(new Book(name1, author1, pages1, read1, a))
}

function removeBookFromLibrary() {
}