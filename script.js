const books = document.getElementById("books");
const addBookBtn = document.getElementById("add-book")
const addBackground = document.getElementById("add-background")
const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read")

var myLibrary = [
    
];

function Book() {
    books.innerHTML = ""
    for(let id = 0;id<myLibrary.length;id++){
        books.innerHTML += `<div id="${id}" class='book'><div class='title'>'${myLibrary[id].title}'</div><div class='author'>${myLibrary[id].author}</div><div class='pages'>${myLibrary[id].pages} Pages</div><button id="${id}read" onclick="document.getElementById('${id}read').classList.toggle('read'); document.getElementById('${id}read').classList.toggle('not-read')" class='${myLibrary[id].read?"read":"not-read"}'>${myLibrary[id].read?"Read":"Not read"}</button><button onclick="removeBook('${id}')" class='remove'>Remove</button></div>`
    }
}

function addBookToggle() {
    addBookBtn.classList.toggle("active")
    addBackground.classList.toggle("active")
}

function addBook() {
    addBookToggle()
    myLibrary = [...myLibrary,{
        title: title.value,
        author: author.value,
        pages: pages.value,
        read: read.checked
    }]
    title.value = ""
    author.value = ""
    pages.value = ""
    read.checked = false;
    Book()
}

function removeBook (id) {
    myLibrary.splice(id, 1);
    const bookRemoved = document.getElementById(id)

    bookRemoved.remove()
    console.log(myLibrary)
    Book()
}

Book()