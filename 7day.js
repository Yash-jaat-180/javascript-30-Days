// Activity 1
const book = {
    title: "Rich dad, Poor dad",
    author: "xyz",
    year: 2005,
    detail: function () {
        let result = this.title + " " + this.author;
        return result;
    },
    updateYear: function (year) {
        this.year = year;
    }
}

console.log(book);

console.log(book.title);

// Activity 2

let result = book.detail();
console.log(result);

book.updateYear(2020);
console.log(book.year);

// Activity 3
let library = {
    name: "yash's library",
    books: [
        {
            title: "Rich dad, Poor dad",
            author: "xyz",
            year: 2005,
            detail : function() {
                return this.title + " " + this.year;
            }
        },
        {
            title: "healthy habbit",
            author: "yash",
            year: 2050,
            detail : function() {
                return this.title + " " + this.year;
            }
        }
    ]
}

console.log(library);

console.log(library.name);

library.books.map((item, index) => console.log(item.title));

// Activity 4

library.books.map((item) => console.log(item.detail()));

// Activity 5

for (const key in library.books) {
    console.log(library.books[key].title + ' ' + library.books[key].author);
}

console.log(Object.keys(library.books[0]));
console.log(Object.values(library.books[1]));

