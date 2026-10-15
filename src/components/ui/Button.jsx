import Icon from './Icon.jsx'
import './Button.css'

const isExternal = (href) => /^https?:\/\//.test(href)

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} size={20} />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size={20} />}
    </>
  )

  if (href) {
    const external = isExternal(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} disabled={disabled} {...rest}>
      {content}
    </button>
  )
}
