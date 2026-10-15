import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import { URLS } from '../../data/links.js'
import './Steps.css'

const STEPS = [
  {
    title: 'Daftar afiliasi cepat',
    text: 'Daftar dan buat akun afiliasi tak sampai semenit gratis. Verifikasi akun dan dapatkan akses untuk masuk ke dashboard afiliasi.',
  },
  {
    title: 'Lacak performa',
    text: 'Dapatkan akses ke salah satu control panel afiliasi terbaik. Lacak dan optimasi campaign afiliasi mudah dan praktis.',
  },
  {
    title: 'Pasang Banner Afiliasi',
    text: 'Anda tidak akan memulai dengan tangan kosong. Dapatkan semua media marketing di satu tempat dan bisa disesuaikan dengan keinginan Anda.',
  },
  {
    title: 'Klaim komisi afiliasi',
    text: 'Dapatkan komisi untuk setiap penjualan yang memenuhi syarat. Mulai dari 40% dan akan terus bertambah sesuai total penjualan.',
  },
]

export default function Steps() {
  return (
    <Section bg="neutral-0" mode="light" spacing="2" className="steps" aria-labelledby="steps-title">
      <div className="container">
        <h2 id="steps-title" className="steps__title">
          4 langkah mudah daftar program afiliasi
        </h2>

        <ol className="steps__grid">
          {STEPS.map((step, i) => (
            <li key={step.title} className="step-card">
              <span className="step-card__number" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="step-card__title">
                <span className="visually-hidden">Langkah {i + 1}: </span>
                {step.title}
              </h3>
              <p className="step-card__text">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="steps__cta">
          <Button variant="primary" size="lg" href={URLS.affiliates}>
            Daftar afiliasi
          </Button>
        </div>
      </div>
    </Section>
  )
}
