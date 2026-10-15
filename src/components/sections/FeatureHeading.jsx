import Section from '../ui/Section.jsx'
import './Features.css'

export default function FeatureHeading() {
  return (
    <Section bg="primary-100" mode="light" spacing="2" className="feature-heading">
      <div className="container">
        <h2 className="feature-heading__title">Affiliate marketing yang mengutamakan pengguna</h2>
      </div>
    </Section>
  )
}
