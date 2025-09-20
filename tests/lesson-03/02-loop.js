// 1. 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i
};

console.log("1. Tong cac so tu 1 den 100 la:", sum);

// 2.
console.log("2. Bang cuu chuong tu 2 den 9:");

for (let a = 2; a <= 9; a++) {
    for (let b = 1; b <= 10; b++) {
        console.log(a, "x", b, "=", a * b);
    }
};

// 3.
const arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
};

console.log("3. Cac so le tu 1 den 99 la:", arr);

// 4.
console.log("4. In ra 10 email dua tren ten nguoi dung va so thu tu:");

for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
};

// 5. 
const doanhThu = [
    {
        month: 1,
        total: 100
    },
    {
        month: 2,
        total: 120
    },
    {
        month: 3,
        total: 125
    },
    {
        month: 4,
        total: 128
    },
    {
        month: 5,
        total: 180
    },
    {
        month: 6,
        total: 200
    },
    {
        month: 7,
        total: 100
    },
    {
        month: 8,
        total: 120
    },
    {
        month: 9,
        total: 125
    },
    {
        month: 10,
        total: 128
    },
    {
        month: 11,
        total: 180
    },
    {
        month: 12,
        total: 200
    }
];
let tongDoanhThu = 0;

for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu = tongDoanhThu + doanhThu[i].total;
};

console.log("5. Tong doanh thu 12 thang la:", tongDoanhThu);
