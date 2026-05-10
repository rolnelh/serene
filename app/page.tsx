import Nav          from '@/components/Nav'
import Hero         from '@/components/Hero'
import Problem      from '@/components/Problem'
import HowItWorks   from '@/components/HowItWorks'
import Features     from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing      from '@/components/Pricing'
import FinalCta     from '@/components/FinalCta'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FinalCta />
      <Footer />
    </main>
  )
}