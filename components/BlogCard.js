import Link from "next/link";
import Badge from "@/components/Badge";

export default function BlogCard({ post }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      {/* JSONPlaceholder không có category; đây là nhãn do giao diện đặt. */}
      <div><Badge label="Bài viết" color={post.id % 2 === 0 ? "pink" : "blue"} /></div>
      <h3 className="mb-3 mt-4 line-clamp-2 text-lg font-bold leading-7 text-slate-900">
        {post.title}
      </h3>
      <p className="mb-6 line-clamp-3 text-sm leading-6 text-slate-600">{post.body}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-pink-100 pt-4">
        <span className="text-sm text-slate-500">User #{post.userId}</span>
        <Link
          href={`/blog/${post.id}`}
          aria-label={`Đọc tiếp: ${post.title}`}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
        >
          Đọc tiếp →
        </Link>
      </div>
    </article>
  );
}
