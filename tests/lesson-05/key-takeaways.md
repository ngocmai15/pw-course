
# 1. Function advance
## 1.1. Function expression 
- Định nghĩa function bằng cách **gán nó cho 1 biến**
```
// Khai báo hàm có tham số name. Trả về chuỗi Hello <name>
const a = function(name){
    console.log(`Hello ${name}`);
}
a("Mai");

// Khai báo hàm có tham số price, quantity discount. Trả về giá trị, biết giá trị = price * quantity - discount
const b = function(price, quantity, discount){
    return price * quantity - discount;
}

console.log(`Gia tri = ${b(1_000, 5, 500)}`);
```

## 1.2. Lambda function
- Đây là cách viết ngắn gọn hơn cho function
- Sử dụng dấu ```=>```
- Lưu ý:
    - Nếu chỉ có 1 dòng code => có thể “rút gọn” cặp ngoặc nhọn
    - Không có tham số: Vẫn phải có dấu ngoặc tròn rỗng
    - Có 1 tham số: có thể bỏ/giữ dấu ngoặc, tùy style
```
// Khai báo hàm có tham số name. Trả về chuỗi Hello <name>
const a = name => console.log(`Hello ${name}`);
a("Mai");

// Khai báo hàm có tham số price, quantity discount. Trả về giá trị, biết giá trị = price * quantity - discount
const b = (price, quantity, discount) => return price * quantity - discount;

console.log(`Gia tri = ${b(1_000, 5, 500)}`);
```

## 1.3. Anonymous function
- Function **không có tên** (hàm ẩn danh)
- Được sử dụng khi function **chỉ cần dùng một lần** hoặc **làm callback**
```
/ Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function () {
    console.log("I'm anonymous but stored in a variable!");
};

// 2. Dùng làm callback
setTimeout(function () {
    console.log("Anonymous callback!");
}, 1000);
```

