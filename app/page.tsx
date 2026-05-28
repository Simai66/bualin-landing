import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Addons } from '@/components/Addons'
import { StudioRoom } from '@/components/StudioRoom'
import { GiftCards } from '@/components/GiftCards'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Addons />
      <StudioRoom />
      <GiftCards />
      <Contact />
    </main>
  )
}
