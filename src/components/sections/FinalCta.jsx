import CtaBanner from '../ui/CtaBanner.jsx'
import { URLS } from '../../data/links.js'

export default function FinalCta() {
  return (
    <CtaBanner
      id="final-cta"
      title="Coba peruntungan Anda di afiliasi"
      description="Performa semakin bagus, komisi semakin tinggi. Kami bantu hingga afiliasi Anda sukses."
      buttonLabel="Daftar Afiliasi"
      buttonHref={URLS.affiliates}
    />
  )
}
