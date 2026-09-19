export default function Badge({ label, color = "blue" }) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    pink: "bg-pink-100 text-pink-700",
    purple: "bg-purple-100 text-purple-700",
    gray: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        colors[color] || colors.blue
      }`}
    >
      {label}
    </span>
  );
}