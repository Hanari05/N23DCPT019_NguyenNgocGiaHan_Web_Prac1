import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "MyBlog | Nguyễn Ngọc Gia Hân",
  description: "Blog học tập của Nguyễn Ngọc Gia Hân — chia sẻ kiến thức và ghi chép về lập trình web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-white focus:p-4"
        >
          Đến nội dung chính
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
      </body>
    </html>
  );
}
