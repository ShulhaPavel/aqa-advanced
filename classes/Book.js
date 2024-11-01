export class Book {
    constructor(name, author, year){
        this.name = name;
        this.author = author;
        this.year = year;
    };

    get name(){
        return this._name
    }

    set name(newName){
       if (typeof newName !== "string"){
        console.log(`The name of the book should have sting format`)
       }else{
        this._name = newName;
       }
    }

    get author(){
        return this._author
    }

    set author(newAuthor){
        if (typeof newAuthor !== "string"){
         console.log(`The author of the book should have string format`)
        }else{
         this._author = newAuthor;
        }
     }

    get year(){
        return this._year
    }

    set year(value){
        if (typeof value !== "number"){
         console.log(`The author of the book should have number format`)
        }else if(value <= 0 || value >= 2024){
        console.log(`The year should not be less than 0 and more than 2024`)
        }else{
         this._year = value;
        }
     }

     static getOldestBook(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
    
    printInfo(){
        console.log(`Назва книги: ${this._name}; Автор:  ${this._author} ; Рік:  ${this._year} `)
    }
}

export default Book;