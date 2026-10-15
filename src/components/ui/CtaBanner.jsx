import Section from './Section.jsx'
import Button from './Button.jsx'
import './CtaBanner.css'

export default function CtaBanner({
  id,
  title,
  description,
  buttonLabel,
  buttonHref,
  buttonVariant = 'neutral-on-dark',
}) {
  const titleId = `${id}-title`

  return (
    <Section bg="primary-900" mode="dark" spacing="2" id={id} className="cta-banner" aria-labelledby={titleId}>
      <div className="container cta-banner__inner">
        <h2 id={titleId} className="cta-banner__title">
          {title}
        </h2>
        <p className="cta-banner__text">{description}</p>
        <Button variant={buttonVariant} size="lg" href={buttonHref}>
          {buttonLabel}
        </Button>
      </div>
    </Section>
  )
}
