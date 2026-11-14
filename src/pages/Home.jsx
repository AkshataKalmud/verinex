import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'

function Home() {
  return (
    <main>
      <Hero />
      <img className="banner" src="/hero-bg.jpg" alt="Person submitting documents online with VERINEX" />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default Home