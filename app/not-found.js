import Link from "next/link";
import Badge from "@/components/Badge";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-6 sm:py-24">
      <Badge label="404" color="pink" />
      <h1 className="mt-5 text-3xl font-bold text-sky-900 sm:text-4xl">
        Không tìm thấy bài viết
      </h1>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
        Bài viết em đang tìm không tồn tại hoặc đường dẫn chưa chính xác.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-pink-700"
      >
        Back to Blog
      </Link>
    </section>
  );
}
