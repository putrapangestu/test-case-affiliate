import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import { URLS } from '../../data/links.js'
import './MediaAssets.css'

export default function MediaAssets() {
  return (
    <Section bg="primary-50" mode="light" spacing="2" className="media-assets" aria-labelledby="media-title">
      <div className="container media-assets__inner">
        <h2 id="media-title" className="media-assets__title">
          Media afiliasi
        </h2>
        <p className="media-assets__text">
          Maksimalkan afiliasi Anda dengan branded asset yang kami sediakan.
        </p>
        <Button variant="primary" size="lg" href={URLS.assets}>
          Lihat semua media
        </Button>
      </div>
    </Section>
  )
}
