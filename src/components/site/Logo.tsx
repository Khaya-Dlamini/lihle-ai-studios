import { Link } from "@tanstack/react-router";
import logo from "@/assets/lihle-logo.png.asset.json";

export function Logo({ variant = "dark", size = "md" }: { variant?: "dark" | "light"; size?: "md" | "lg" | "xl" }) {
  const sizeClass = size === "xl" ? "h-24 md:h-28" : size === "lg" ? "h-16 md:h-20" : "h-12";
  return (
    <Link to="/" className="flex items-center group" aria-label="Lihle Websites home">
      <img
        src={logo.url}
        alt="Lihle Websites"
        className={`${sizeClass} w-auto transition-transform group-hover:scale-[1.03] ${variant === "dark" ? "brightness-75 contrast-125" : ""}`}
      />
    </Link>
  );
}
