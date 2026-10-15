import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import { URLS } from '../../data/links.js'
import './Hero.css'

export default function Hero() {
  return (
    <Section bg="primary-950" mode="dark" spacing="2" id="promo" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <h1 className="hero__title">Program Afiliasi PT Kerjasama</h1>
        <p className="hero__subtitle">
          Daftar program afiliasi kami dan dapatkan komisi besar. Tanpa biaya pendaftaran!
        </p>
        <Button variant="primary-on-dark" size="xl" href={URLS.affiliates}>
          Daftar program afiliasi
        </Button>
      </div>
    </Section>
  )
}
