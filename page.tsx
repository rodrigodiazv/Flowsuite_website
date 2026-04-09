import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import Sectors from '@/components/Sectors'
import Demo from '@/components/Demo'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Sectors />
      <Demo />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
