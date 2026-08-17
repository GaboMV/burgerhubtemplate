import {
  Beef,
  Drumstick,
  IceCreamCone,
  CupSoda,
  Pizza,
  Sandwich,
} from 'lucide-react'

const CATEGORIES = [
  { icon: Sandwich, title: 'Burgers', sub: 'Juicy & Cheesy' },
  { icon: Beef, title: 'Fries', sub: 'Crispy & Golden' },
  { icon: Pizza, title: 'Pizza', sub: 'Hot & Delicious' },
  { icon: CupSoda, title: 'Drinks', sub: 'Chill & Refreshing' },
  { icon: Drumstick, title: 'Chicken', sub: 'Crispy & Spicy' },
  { icon: IceCreamCone, title: 'Desserts', sub: 'Sweet Treats' },
]

export function CategoryMenu() {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:-mt-24 lg:px-8">
      <div className="rounded-3xl bg-card-foreground/95 p-4 shadow-2xl sm:p-6">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-black/10">
          {CATEGORIES.map((c) => (
            <li key={c.title}>
              <a
                href="#menu"
                className="flex flex-col items-center gap-2 rounded-2xl px-3 py-4 text-center transition-colors hover:bg-black/5"
              >
                <c.icon className="size-9 text-neutral-900" strokeWidth={1.5} />
                <span className="text-sm font-extrabold uppercase tracking-wide text-neutral-900">
                  {c.title}
                </span>
                <span className="text-xs text-neutral-500">{c.sub}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
