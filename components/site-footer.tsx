import {
  ThumbsUp,
  Camera,
  Bird,
  Music2,
  Phone,
  Mail,
  MapPin,
  Apple,
  Play,
} from 'lucide-react'
import { Logo } from './logo'

const QUICK_LINKS = ['Home', 'Menu', 'Offers', 'About Us', 'Contact']
const CUSTOMER_CARE = [
  'My Orders',
  'Delivery Info',
  'FAQs',
  'Terms & Conditions',
  'Privacy Policy',
]
const SOCIALS = [
  { icon: ThumbsUp, label: 'Facebook' },
  { icon: Camera, label: 'Instagram' },
  { icon: Bird, label: 'Twitter' },
  { icon: Music2, label: 'TikTok' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-8 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              We serve delicious fast food made with the best ingredients. Enjoy
              your meal, your way!
            </p>
            <ul className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className="flex size-9 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform hover:scale-110"
                  >
                    <s.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer care */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest">
              Customer Care
            </h3>
            <ul className="mt-4 space-y-3">
              {CUSTOMER_CARE.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-brand" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-brand" />
                info@burgerhub.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>
                  123 Food Street,
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* App */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest">
              Download Our App
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get exclusive offers &amp; order faster!
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2.5 transition-colors hover:border-brand"
              >
                <Apple className="size-6" />
                <span className="leading-tight">
                  <span className="block text-[10px] text-muted-foreground">
                    Download on the
                  </span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2.5 transition-colors hover:border-brand"
              >
                <Play className="size-6" />
                <span className="leading-tight">
                  <span className="block text-[10px] text-muted-foreground">
                    Get it on
                  </span>
                  <span className="block text-sm font-semibold">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © 2024 Burger Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
