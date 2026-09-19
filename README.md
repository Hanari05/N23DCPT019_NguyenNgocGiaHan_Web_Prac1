# MyBlog - Blog Listing Page

Website danh sách bài viết được xây dựng bằng **Next.js App Router** và **Tailwind CSS**. Dữ liệu bài viết được lấy từ REST API JSONPlaceholder, hiển thị dưới dạng lưới responsive và có trang chi tiết cho từng bài viết.

## Demo trực tuyến

[Xem website trên GitHub Pages](https://hanari05.github.io/N23DCPT019_NguyenNgocGiaHan_Web_Prac1/)

## Thông tin sinh viên

- **Họ và tên:** Nguyễn Ngọc Gia Hân
- **Mã sinh viên:** N23DCPT019
- **Môn học:** Lập trình Web
- **Bài thực hành:** Thực hành 1 - Xây dựng Blog Listing Page với Next.js và Tailwind CSS

## Chức năng chính

- Hiển thị 12 bài viết đầu tiên từ JSONPlaceholder.
- Tách giao diện thành các component tái sử dụng: `Header`, `Badge` và `BlogCard`.
- Dùng `.map()` để tạo danh sách bài viết từ dữ liệu API.
- Giới hạn tiêu đề và nội dung tóm tắt bằng `line-clamp`.
- Trang chi tiết động theo đường dẫn `/blog/[id]`.
- Hiển thị đầy đủ tiêu đề và nội dung của từng bài viết.
- Nút **Back to Blog** để quay về trang danh sách.
- Trang 404 khi bài viết hoặc đường dẫn không tồn tại.
- Xử lý trạng thái API lỗi hoặc không có dữ liệu.
- Giao diện responsive trên điện thoại, máy tính bảng và máy tính.
- Phối màu chủ đạo xanh dương, hồng và trắng.

## Công nghệ sử dụng

- Next.js 16
- React 19
- JavaScript
- Tailwind CSS 4
- Next.js App Router
- REST API
- Git và GitHub

## API sử dụng

Dự án sử dụng API thử nghiệm miễn phí từ [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

```text
GET https://jsonplaceholder.typicode.com/posts
GET https://jsonplaceholder.typicode.com/posts/[id]
```

Mỗi bài viết có cấu trúc cơ bản:

```json
{
  "userId": 1,
  "id": 1,
  "title": "Tiêu đề bài viết",
  "body": "Nội dung bài viết"
}
```

## Cấu trúc thư mục chính

```text
n23dcpt019_nguyenngocgiahan_web_prac1/
├── app/
│   ├── blog/
│   │   └── [id]/
│   │       └── page.js       # Trang chi tiết bài viết
│   ├── globals.css           # CSS toàn cục và Tailwind CSS
│   ├── layout.js             # Layout dùng chung
│   ├── not-found.js          # Trang 404
│   └── page.js               # Trang danh sách bài viết
├── components/
│   ├── Badge.js              # Nhãn tái sử dụng
│   ├── BlogCard.js           # Thẻ hiển thị bài viết
│   └── Header.js             # Thanh điều hướng
├── public/
├── package.json
└── README.md
```

## Cài đặt và chạy dự án

### 1. Clone repository

```bash
git clone https://github.com/Hanari05/N23DCPT019_NguyenNgocGiaHan_Web_prac1.git
cd N23DCPT019_NguyenNgocGiaHan_Web_prac1
```

### 2. Cài đặt thư viện

```bash
npm install
```

### 3. Chạy môi trường phát triển

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## Các đường dẫn chính

| Đường dẫn | Nội dung |
| --- | --- |
| `/` | Danh sách 12 bài viết |
| `/blog/1` | Chi tiết bài viết có ID 1 |
| `/blog/[id]` | Chi tiết bài viết theo ID |
| `/blog/999` | Trang không tìm thấy bài viết |

## Kiểm tra mã nguồn và bản production

```bash
npm run lint
npm run build
npx serve out
```

Sau khi build, phiên bản tĩnh của website được tạo trong thư mục `out`.

## Triển khai trên GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` tự động thực hiện các bước sau mỗi khi có commit mới trên nhánh `main`:

1. Cài đặt dependencies bằng `npm ci`.
2. Build website thành static export.
3. Tải thư mục `out` lên GitHub Pages.
4. Xuất bản website tại đường dẫn demo phía trên.

Route chi tiết `/blog/[id]` được tạo sẵn cho 12 bài viết bằng `generateStaticParams()` để tương thích với môi trường hosting tĩnh.

## Responsive

Danh sách bài viết thay đổi số cột theo kích thước màn hình:

- Điện thoại: 1 cột.
- Máy tính bảng: 2 cột.
- Máy tính: 3 cột.

## Ghi chú

- Quá trình build cần kết nối Internet để tải dữ liệu từ JSONPlaceholder.
- JSONPlaceholder là API thử nghiệm nên nội dung bài viết chỉ là dữ liệu mẫu.
- Dự án không lưu hoặc chỉnh sửa dữ liệu trên máy chủ JSONPlaceholder.

## Tác giả

**Nguyễn Ngọc Gia Hân - N23DCPT019**

GitHub: [Hanari05](https://github.com/Hanari05)

