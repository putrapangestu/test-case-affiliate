import './Section.css'

export default function Section({
  bg = 'neutral-0',
  mode = 'light',
  spacing = '2',
  as: Tag = 'section',
  id,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'section',
    `section--${bg}`,
    `mode-${mode}`,
    `u-spacing-${spacing}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag id={id} className={classes} data-mode={mode} {...rest}>
      {children}
    </Tag>
  )
}
