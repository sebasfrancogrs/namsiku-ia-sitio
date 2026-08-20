import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label="Namsiku IA — inicio"
    >
      <Image
        src="/logo-mark.svg"
        alt="Namsiku IA"
        width={40}
        height={40}
        className="h-10 w-10"
        priority
      />
      <span className="font-display text-xl font-bold text-crema">
        Namsiku IA
      </span>
    </Link>
  );
}
