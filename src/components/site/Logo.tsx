import { Link } from "@tanstack/react-router";
import logo from "@/assets/lihle-logo.png.asset.json";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center group" aria-label="Lihle Websites home">
      <img
        src={logo.url}
        alt="Lihle Websites"
        width={160}
        height={56}
        className={`h-10 w-auto transition-transform group-hover:scale-[1.03] ${variant === "dark" ? "brightness-75 contrast-125" : ""}`}
      />
    </Link>
  );
}
