import Badge from "@/components/Badge";
import BlogCard from "@/components/BlogCard";

// Fetch trên server; không cần useEffect hoặc "use client".
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error("Không thể tải danh sách bài viết.");
  const posts = await response.json();
  if (!Array.isArray(posts)) throw new Error("Dữ liệu bài viết không hợp lệ.");
  return posts;
}

export default async function HomePage() {
  let posts = [];
  let hasError = false;
  try {
    posts = await getPosts();
  } catch {
    hasError = true;
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
      <section aria-labelledby="welcome-title" className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg sm:p-10">
    <div
    aria-hidden="true"
    className="absolute inset-x-0 top-0 h-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500"
    />
    
    <Badge label="Góc học tập" color="pink" />
    
    <h1
    id="welcome-title"
    className="mt-4 max-w-2xl bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-3xl font-bold leading-tight tracking-tight text-transparent sm:text-4xl"
    >
      Chào mừng đến với MyBlog
      </h1>

  <p className="mt-4 max-w-2xl leading-7 text-slate-600">
    Một góc nhỏ để đọc, học hỏi và lưu lại những kiến thức thú vị
    về lập trình web.
  </p>
</section>

      <section id="articles" aria-labelledby="articles-title" className="mt-12 scroll-mt-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 id="articles-title" className="text-2xl font-bold text-sky-900">Khám phá bài viết</h2>
          {!hasError && <Badge label={`${Math.min(posts.length, 12)} bài viết`} />}
        </div>
        {hasError ? (
          <div role="alert" className="rounded-xl border border-pink-200 bg-pink-50 p-6 text-pink-900">
            Chưa tải được bài viết. Vui lòng tải lại trang sau ít phút.
          </div>
        ) : posts.length === 0 ? (
          <p className="rounded-xl border border-sky-100 bg-white p-6 text-slate-600">Chưa có bài viết để hiển thị.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 12).map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        )}
      </section>

      <section id="about" aria-labelledby="about-title" className="mt-12 scroll-mt-6 border-t border-pink-200 pt-8">
        <Badge label="Về tác giả" color="pink" />
        <h2 id="about-title" className="mt-3 text-xl font-bold text-sky-900">Nguyễn Ngọc Gia Hân</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Mình là sinh viên Công nghệ Đa phương tiện - Phát triển ứng dụng Đa phương tiện, đang học cách xây dựng website với Next.js và Tailwind CSS.
        </p>
      </section>
    </div>
  );
}

