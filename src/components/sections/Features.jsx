import Section from '../ui/Section.jsx'
import Icon from '../ui/Icon.jsx'
import CdnImage from '../ui/CdnImage.jsx'
import './Features.css'

const FEATURES = [
  {
    icon: 'dollar',
    title: 'Konversi tinggi',
    text: 'Brand yang kuat & media promosi yang beragam akan membawa keuntungan bagi member afiliasi. Traffic yang didatangkan kepada kami akan dikonversi.',
  },
  {
    icon: 'money-sack',
    title: 'Komisi dari performa',
    text: 'Semakin banyak penjualan, semakin besar komisi Anda.',
  },
  {
    icon: 'layers',
    title: 'Bisnis afiliasi termudah',
    text: 'Tingkatkan konversi dengan paket banner yang dirancang secara profesional, screnshot, dan banyak lagi.',
  },
]

export default function Features() {
  return (
    <Section bg="neutral-0" mode="light" spacing="2" className="features" aria-label="Keunggulan program afiliasi">
      <div className="container features__grid">
        <ul className="features__list">
          {FEATURES.map((f) => (
            <li key={f.title} className="feature">
              <span className="feature__icon">
                <Icon name={f.icon} size={24} />
              </span>
              <div className="feature__body">
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__text">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="features__media">
          <CdnImage
            id="b9676229-bc86-42d2-bc8b-26476148bb00"
            alt="Affiliate marketing yang mengutamakan pengguna"
            sizes="(min-width: 1025px) 568px, 100vw"
            widths={[420, 688, 1280]}
            className="features__image"
          />
        </div>
      </div>
    </Section>
  )
}
