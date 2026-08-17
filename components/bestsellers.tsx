import Image from 'next/image'
import { ArrowRight, Plus } from 'lucide-react'

const PRODUCTS = [
  {
    name: 'Classic Cheese Burger',
    desc: 'Grilled beef patty with cheese, lettuce, tomato & special sauce.',
    price: '$5.49',
    img: '/images/classic-cheese-burger.png',
  },
  {
    name: 'Veggie Supreme Pizza',
    desc: 'Loaded with fresh veggies, cheese & italian herbs.',
    price: '$8.99',
    img: '/images/veggie-pizza.png',
  },
  {
    name: 'Crispy Chicken Strips',
    desc: 'Crunchy chicken strips served with dip.',
    price: '$5.99',
    img: '/images/chicken-strips.png',
  },
  {
    name: 'Peri Peri Fries',
    desc: 'Crispy fries tossed in peri peri seasoning.',
    price: '$2.99',
    img: '/images/peri-peri-fries.png',
  },
]

export function Bestsellers() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-script text-2xl text-brand">— Popular Picks —</p>
        <h2 className="mt-1 font-display text-4xl tracking-tight sm:text-5xl">
          OUR <span className="text-brand">BESTSELLERS</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-black/40">
              <Image
                src={p.img || '/placeholder.svg'}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-bold uppercase tracking-wide">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-xl text-brand">
                  {p.price}
                </span>
                <button
                  type="button"
                  aria-label={`Add ${p.name} to cart`}
                  className="flex size-9 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform hover:scale-110"
                >
                  <Plus className="size-5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#menu"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-bold tracking-wide text-brand-foreground transition-transform hover:scale-105"
        >
          VIEW FULL MENU
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
