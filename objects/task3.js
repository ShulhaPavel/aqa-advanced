const car1 = {
    brand: "Audi",
    model: "Q8",
    year: 2022
}

const car2 = {
    brand: "Toyota",
    model: "RAV4",
    owner: "Oleg",
}

const car3 = { ...car1, ...car2};
console.log(car3);