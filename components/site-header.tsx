'use client'

import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Logo } from './logo'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Offers', href: '#offers' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-brand ${
                i === 0 ? 'text-brand' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#menu"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold tracking-wide text-brand-foreground transition-transform hover:scale-105 sm:inline-flex"
          >
            ORDER ONLINE
            <ShoppingBag className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/90 hover:bg-secondary hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-foreground"
            >
              ORDER ONLINE
              <ShoppingBag className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
