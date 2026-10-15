export const CDN_BASE =
  'https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA'

export const cdnImage = (id, variant = 'public') => `${CDN_BASE}/${id}/${variant}`

export const cdnSrcSet = (id, widths) =>
  widths.map((w) => `${cdnImage(id, `w=${w},sharpen=1`)} ${w}w`).join(', ')

export const URLS = {
  home: 'https://www.hostinger.com/id/',
  affiliates: 'https://affiliates.hostinger.com/',
  faq: 'https://www.hostinger.com/id/affiliates/faqs',
  assets: 'https://www.hostinger.com/affiliates/assets',
  agreement: 'https://www.hostinger.com/id/legal/perjanjian-program-afiliasi',
  cookiePolicy: 'https://www.hostinger.com/id/legal/kebijakan-cookie',
  login: 'https://hpanel.hostinger.com/login',
  register: 'https://www.hostinger.com/id/harga',
}
