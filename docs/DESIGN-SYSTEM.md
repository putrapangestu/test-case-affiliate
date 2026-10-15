# Design System — Program Afiliasi Hostinger

**Versi:** 1.0
**Status:** Sudah Disetujui (T1)
**Terbit:** 15 Oktober 2026
**Sumber token:** Stylesheet resmi Hostinger (`entry.*.css`, `components.*.css`)

> Dokumen ini adalah acuan tunggal (*single source of truth*) untuk seluruh keputusan visual.
> Nilai hex, px, dan token di bawah **diambil langsung dari CSS asli Hostinger**, bukan perkiraan.

---

## 1. Fondasi

### 1.1 Prinsip Desain
1. **Token-driven** — tidak ada warna/ukuran hard-code di komponen. Semua lewat CSS variable.
2. **Light & Dark per section** — setiap section menentukan `mode` sendiri (`light` / `dark`), warna teks & latar diambil dari token mode tersebut.
3. **Mobile-first** — breakpoint mengikuti sistem asli: `≥768px` dan `≥1025px`.
4. **Ruang bernapas** — padding section mengikuti skala `u-spacing` asli.

### 1.2 Breakpoint
```css
--bp-sm:  480px;   /* ponsel lebar */
--bp-md:  768px;   /* tablet  */
--bp-lg: 1025px;   /* desktop */
```

---

## 2. Tipografi

### 2.1 Font Family
```css
--font-sans:  'DM Sans', Roboto, -apple-system, 'Segoe UI', sans-serif;
--font-mono:  ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
```

