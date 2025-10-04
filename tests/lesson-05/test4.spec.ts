import { test } from '@playwright/test';
const a = [
    { title: "Loạt smartphone nổi bật bán tháng 10", content: "Smartphone gập mỏng nhất thế giới Honor Magic V5, bộ đôi Xiaomi 15T, Oppo A6 Pro siêu bền, Nubia Air mỏng nhẹ là những điện thoại sẽ bán trong tháng 10." },
    { title: "AirPods Pro 3 đoạt giải tai nghe True Wireless được yêu thích nhất", content: "Mẫu tai nghe của Apple vượt sáu đối thủ để chiến thắng ở số bình chọn thứ 5 của Sản phẩm tôi yêu 2025." },
    { title: "LG ra máy giặt sấy có khả năng giảm vi nhựa", content: "LG cho biết bộ sản phẩm 2026 AI DD 2.0 có khả năng giảm thiểu vi nhựa và sẽ thay thế toàn bộ dải sản phẩm hiện có bao gồm lồng ngang, lồng đứng, giặt sấy." },
    { title: "Tablet AI hỗ trợ người dùng làm việc linh hoạt", content: "Galaxy Tab S11 series tích hợp Galaxy AI hỗ trợ tóm tắt, dịch thuật, thiết kế mỏng nhẹ, hướng đến nhu cầu làm việc di động, giúp người dùng xử lý đa nhiệm ở bất kỳ đâu." },
    { title: "Bốn bước làm chủ công nghệ chiến lược Việt Nam", content: "Bộ Khoa học và Công nghệ chia sẻ bốn bước triển khai công nghệ chiến lược, trong khuôn khổ Ngày hội Đổi mới sáng tạo quốc gia 2025." },
    { title: "Apple, OpenAI yêu cầu tòa bác đơn kiện của Musk", content: "Apple và OpenAI đã gửi đơn yêu cầu bác bỏ hoàn toàn vụ kiện vô căn cứ của Elon Musk về việc hợp tác giữa hai công ty." },
    { title: "Nhà máy nhiệt điện mặt trời tháp đôi đầu tiên trên thế giới", content: "Nhà máy nhiệt điện mặt trời tháp đôi ở tỉnh Cam Túc sử dụng 27.000 tấm gương tập trung ánh nắng vào hai tháp chứa muối nóng chảy với công suất lắp đặt 100.000 kilowatt." },
    { title: "'Việt Nam có thể làm chủ công nghệ lò hạt nhân công suất nhỏ vào năm 2040'", content: "Viện Nghiên cứu hạt nhân Đà Lạt đang lên kế hoạch phát triển lò phản ứng hạt nhân module nhỏ, mục tiêu có 8-10 tổ máy trước năm 2035, và làm chủ công nghệ vào năm 2040, theo Viện trưởng Cao Đông Vũ." },
    { title: "Giám đốc Instagram: 'Meta không nghe lén người dùng'", content: "Adam Mosseri, Giám đốc Instagram, bác bỏ thông tin rằng mạng xã hội của Meta bí mật lắng nghe các cuộc trò chuyện của người dùng để quảng cáo cá nhân hóa." },
    { title: "Việt Nam chia sẻ bài học về tần số khi triển khai 5G", content: "Cục trưởng Tần số vô tuyến điện Lê Văn Tuấn cho biết việc cung cấp khối băng tần lớn hơn bình thường, yêu cầu nhà mạng cam kết triển khai trạm là yếu tố đưa mạng 5G phát triển mạnh." }
];

test('test4', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2", async () => {
        await page.locator("//a[text() = 'Bài học 4: Personal notes']").click();
    });

    await test.step("Step 3: Them 10 note", async () => {
        for (let item of a) {
            await page.locator("//input[@id = 'note-title']").fill(item.title);
            await page.locator("//textarea[@id = 'note-content']").fill(item.content);
            await page.locator("//button[@id = 'add-note']").click();
        }
    });

    await test.step("Step 4: Search", async () => {
        await page.locator("//input[@id = 'search']").fill("máy");
    })
});