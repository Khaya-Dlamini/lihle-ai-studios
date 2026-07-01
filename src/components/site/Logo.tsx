import { Link } from "@tanstack/react-router";
import logo from "@/assets/lihle-logo.png.asset.json";

export function Logo({ variant = "dark", size = "md" }: { variant?: "dark" | "light"; size?: "md" | "lg" | "xl" }) {
  const sizeClass = size === "xl" ? "h-20 md:h-24" : size === "lg" ? "h-14 md:h-16" : "h-10";
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
