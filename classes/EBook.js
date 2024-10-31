import { Book } from "./book.js"; 
    class EBook extends Book {
    constructor(name, author, year, fileFormat){
        super(name, author, year)
        this.fileFormat = fileFormat;
    }
    printInfo(){
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`)
    }
}

const ebook1 = new EBook("Дюна", "Фрэнк Герберт", 1965, "EPUB ");
const ebook2 = new EBook("Ім'я троянди", "Умберто Еко", 1980, "FB2 ");
const ebook3 = new EBook("Коротка історія майже всього на світі", "Білл Брайсон", 2003, "TXT");

ebook1.printInfo()
ebook2.printInfo()
ebook3.printInfo()