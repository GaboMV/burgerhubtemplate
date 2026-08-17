import Image from 'next/image'
import { Clock } from 'lucide-react'

export function PromoBanner() {
  return (
    <section id="offers" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-8 text-brand-foreground sm:px-10 lg:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
            {/* Hungry / We deliver fast */}
            <div className="flex items-center gap-4">
              <Clock className="size-12 shrink-0" strokeWidth={1.5} />
              <div className="leading-none">
                <p className="text-sm font-bold uppercase tracking-wide">
                  Hungry?
                </p>
                <p className="font-display text-3xl sm:text-4xl">
                  WE DELIVER FAST!
                </p>
              </div>
            </div>

            <div
              className="hidden h-16 w-px bg-brand-foreground/20 sm:block"
              aria-hidden="true"
            />

            {/* Offer */}
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl sm:text-5xl">
                GET{' '}
                <span className="align-top text-6xl sm:text-7xl">20%</span> OFF
              </span>
              <div className="leading-tight">
                <p className="font-display text-2xl">
                  ON YOUR
                  <br />
                  FIRST ORDER
                </p>
                <span className="mt-2 inline-block rounded-md bg-brand-foreground px-4 py-1.5 font-display text-lg tracking-widest text-brand">
                  WELCOME20
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-32 w-full max-w-xs justify-self-end lg:h-40">
            <Image
              src="/images/delivery-rider.png"
              alt="Delivery courier on a scooter"
              fill
              sizes="320px"
              className="object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
