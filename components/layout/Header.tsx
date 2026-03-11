"use client"

import { Container } from "@/components/Container"
import { navLinks } from "@/lib/nav-links"
import { ThemeToggle } from "./ThemeToggle"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="text-lg font-semibold">Modern Starter</div>

          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  )
}
