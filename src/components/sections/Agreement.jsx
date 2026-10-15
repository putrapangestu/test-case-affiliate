import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import CdnImage from '../ui/CdnImage.jsx'
import { URLS } from '../../data/links.js'
import './Agreement.css'

export default function Agreement() {
  return (
    <Section bg="neutral-0" mode="light" spacing="2" className="agreement" aria-labelledby="agreement-title">
      <div className="container agreement__grid">
        <div className="agreement__content">
          <h2 id="agreement-title" className="agreement__title">
            Persetujuan Program Afiliasi
          </h2>
          <p className="agreement__text">
            Tertarik bergabung? Baca panduan kami dengan saksama, lalu daftar afiliasi kami!
          </p>
          <Button variant="primary" size="lg" href={URLS.agreement}>
            Lihat selengkapnya
          </Button>
        </div>

        <div className="agreement__media">
          <CdnImage
            id="9e6f1116-1ad6-469c-b7d7-fc9e071b1a00"
            alt="Persetujuan Program Afiliasi"
            sizes="(min-width: 1025px) 568px, 100vw"
            widths={[420, 688, 1280]}
            className="agreement__image"
          />
        </div>
      </div>
    </Section>
  )
}
