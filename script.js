const myLibrary = []

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