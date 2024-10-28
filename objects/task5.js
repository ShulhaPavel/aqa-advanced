const students = [
    {name: "Garry", age: 20, email: "gmail@gmail.com"},
    {name: "Ron", age: 18, email: "test@gmail.com"},
    {name: "Oleg", age: 30, email: "cool@gmail.com"}
]

for (const { name, age, email } of students) {
    console.log(`Ім'я: ${name}, Вік: ${age}, Email: ${email}`);
  }