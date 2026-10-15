import { useState } from 'react'
import { cdnImage, cdnSrcSet } from '../../data/links.js'
import './CdnImage.css'

const DEFAULT_WIDTHS = [320, 420, 688, 1280]

export default function CdnImage({
  id,
  alt,
  width,
  height,
  sizes = '100vw',
  widths = DEFAULT_WIDTHS,
  loading = 'lazy',
  className = '',
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`cdn-image cdn-image--fallback ${className}`.trim()}
        role="img"
        aria-label={alt}
        style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined }}
      />
    )
  }

  return (
    <img
      className={`cdn-image ${className}`.trim()}
      src={cdnImage(id)}
      srcSet={cdnSrcSet(id, widths)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