# 2. DOM
- Máy tính nhìn website dưới dạng "cây có cấu trúc", cấu trúc này gọi là **DOM** (Document Object Model)
- Mở cây này bằng cách bấm **phím F12** (hoặc chuột phải vào vùng trống, chọn “Inspect”); sau đó chọn tab “**Element**”
- Thành phần chi tiết của Node:

    - ![HTML tags](https://www.freecodecamp.org/news/content/images/2021/08/anatomy-of-an-html-tag.png)
    - ![HTML Elements](https://www.freecodecamp.org/news/content/images/2021/08/anatomy-of-an-html-element.png)
    - ![HTML Attributes](https://www.freecodecamp.org/news/content/images/2021/08/attribute-1.png)
    - ![Self-Closing Tag](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZJGGz0diNqkPNUxfTYBsUnuBNwcUki2Srw&s)
    
- **Thẻ tiêu chuẩn**: thẻ do tổ chức uy tín **mozilla định nghĩa**
- **Thẻ tự định nghĩa**: do lập trình viên/ website tự định nghĩa 
- Các thẻ tiêu chuẩn thường gặp:
    - Thẻ cấu trúc cơ bản
        - ```<html>```: Thẻ gốc của trang
        - ```<head>```: Chứa metadata: tiêu đề website, hiển thị Google
        - ```<body>```: Nội dung của cả website hiển thị
        - ```<div>```: Khối/container chung
        - ```<span>```: Inline container
        - ```<header>```, ```<footer>```, ```<nav>```, ```<section>```: Thẻ ngữ nghĩa
    - Thẻ nội dung
        - ```<h1>``` đến ```<h6>```: Tiêu đề
        - ```<p>```: Đoạn văn
        - ```<a>```: Liên kết
        - ```<img>```: Hình ảnh
        - ```<ul>```, ```<ol>```, ```<li>```: Danh sách
    - Thẻ form (quan trọng cho Testing)    
        - ```<form>```: Biểu mẫu
        - ```<input>```: Ô nhập liệu (text, password, checkbox, radio, etc.)
        - ```<button>```: Nút bấm
        - ```<select>``` và ```<option>```: Dropdown
        - ```<textarea>```: Vùng văn bản nhiều dòng

# 3. Selector
- Selector là công cụ giúp ta tìm các phần tử trên trang web
- Có 3 loại selector thường dùng:
    - **XPath**
        - Dùng được trong hầu hết các trường hợp (99.99%)
        - Đa dạng, có khả năng tìm các phần tử khó
        - Hơi dài
        - VD: ```//button[normalize-space() = ‘Add to cart’]```
    - **CSS selector**
        - Ngắn gọn, performance cao
        - Dùng cho các trường hợp dễ tìm.
        - Không linh hoạt bằng XPath
        - VD: ```.add-to-cart```
    - **Playwright selector**
        - Chỉ dùng riêng cho Playwright
        - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        - Hướng tới “giống người dùng đang nhìn thấy gì”
        - VD: ```page.getByText(“Add to cart”);```
## XPath selector
- XPath = XML Path
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM
        - bắt đầu bởi 1 /
    - Tương đối: tìm dựa vào đặc tính
        - bắt đầu bởi 2 //
        - ```//tenthe[@thuoctinh=”giatri”]```
- Nên dùng XPath tương đối

# 4. Playwright basic syntax
## 4.1. test: 
- Đơn vị cơ bản để khai báo một test 
```
import { test } from '@playwright/test';

test('Basic actions', async ({ page }) => {
    // Code của test
});
```
## 4.2. *step*: 
- Đơn vị nhỏ hơn test, để khai báo từng step của test case
- Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain
```
await test.step("Step 1", async () => {
    // Code here
});
```
## 4.3. Navigate:
```
await page.goto("https://material.playwrightvn.com/");
```
## 4.4. Locate: 
- Sử dụng ```page.locator(“<selector>”)``` để chọn phần tử trên trang
```
await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']")
```
## 4.5. Click: 
```await page.locator("//button").click();```

## 4.6. Input: 
- Fill: *paste content* vào một ô input
- pressSequentially: *gõ từng chữ* cái vào ô input

```
await page.locator("//input[@id = 'username']").fill("Ngoc Mai");
await page.locator("//input[@id = 'email']").pressSequentially("ngocmaik105cva@gmail.com", { delay: 1_000 });
```

## 4.7. Radio checkbox:
```   
    // Lấy giá trị hiện tại đang là check hay không:

const isChecked = page.locator("//input").isChecked();

    
    // Check/ Uncheck:

page.locator("//input").check();
page.locator("//input").setChecked(false);
```

## 4.8. Select:
```
await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })
```

## 4.9. Upload file:
```
await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
```

## 4.10. Hover:
``` 
await page.locator("<xpath here>").hover();
```

## 4.11. text(): 
- Dùng để tìm ra phần tử có giá trị tương ứng
    - Với DOM sau: ```<div @class=”playwright”>This is a text</div>```
    - Thì để chọn phần tử này, ta dùng cú pháp như sau: ```//div[text()=’This is a text’]```

## 4.12. contains(): 
- Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. Ví dụ:

```<div> Tôi là Alex </div>``` // Text này có 1 ký tự space ở đầu và ở đuôi 

```<div> Bây giờ là: 08:07 </div>``` // Thời gian sẽ tuỳ vào thời điểm truy cập trang web

- Để chọn các phần tử này, ta dùng hàm ```contains(<giá trị>, <giá trị contains>)```

- Ví dụ:

```//div[contains(text(), ‘Tôi là Alex’)]```

```//div[contains(text(), ‘Bây giờ là:’)]```

## 4.13. confirmation dialog
- "Nếu như dialog xảy ra thì mình sẽ làm gì với dialog đấy?"
```
page.on('dialog', dialog => dialog.accept());          // sự kiện dialog (phải được setup trước sự kiện trigger dialog)
await page.getByRole('button).click();                 // sự kiện trigger dialog 
```