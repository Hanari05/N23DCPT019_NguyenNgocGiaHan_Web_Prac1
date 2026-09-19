import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-pink-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="w-fit text-2xl font-bold text-sky-700">
          My<span className="text-pink-700">Blog</span>
        </Link>

        <nav
          aria-label="Điều hướng chính"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600"
        >
          <Link href="/" className="py-2 hover:text-pink-700">Trang chủ</Link>
          <Link href="/#articles" className="py-2 hover:text-pink-700">Bài viết</Link>
          <Link href="/#about" className="py-2 hover:text-pink-700">Giới thiệu</Link>
        </nav>
      </div>
    </header>
  );
}
