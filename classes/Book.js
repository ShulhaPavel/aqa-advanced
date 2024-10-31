export class Book {
    constructor(name, author, year){
        this.name = name;
        this.author = author;
        this.year = year;
    };
    printInfo(){
        console.log(`Назва книги: ${this.name}; Автор:  ${this.author} ; Рік:  ${this.year} `)
    }
}

const book1 = new Book("Дюна", "Фрэнк Герберт", 1965);
const book2 = new Book("Ім'я троянди", "Умберто Еко", 1980);
const book3 = new Book("Коротка історія майже всього на світі", "Білл Брайсон", 2003);

book1.printInfo()
book2.printInfo()
book3.printInfo()