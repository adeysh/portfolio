import Link from "next/link";

const navItems = [
  { href: "#projects", label: "/projects" },
  { href: "#contact", label: "/contact" },
] as const;

export function Navbar() {
  return (
    <div className="ds-container pt-6 sm:pt-10">
      <header className="ds-surface sticky top-4 z-50 bg-[var(--ds-bg)]/80 backdrop-blur">
        <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link href="/" className="ds-link flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[var(--ds-radius-sm)] border border-[var(--ds-border)] bg-[var(--ds-surface)] text-sm font-medium">
              Logo
            </span>
            <span className="text-sm font-medium tracking-tight">
              Portfolio
            </span>
          </Link>

          <nav aria-label="Primary" className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="ds-link text-sm font-medium text-[var(--ds-muted)] hover:text-[var(--ds-text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

