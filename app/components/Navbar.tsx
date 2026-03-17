import Link from "next/link";

import { Container } from "./Container";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ds-border)] bg-[var(--ds-bg)]/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
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
      </Container>
    </header>
  );
}

