// 1.
console.log("1.");

function multiply(a, b) {
    const multiply = a * b;
    return multiply;
};

console.log("3 x 8 =", multiply(3, 8));
console.log("6 x 5 =", multiply(6, 5));

// 2.
console.log("2.");

function findMin(a, b, c) {
    if (a < b && a < c) {
        const min = a;
        return min;
    };
    if (b < a && b < c) {
        const min = b;
        return min;
    };
    const min = c;
    return min;
};

console.log("Min(9, 8, 6) =", findMin(9, 8, 6));
console.log("Min(22, 37, 15) =", findMin(22, 37, 15));

// 3.
const students = [
    {
        name: "Quynh",
        score: 9.4
    },
    {
        name: "Yen",
        score: 8.6
    },
    {
        name: "Tram",
        score: 7.9
    }
];
const threshold = 8.5;
let listTopStudents = [];
function getTopStudents(students, threshold) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            listTopStudents.push(students[i].name);
        }
    };
    return listTopStudents;
}

console.log("3. Top Students:", getTopStudents(students, threshold));

// 4.
function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years / 100;
    return total;
};

console.log("4. Tong so tien sau 10 nam la:", calculateInterest(12_000_000, 8, 10));