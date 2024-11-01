import { Book } from "./book.js"; 
    class EBook extends Book {
    constructor(name, author, year, fileFormat){
        super(name, author, year)
        this.fileFormat = fileFormat;
    }

    get fileFormat(){
        return this._fileFormat;
    }

    set fileFormat(newFormat){
        if (typeof newFormat !== "string"){
            console.log(`The format of the book should have sting format`);
           }else if(newFormat !== "EPUB" && newFormat !== "FB2" && newFormat !== "TXT" && newFormat !== "KF8" && newFormat !== "PDF"){
            console.log("Invalid format");
           }else{
            this._fileFormat = newFormat;
           }
    }

    static createFromBook(book, fileFormat) {
        return new EBook(book.name, book.author, book.year, fileFormat);
    }

    printInfo(){
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`)
    }
}

export default EBook;