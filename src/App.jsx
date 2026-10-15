import Hero from './components/sections/Hero.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import Steps from './components/sections/Steps.jsx'
import FeatureHeading from './components/sections/FeatureHeading.jsx'
import Features from './components/sections/Features.jsx'
import FaqBanner from './components/sections/FaqBanner.jsx'
import MediaAssets from './components/sections/MediaAssets.jsx'
import Agreement from './components/sections/Agreement.jsx'
import FinalCta from './components/sections/FinalCta.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Steps />
      <FeatureHeading />
      <Features />
      <FaqBanner />
      <MediaAssets />
      <Agreement />
      <FinalCta />
    </main>
  )
}
