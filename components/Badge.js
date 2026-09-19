// Truyền label để đổi nội dung; color mặc định là indigo.
export default function Badge({ label, color = "indigo" }) {
  const styles = color === "indigo"
    ? "bg-indigo-100 text-indigo-700"
    : "bg-slate-100 text-slate-600";

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles}`}>
      {label}
    </span>
  );
}
