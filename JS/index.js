class Library {
    constructor() {
        this.books = []
    }
    addBook(item){
        this.books.push(item)
        console.log(`Kitab: ${item.title}`)
    }
}

let library = new Library();

library.addBook({
  title: "Nineteen Eighty-Four",
  author: "Джордж Оруэлл",
  year: 1949,
  janr: "elmi fantastika",
  isAvailable: false,
});

library.addBook({
  title: "Qürur Və Xurafat",
  author: "Jane Austen",
  year: 1813,
  janr: "uydurma hekaye",
  isAvailable: true,
});
console.log(library);