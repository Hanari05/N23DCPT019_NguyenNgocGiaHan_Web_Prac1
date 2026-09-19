import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-pink-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link
        href="/"
        className="w-fit bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-2xl font-bold text-transparent"
        >
          MyBlog
        </Link>

        <nav
          aria-label="Điều hướng chính"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600"
        >
          <Link href="/" className="py-2 text-slate-600 transition-colors hover:text-pink-600">Trang chủ</Link>
          <Link href="/#articles" className="py-2 text-slate-600 transition-colors hover:text-pink-600">Bài viết</Link>
          <Link href="/#about" className="py-2 text-slate-600 transition-colors hover:text-pink-600">Giới thiệu</Link>
        </nav>
      </div>
    </header>
  );
}
