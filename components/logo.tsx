import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span
        className="flex size-9 items-center justify-center rounded-full bg-brand text-brand-foreground"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 11a9 9 0 0 1 18 0" />
          <path d="M2 11h20" />
          <path d="M4 15h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4Z" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="font-display text-lg tracking-wide">
          BURGER <span className="text-brand">HUB</span>
        </span>
        <span className="block text-[9px] font-semibold tracking-[0.2em] text-muted-foreground">
          FAST. FRESH. DELICIOUS.
        </span>
      </span>
    </div>
  )
}
