import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { CategoryMenu } from '@/components/category-menu'
import { Bestsellers } from '@/components/bestsellers'
import { PromoBanner } from '@/components/promo-banner'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <CategoryMenu />
      <Bestsellers />
      <PromoBanner />
      <SiteFooter />
    </main>
  )
}
