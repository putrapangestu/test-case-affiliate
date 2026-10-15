import './Icon.css'

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}
