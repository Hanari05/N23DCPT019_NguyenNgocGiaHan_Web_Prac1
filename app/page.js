import Badge from "@/components/Badge";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
      <section aria-labelledby="welcome-title" className="max-w-2xl">
        <Badge label="Góc học tập" />
        <h1 id="welcome-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Chào mừng đến với MyBlog
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          Một góc nhỏ để đọc, học hỏi và lưu lại những kiến thức thú vị về lập trình web.
        </p>
      </section>

      <section id="articles" aria-labelledby="articles-title" className="mt-12 scroll-mt-6">
        <h2 id="articles-title" className="text-2xl font-bold">Bài viết mới nhất</h2>
        <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-white p-6">
          <p className="text-sm leading-6 text-slate-500">Chưa có bài viết để hiển thị.</p>
        </div>
      </section>

      <section id="about" aria-labelledby="about-title" className="mt-12 scroll-mt-6 border-t border-slate-200 pt-8">
        <Badge label="Về tác giả" color="gray" />
        <h2 id="about-title" className="mt-3 text-xl font-bold">Nguyễn Ngọc Gia Hân</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Mình là sinh viên Công nghệ Đa phương tiện, đang học cách xây dựng website với Next.js và Tailwind CSS.
        </p>
      </section>
    </div>
  );
}
