import Image from 'next/image'
import { ArrowRight, Play, Truck, BadgeCheck, Tag } from 'lucide-react'

const FEATURES = [
  { icon: Truck, title: 'Fast Delivery', sub: 'At Your Doorstep' },
  { icon: BadgeCheck, title: 'Best Quality', sub: 'Fresh Ingredients' },
  { icon: Tag, title: 'Great Offers', sub: 'On Every Order' },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-40">
        {/* Left */}
        <div className="max-w-xl">
          <p className="font-script text-3xl text-brand">Cravings, Satisfied</p>
          <h1 className="mt-2 font-display text-6xl leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            GOOD FOOD
            <br />
            <span className="text-brand">FAST &amp; FRESH</span>
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Delicious fast food made with quality ingredients, served hot and
            fresh to satisfy your cravings.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold tracking-wide text-brand-foreground transition-transform hover:scale-105"
            >
              ORDER NOW
              <ArrowRight className="size-4" />
            </a>
            <button
              type="button"
              className="group inline-flex items-center gap-3 text-sm font-bold tracking-wide text-foreground"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-brand text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <Play className="size-4 fill-current" />
              </span>
              WATCH VIDEO
            </button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex items-center gap-3">
                <f.icon className="size-6 text-brand" strokeWidth={1.75} />
                <span className="leading-tight">
                  <span className="block text-sm font-bold">{f.title}</span>
                  <span className="block text-xs text-muted-foreground">
                    {f.sub}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0 -z-10 mx-auto size-[85%] rounded-full bg-brand/25 blur-3xl"
            aria-hidden="true"
          />
          <Image
            src="/images/hero-burger.png"
            alt="A large cheeseburger with french fries and a soft drink"
            width={720}
            height={720}
            priority
            className="w-full max-w-lg drop-shadow-2xl"
          />
          <div className="absolute -left-2 top-1/2 flex size-24 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand text-center text-brand-foreground shadow-xl sm:left-4 lg:left-0">
            <span className="font-display text-lg leading-none">100%</span>
            <span className="text-[9px] font-bold leading-tight">
              FRESH
              <br />
              INGREDIENTS
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