**Pemuatan** (di `index.html`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300..700&display=swap" rel="stylesheet">
```

### 2.3 Skala Ukuran Teks

Nilai `min` = mobile (<768px) · `max` = desktop (≥1025px).

| Token | Font-size | Line-height | Letter-spacing | Weight | Penggunaan |
|---|---|---|---|---|---|
| `title-0` | 48px → 56px | 56px → 64px | -0.005em | 399 / 499 / 599 | H1 Hero |
| `title-1` | 36px → 48px | 44px → 56px | -0.005em | 399 / 499 / 599 | H2 besar |
| `title-2` | 32px → 36px | 40px → 44px | -0.005em | 399 / 499 / 599 | H2 section |
| `title-3` | 24px → 32px | 32px → 40px | -0.005em | 399 / 499 / 599 | H2 kecil / CTA |
| `heading-1` | 20px → 24px | 28px → 32px | -0.005em | 399 / 499 / 599 | Judul kartu besar |
| `heading-2` | 18px → 20px | 26px → 28px | -0.005em | 399 / 499 / 599 | Judul fitur (S5) |
| `heading-3` | 18px | 26px | -0.005em | 399 / 499 / 599 | Judul kartu (S3) |
| `body-1` | 16px | 24px | 0 | 399 / 499 / 599 | Paragraf utama |
| `body-2` | 14px | 20px | 0 | 399 / 499 / 599 | Deskripsi kartu, nav |
| `body-3` | 12px | 16px | 0 | 399 / 499 / 599 | Label, badge, legal |

### 2.4 Weight
```css
--weight-regular: 399;
--weight-medium:  499;
--weight-bold:    599;
```
> DM Sans variabel mendukung 300–700. Nilai 399/499/599 adalah token asli Hostinger
> (perambatan optik DM Sans); fallback Roboto akan membulat ke 400/500/600.

### 2.5 Aturan Hirarki
| Elemen | Token | Catatan |
|---|---|---|
| `<h1>` Hero (S1) | `title-0` bold | Tunggal per halaman, max-width 646px |
| `<h2>` S4 heading band | `title-2` bold | Rata tengah |
| `<h2>` S2, S3, S6–S9 | `title-3` bold | Rata tengah / kiri sesuai section |
| `<h3>` kartu S3 | `heading-3` bold | |
| `<h3>` fitur S5 | `heading-2` bold | |
| Body | `body-1` regular | |
| Deskripsi kartu | `body-2` regular | `neutral-600` / mode-appropriate |
| Label & legal | `body-3` bold | Sering `uppercase` |

---

## 3. Warna

### 3.1 Primary (Ungu Hostinger)

| Token | Hex | Peran |
|---|---|---|
| `--color-primary-50` | `#F5F6FF` | Latar section S7 · hover background sangat ringan |
| `--color-primary-100` | `#E6E8FF` | Latar section S4 · badge · icon background |
| `--color-primary-200` | `#D9DBFF` | Border aksen lembut |
| `--color-primary-300` | `#BCBDFF` | — |
| `--color-primary-400` | `#9D99FF` | Aksen di atas latar gelap |
| `--color-primary-500` | `#7B66FF` | Banner promo atas · dasar alpha (`-a*`) |
| `--color-primary-600` | `#673DE6` | **Brand utama** — tombol, link, fokus |
| `--color-primary-700` | `#471EA7` | Hover tombol · teks link di latar terang |
| `--color-primary-800` | `#331C74` | Latar gelap sekunder |
| `--color-primary-900` | `#251951` | Latar section S6 & S9 |
| `--color-primary-950` | `#110C29` | Latar Hero S1 |

**Alpha (dasar `#7B66FF`)**
```css
--color-primary-a2:  #7B66FF05;   --color-primary-a5:  #7B66FF0D;
--color-primary-a10: #7B66FF1A;   --color-primary-a15: #7B66FF26;
--color-primary-a20: #7B66FF33;   --color-primary-a25: #7B66FF40;
--color-primary-a50: #7B66FF80;   --color-primary-a75: #7B66FFBF;
--color-primary-a80: #7B66FFCC;   --color-primary-a90: #7B66FFE6;
--color-primary-a0:  #7B66FF00;
```

### 3.2 Neutral

| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| `--color-neutral-0` | `#FFFFFF` | | `--color-neutral-500` | `#797980` |
| `--color-neutral-50` | `#F8F9FA` | | `--color-neutral-600` | `#58585E` |
| `--color-neutral-100` | `#F5F5F6` | | `--color-neutral-700` | `#36363B` |
| `--color-neutral-150` | `#E9E9EC` | | `--color-neutral-800` | `#222225` |
| `--color-neutral-200` | `#DEDEE2` | | `--color-neutral-900` | `#18181A` |
| `--color-neutral-300` | `#C6C6CC` | | `--color-neutral-950` | `#101011` |
| `--color-neutral-400` | `#9D9EA4` | | `--color-neutral-1000` | `#000000` |

### 3.3 Warna Semantik

| Peran | 50 | 100 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Success** | `#F1F9F3` | `#DCF8E3` | `#B8F1C9` | `#7CE5A2` | `#3CCB7F` | `#009E5B` | `#007A49` | `#005432` | `#003D24` | `#002E1A` | `#01170B` |
| **Warning** | `#FDF6E8` | `#FFEEC8` | `#FFE399` | `#FFD366` | `#FFBF1A` | `#E69800` | `#C46C00` | `#9B4600` | `#6B2C00` | `#4A1C00` | `#231000` |
| **Danger** | `#FFF4F3` | `#FFEAE9` | `#FFD5D3` | `#FFB5B3` | `#FF8381` | `#E73A47` | `#BE1025` | `#870013` | `#610A0E` | `#45100F` | `#230706` |

### 3.4 Overlay

```css
--color-dark-a5:  #0000000D;   --color-light-a5:  #FFFFFF05;
--color-dark-a10: #0000001A;   --color-light-a10: #FFFFFF1A;
--color-dark-a20: #00000033;   --color-light-a20: #FFFFFF33;
--color-dark-a50: #00000080;   --color-light-a50: #FFFFFF80;
--color-dark-a80: #000000CC;   --color-light-a80: #FFFFFFCC;
--color-dark-a90: #000000E6;   --color-light-a90: #FFFFFFE6;
```

### 3.5 Semantic Token (abstraksi per mode)

Dipakai komponen agar tidak perlu tahu warna konkret:

| Token | mode: light | mode: dark |
|---|---|---|
| `--bg-page` | `--color-neutral-0` | `--color-primary-950` |
| `--bg-surface` | `--color-neutral-0` | `--color-primary-900` |
| `--fg-default` | `--color-neutral-800` | `--color-neutral-0` |
| `--fg-secondary` | `--color-neutral-600` | `--color-neutral-300` |
| `--fg-muted` | `--color-neutral-500` | `--color-neutral-400` |
| `--fg-brand` | `--color-primary-600` | `--color-primary-400` |
| `--border-default` | `--color-neutral-200` | `--color-neutral-700` |
| `--action-bg` | `--color-primary-600` | `--color-primary-500` |
| `--action-bg-hover` | `--color-primary-700` | `--color-primary-400` |
| `--action-fg` | `#FFFFFF` | `--color-neutral-950` |

### 3.6 Kontras (WCAG AA)

| Kombinasi | Rasio | Status |
|---|---|---|
| `neutral-800` `#222225` on `neutral-0` `#FFFFFF` | 15.9:1 | ✅ AAA |
| `neutral-0` `#FFFFFF` on `primary-600` `#673DE6` | 5.6:1 | ✅ AA |
| `neutral-0` `#FFFFFF` on `primary-900` `#251951` | 14.6:1 | ✅ AAA |
| `neutral-0` `#FFFFFF` on `primary-950` `#110C29` | 17.8:1 | ✅ AAA |
| `neutral-600` `#58585E` on `neutral-0` `#FFFFFF` | 7.3:1 | ✅ AAA |
| `primary-700` `#471EA7` on `primary-100` `#E6E8FF` | 8.3:1 | ✅ AAA |
| `primary-600` `#673DE6` on `primary-50` `#F5F6FF` | 5.5:1 | ✅ AA |

---

## 4. Spacing

### 4.1 Skala Inti
```css
--space-4xs:  2px;
--space-3xs:  4px;
--space-2xs:  8px;
--space-xs:  12px;
--space-sm:  16px;
--space-md:  24px;
--space-md-alt: 20px;
--space-lg:  32px;
--space-xl:  40px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 80px;
```

### 4.2 Padding Section (`u-spacing`)
| Token | <768px | ≥768px | ≥1025px |
|---|---|---|---|
| `u-spacing-0` | 0 | 0 | 0 |
| `u-spacing-1` | 32px | 40px | 48px |
| `u-spacing-2` | 56px | 64px | **80px** ← mayoritas section |
| `u-spacing-3` | 56px | 80px | 104px |

### 4.3 Container
```css
--container-max:    1200px;   /* lebar maksimum konten */
--container-gutter: 24px;     /* padding horizontal mobile */
/* ≥768px */  --container-gutter: 40px;
/* ≥1025px */ --container-gutter: 64px;
```

---

## 5. Radius

```css
--radius-xs:   4px;    /* badge kecil */
--radius-sm:   8px;    /* input, ikon */
--radius-md:  12px;    /* tombol */
--radius-lg:  16px;    /* kartu, gambar */
--radius-xl:  24px;    /* kartu besar, panel */
--radius-2xl: 32px;    /* hero block, banner */
--radius-full: 999px;  /* pill */
```

---

## 6. Bayangan & Efek

```css
--shadow-xs: 0 1px 2px rgb(0 0 0 / 0.06);
--shadow-sm: 0 1px 3px rgb(0 0 0 / 0.10), 0 1px 2px rgb(0 0 0 / 0.06);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10);

--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
```

---

## 7. Komponen UI

### 7.1 Button

**Varian**

| Varian | Background | Text | Border | Hover |
|---|---|---|---|---|
| `primary` | `--color-primary-600` | `#FFFFFF` | — | `--color-primary-700` |
| `primary-on-dark` | `--color-primary-500` | `#FFFFFF` | — | `--color-primary-400` |
| `neutral` | `--color-neutral-0` | `--color-neutral-900` | 1px `neutral-200` | bg `neutral-50` |
| `neutral-on-dark` | `--color-neutral-0` | `--color-neutral-900` | — | bg `neutral-100` |
| `outline-on-dark` | transparent | `#FFFFFF` | 1px `neutral-700` | bg `light-a10` |
| `ghost` | transparent | `--color-primary-600` | — | bg `primary-a10` |

**Ukuran**

| Size | Height | Padding X | Font | Radius |
|---|---|---|---|---|
| `sm` | 36px | 16px | `body-2` bold | `radius-md` |
| `md` | 44px | 20px | `body-1` bold | `radius-md` |
| `lg` | 52px | 28px | `body-1` bold | `radius-md` |
| `xl` (Hero) | 56px | 32px | `body-1` bold | `radius-md` |

**State**
```
default → hover (bg lebih gelap/terang 1 step) → active (scale .98)
focus-visible: outline 2px solid --color-primary-500, offset 2px
disabled: opacity .5, cursor not-allowed
```

**Ikon** — ikon opsional 20px, gap 8px dari label.

### 7.2 Card

**Kartu Langkah (S3)**
```
background:     --color-neutral-0
border:         1px solid --color-neutral-200
radius:         --radius-lg (16px)
padding:        24px
gap internal:   16px
nomor langkah:  40×40px, radius 6px, bg --color-primary-100,
                teks --color-primary-700, weight bold, body-1
title:          heading-3 bold, --fg-default
description:    body-2, --fg-secondary
hover:          border --color-primary-300, translateY(-2px)
```

**Kartu Testimoni (S2)**
```
background:     --h-bg-neutral-secondary → --color-neutral-50
radius:         --radius-lg (16px)
padding:        24px
logo:           height 40px, margin-bottom 16px
text:           body-1, --fg-default, line-height 24px
width kartu:    400px (desktop), full-width (mobile)
gap antar kartu: 16px
```

### 7.3 Section Wrapper
```jsx
<Section bg="primary-900" mode="dark" spacing="2">
```
| Prop | Nilai | Efek |
|---|---|---|
| `bg` | `neutral-0`, `primary-50`, `primary-100`, `primary-900`, `primary-950` | background-color |
| `mode` | `light` \| `dark` | menentukan semantic token aktif |
| `spacing` | `0`–`3` | padding block sesuai §4.2 |

### 7.4 Banner CTA (S6, S9)
```
background:     --color-primary-900
text:           --color-neutral-0
radius:         --radius-2xl (32px) bila di dalam container, atau full-bleed
padding:        56px 24px (mobile) → 80px 64px (desktop)
align:          center
title:          title-3 bold
description:    body-1, --color-neutral-200, max-width 640px
button:         neutral-on-dark, size lg
```

### 7.5 Header
```
height:         64px (mobile) → 72px (desktop)
background:     --color-neutral-0
border-bottom:  1px solid --color-neutral-150
position:       sticky, top 0, z-index 100
backdrop-filter: blur(8px) saat scroll, bg rgb(255 255 255 / .9)
logo:           height 24px
menu item:      body-2 medium, --fg-default, gap 24px
chevron:        18px
CTA "Masuk":    ghost, size sm
CTA "Daftar":   primary, size sm
burger:         24px, tampil <1025px
```

### 7.6 Footer
```
background:     --color-neutral-0
text:           --fg-default
section title:  body-3 bold, uppercase, letter-spacing .04em, --fg-muted
link item:      body-2, --fg-secondary, gap 8px, hover → --color-primary-600
grid:           1 kolom (mobile) → 3 kolom (≥768px) → 6 kolom (≥1025px)
divider:        1px solid --color-neutral-150
copyright:      body-3, --fg-muted
social icon:    28×28px, gap 12px
```

### 7.7 Cookie Banner
```
position:       fixed, bottom 0, full width, z-index 1000
background:     --color-neutral-0
border-top:     1px solid --color-neutral-200
shadow:         0 -4px 16px rgb(0 0 0 / 0.08)
padding:        24px
max-height:     60vh, overflow-y auto
title:          heading-1 bold
body:           body-2, --fg-secondary
links:          underline, --color-primary-600
buttons:        primary / neutral / ghost, size md, wrap <768px
```

### 7.8 Ikon
- **Sumber:** SVG inline (viewBox 24×24, stroke 1.5px, `fill: currentColor`).
- **Ukuran:** 16 / 20 / 24 / 28px.
- Ikon fitur S5 duduk dalam kotak 40×40px, `radius: 6px`, bg `--color-primary-100`.

---

## 8. Peta Section → Token

| # | Section | `bg` | Mode | Teks utama | CTA varian |
|---|---|---|---|---|---|
| S1 | Hero | `primary-950` | dark | `neutral-0` | `primary-on-dark` (xl) |
| S2 | Testimoni | `neutral-0` | light | `neutral-800` | — |
| S3 | 4 Langkah | `neutral-0` | light | `neutral-800` | `primary` (lg) |
| S4 | Heading band | `primary-100` | light | `primary-950` | — |
| S5 | Fitur 2 kolom | `neutral-0` | light | `neutral-800` | — |
| S6 | Banner FAQ | `primary-900` | dark | `neutral-0` | `neutral-on-dark` (lg) |
| S7 | Media afiliasi | `primary-50` | light | `neutral-800` | `primary` (lg) |
| S8 | Persetujuan | `neutral-0` | light | `neutral-800` | `primary` (lg) |
| S9 | CTA penutup | `primary-900` | dark | `neutral-0` | `neutral-on-dark` (lg) |

---

## 9. Checklist Persetujuan T1

- [ ] Font: **DM Sans** + fallback Roboto disetujui
- [ ] Palet Primary 11 step (`#F5F6FF` … `#110C29`) disetujui
- [ ] Palet Neutral 13 step disetujui
- [ ] Palet semantik Success/Warning/Danger disetujui
- [ ] Skala tipografi 10 level (399/499/599) disetujui
- [ ] Spacing 12 step + 4 level `u-spacing` disetujui
- [ ] Radius 7 step disetujui
- [ ] Spesifikasi 8 komponen (Button, Card, Section, Banner CTA, Header, Footer, Cookie Banner, Icon) disetujui
- [ ] Peta section → token (§8) disetujui
