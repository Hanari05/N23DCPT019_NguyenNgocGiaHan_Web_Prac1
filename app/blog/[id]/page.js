import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, index) => ({
    id: String(index + 1),
  }));
}

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${encodeURIComponent(id)}`,
    {
      signal: AbortSignal.timeout(30000),
    },
  );

  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Không thể tải chi tiết bài viết.");

  const post = await response.json();
  return post?.id ? post : null;
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;

  if (!/^\d+$/.test(id) || Number(id) < 1 || Number(id) > 100) {
    notFound();
  }

  const post = await getPost(id);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
      <Link
        href="/"
        className="inline-flex items-center rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:border-pink-300 hover:text-pink-600"
      >
        ← Back to Blog
      </Link>

      <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <Badge label={`Bài viết #${post.id}`} color="pink" />
          <span className="text-sm text-slate-500">User #{post.userId}</span>
        </div>

        <h1 className="mt-5 bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-3xl font-bold leading-tight tracking-tight text-transparent sm:text-4xl">
          {post.title}
        </h1>

        <div className="my-7 h-1 w-20 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500" />

        <p className="whitespace-pre-line text-base leading-8 text-slate-700 sm:text-lg">
          {post.body}
        </p>
      </div>
    </article>
  );
}

