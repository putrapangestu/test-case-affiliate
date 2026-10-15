import { useEffect, useRef, useState } from 'react'
import Section from '../ui/Section.jsx'
import Icon from '../ui/Icon.jsx'
import CdnImage from '../ui/CdnImage.jsx'
import './Testimonials.css'

const PROVIDER_LOGO = 'bd213b5d-6602-4e06-025d-3b5b2c03d700'

const TESTIMONIALS = [
  {
    logo: '042ad694-5799-4cbf-bcd6-54db92dfc000',
    text: 'Kolaborasi kami dengan Hostinger sangat mengesankan. Kemitraan dengan komisi besar dan tentunya saling menguntungkan. Hostinger sangat kami rekomendasikan untuk Anda yang mencari kemitraan jangka panjang.',
  },
  {
    logo: 'c2ffa5d8-dba8-4ce9-2683-9e1094b8e600',
    text: 'Kemitraan kami dengan Hostinger sangat memuaskan. Timnya andal, profesional, ramah, dan suportif. Komisi yang diberikan besar dan tepat waktu. Kami senang bisa bekerja sama dengan Hostinger.',
  },
  {
    logo: '8bda9c96-3341-459e-f1da-1bf53c2a6b00',
    text: 'Tingkat konversi tinggi, pembayaran tepat waktu, dan bantuan pelanggan cepat. Meningkatkan pendapatan kami secara signifikan.',
  },
]

export default function Testimonials() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const onScroll = () => {
      const cards = Array.from(track.children)
      const left = track.scrollLeft
      let nearest = 0
      let min = Infinity
      cards.forEach((card, i) => {
        const d = Math.abs(card.offsetLeft - track.offsetLeft - left)
        if (d < min) {
          min = d
          nearest = i
        }
      })
      // Di ujung kanan, anggap kartu terakhir yang aktif
      if (left + track.clientWidth >= track.scrollWidth - 2) nearest = cards.length - 1
      setActive(nearest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (index) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(index, TESTIMONIALS.length - 1))
    const card = track.children[clamped]
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    setActive(clamped)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(active + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(active - 1)
    }
  }

  return (
    <Section bg="neutral-0" mode="light" spacing="2" className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="testimonials__title">
          Testimoni partner kami
        </h2>

        <div
          ref={trackRef}
          className="testimonials__track"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimoni partner"
          onKeyDown={onKeyDown}
        >
          {TESTIMONIALS.map((item, i) => (
            <figure
              key={item.logo}
              className="testimonial-card"
              aria-roledescription="slide"
              aria-label={`${i + 1} dari ${TESTIMONIALS.length}`}
            >
              <div className="testimonial-card__logos">
                <CdnImage
                  id={item.logo}
                  alt="Review provider"
                  widths={[320, 420]}
                  sizes="160px"
                  className="testimonial-card__logo"
                />
                <CdnImage
                  id={PROVIDER_LOGO}
                  alt="Review provider"
                  widths={[320]}
                  sizes="120px"
                  className="testimonial-card__provider"
                />
              </div>
              <blockquote className="testimonial-card__text">
                <p>{item.text}</p>
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="testimonials__controls">
          <button
            type="button"
            className="testimonials__nav testimonials__nav--prev"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Testimoni sebelumnya"
          >
            <Icon name="arrow-right" size={20} />
          </button>

          <div className="testimonials__dots">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.logo}
                type="button"
                className={`testimonials__dot${i === active ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Tampilkan testimoni ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonials__nav"
            onClick={() => goTo(active + 1)}
            disabled={active === TESTIMONIALS.length - 1}
            aria-label="Testimoni berikutnya"
          >
            <Icon name="arrow-right" size={20} />
          </button>
        </div>
      </div>
    </Section>
  )
}
