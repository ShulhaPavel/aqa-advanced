const person = {
    firstName: "Oleg",
    secondName: "Sidorov",
    age: 16
}

person.email = "gmail@gmail.com";
delete person.age;
console.log(person);