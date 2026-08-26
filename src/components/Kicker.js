export default function Kicker({ children, tone = "oro" }) {
  const color = tone === "oro" ? "text-oro" : "text-selva/60";
  return <p className={`kicker ${color}`}>{children}</p>;
}
