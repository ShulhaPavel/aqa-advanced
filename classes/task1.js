import Book from "./book.js"
import EBook from "./EBook.js"

const book1 = new Book("Дюна", "Фрэнк Герберт", 1000); //"Дюна", "Фрэнк Герберт", 1965
const book2 = new Book("Ім'я троянди", "Умберто Еко", 1980); //"Ім'я троянди", "Умберто Еко", 1980
const book3 = new Book("Коротка історія майже всього на світі", "Білл Брайсон", 2003); //"Коротка історія майже всього на світі", "Білл Брайсон", 2003
const book4 = new Book("New title", "New Author", 203);

book1.printInfo()
book2.printInfo()
book3.printInfo()
book4.printInfo()

const ebook1 = new EBook("Дюна", "Фрэнк Герберт", 1965, "EPUB");
const ebook2 = new EBook("Ім'я троянди", "Умберто Еко", 1980, "FB2"); //FB2
const ebook3 = new EBook("Коротка історія майже всього на світі", "Білл Брайсон", 2003, "TXT"); //TXT


ebook1.printInfo()
ebook2.printInfo()
ebook3.printInfo()

const books = [book1, book2, book3, book4, ebook1, ebook2, ebook3];
const oldestBook = Book.getOldestBook(books);
console.log("Oldest Book:");
oldestBook.printInfo();

const ebookFromBook = EBook.createFromBook(book4, "PDF");
ebookFromBook.printInfo();