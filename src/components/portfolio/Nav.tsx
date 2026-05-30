import { Link } from "@tanstack/react-router";

const items = [
  { label: "about", href: "#about" },
  { label: "work", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/60">
      <div className="flex items-center justify-between px-6 md:px-12 h-14">
        <Link to="/" className="font-mono text-sm tracking-tight">
          <span className="text-accent">~/</span>vikalp.shakya
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-muted-foreground">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-foreground transition-colors">
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
