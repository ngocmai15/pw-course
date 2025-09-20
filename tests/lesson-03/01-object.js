// 1.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log("1. Nam san xuat cua xe la:", car.year);

// 2.
const person = {
    name: "Mai",
    address: {
        street: "Trung Kinh",
        city: "Hanoi",
        country: "Vietnam"
    }
};

console.log("2.", person.name, "o duong", person.address.street);

// 3.
const student = {
    name: "Trang",
    grades: {
        math: 9.5,
        english: 10
    }
};

console.log("3. Diem Toan cua", student["name"], "la", student["grades"]["math"]);

// 4.
const settings = {
    volume: 66,
    brightness: 90
};

settings.volume = 80;

console.log("4. Settings:", settings);

// 5.
const bike = {
    year: 2015
};

bike.color = "Navy";

console.log("5. Bike:", bike);

// 6.
const employee = {
    name: "Phuong Anh",
    age: 21
};

delete employee.age;

console.log("6. Employee:", employee);

// 7.
let school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};

console.log("7. School:", school);