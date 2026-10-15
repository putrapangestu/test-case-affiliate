import CtaBanner from '../ui/CtaBanner.jsx'
import { URLS } from '../../data/links.js'

export default function FaqBanner() {
  return (
    <CtaBanner
      id="faq"
      title="FAQ Afiliasi"
      description="Cek pertanyaan dan jawaban seputar cara memulai bisnis afiliasi."
      buttonLabel="Cek FAQ"
      buttonHref={URLS.faq}
    />
  )
}
