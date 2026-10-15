# Subtasks — Program Afiliasi Hostinger (Single Page)

**Versi:** 1.0
**Status:** Sudah Disetujui (T2)
**Terbit:** 15 Oktober 2026
**Dependensi:** `docs/PRD.md` (T0 ✅) · `docs/DESIGN-SYSTEM.md` (T1 ✅)

> **Aturan kerja:** Setiap subtask hanya boleh dikerjakan setelah subtask sebelumnya disetujui.
> Status: `⬜ belum mulai` · `🟡 dikerjakan` · `✅ selesai & disetujui` · `🔁 revisi`

---

## Peta Kerja Besar

```
FASE A — Fondasi
  A1 → A2 → A3

FASE B — Section Konten
  B1 → B2 → B3 → B4 → B5 → B6 → B7 → B8 → B9

FASE C — Shell Halaman
  C1 → C2 → C3

FASE D — Perapian
  D1 → D2 → D3

FASE E — Final
  E1 → E2
```

**Total: 19 subtask**

---

## FASE A — Fondasi

### A1. Bersihkan template demo
| | |
|---|---|
| **Depends on** | T2 approval |
| **Estimasi** | 10 menit |
| **File** | `src/App.jsx`, `src/App.css`, `src/index.css`, `src/assets/*`, `public/icons.svg` |

**Tugas:**
- [ ] Hapus konten demo bawaan (counter, hero React/Vite, ticks, docs section)
- [ ] Kosongkan `App.jsx` menjadi skeleton `<>...</>` sementara
- [ ] Hapus import `hero.png`, `react.svg`, `vite.svg`
- [ ] Hapus style demo di `App.css` dan `index.css`
- [ ] Biarkan `public/favicon.svg` (akan diganti di A3)

**Kriteria selesai:**
- `npm run dev` berjalan, halaman kosong tanpa error
- Tidak ada referensi ke aset demo
- `npm run build` sukses

---

### A2. Pasang design token
| | |
|---|---|
| **Depends on** | A1 ✅ |
| **Estimasi** | 25 menit |
| **File** | `src/styles/tokens.css`, `src/styles/base.css`, `src/styles/utilities.css`, `src/main.jsx` |

**Tugas:**
- [ ] `tokens.css` — deklarasikan seluruh variabel dari DESIGN-SYSTEM §3–§6:
  - Primary 11 step + 11 alpha
  - Neutral 13 step
  - Success/Warning/Danger 11 step each
  - Overlay dark/light
  - Semantic token per mode (`:root` light, `[data-mode="dark"]` dark)
  - Tipografi: `--font-sans`, size/height/weight 10 level
  - Spacing 12 step + `u-spacing` 4 level (dengan media query)
  - Radius 7 step, shadow, transition, breakpoint, container
- [ ] `base.css` — reset minimal, `html { scroll-behavior: smooth }`, `body` pakai `--font-sans`, heading margin reset, `img { max-width:100% }`, `:focus-visible` outline global
- [ ] `utilities.css` — `.container`, `.u-spacing-1..3`, `.t-uppercase`, `.text-center`
- [ ] Import ketiganya di `main.jsx` (urutan: tokens → base → utilities)
- [ ] Hapus `import './index.css'` lama atau ganti isinya

**Kriteria selesai:**
- Variabel bisa dipakai: `getComputedStyle(document.documentElement).getPropertyValue('--color-primary-600')` → `#673de6`
- Belum ada perubahan visual signifikan (halaman masih kosong)

---

### A3. Setup font, favicon, meta
| | |
|---|---|
| **Depends on** | A2 ✅ |
| **Estimasi** | 15 menit |
| **File** | `index.html`, `public/favicon.svg`, `src/App.jsx` |

**Tugas:**
- [ ] `index.html`:
  - `lang="id-ID"`
  - `<title>Program Afiliasi Hostinger</title>`
  - Meta description sesuai PRD §7
  - OG tags + Twitter card (`og-image.png` Hostinger)
  - Preconnect + link Google Fonts **DM Sans**
  - `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Ganti `public/favicon.svg` dengan ikon "H" ungu `#673DE6`
- [ ] Verifikasi `#root` terisi App

**Kriteria selesai:**
- Tab browser menampilkan judul & favicon benar
- DM Sans ter-load (cek DevTools → Network → fonts)
- Viewport tidak memicu zoom otomatis di mobile

---

> **🏁 CHECKPOINT A** — Fondasi siap. Minta persetujuan sebelum lanjut Fase B.

---

## FASE B — Section Konten (S1–S9)

### B1. Komponen UI dasar
| | |
|---|---|
| **Depends on** | Checkpoint A approval |
| **Estimasi** | 40 menit |
| **File** | `src/components/ui/Button.jsx`, `Button.css`, `Section.jsx`, `Section.css`, `Icon.jsx` |

**Tugas:**
- [ ] **`Button.jsx`**
  - Props: `variant`, `size`, `href`, `children`, `icon`, `iconPosition`, `aria-label`, `className`
  - Variant: `primary`, `primary-on-dark`, `neutral`, `neutral-on-dark`, `outline-on-dark`, `ghost`
  - Size: `sm` (36) / `md` (44) / `lg` (52) / `xl` (56)
  - Jika `href` ada → render `<a>`, selain itu `<button type="button">`
  - State: hover, active scale .98, focus-visible outline `primary-500` 2px offset 2px, disabled opacity .5
  - `rel="noopener noreferrer"` + `target="_blank"` untuk link eksternal
- [ ] **`Section.jsx`**
  - Props: `bg`, `mode`, `spacing`, `as`, `id`, `className`, `children`
  - Render tag `as` (default `section`) + class `section section--{bg} mode-{mode} u-spacing-{spacing}`
  - Set `data-mode={mode}` untuk mengaktifkan semantic token
- [ ] **`Icon.jsx`**
  - Props: `name`, `size`, `className`
  - Sprite dari `public/icons.svg` via `<use href="/icons.svg#nama">`
  - Definisikan ikon: `chevron-down`, `arrow-right`, `arrow-up-right`, `bars`, `dollar`, `money-sack`, `layers`, `check`, `close`, `star`, `play`
- [ ] CSS per komponen mengikuti DESIGN-SYSTEM §7.1, §7.3, §7.8

**Kriteria selesai:**
- Semua varian & ukuran Button terender benar (uji visual sementara di App)
- Section dengan `mode="dark"` menghasilkan teks putih
- Icon tampil dengan ukuran sesuai prop

---

### B2. S1 — Hero
| | |
|---|---|
| **Depends on** | B1 ✅ |
| **Estimasi** | 30 menit |
| **File** | `src/components/sections/Hero.jsx`, `Hero.css` |

**Spesifikasi (PRD §5 S1):**
- [ ] `<Section bg="primary-950" mode="dark" spacing="2" id="promo">`
- [ ] `<h1>` "Program Afiliasi Hostinger" — `title-0` bold, max-width 646px, center
- [ ] Subjudul — `body-1`, `neutral-200`, max-width 640px, center
- [ ] CTA "Daftar program afiliasi" → `https://affiliates.hostinger.com/`, Button `primary-on-dark` `xl`
- [ ] Layout: flex column, align center, gap 24px
- [ ] Optional: dekorasi gradien/glow ungu di latar (aksen `primary-500` alpha)

**Kriteria selesai:**
- Judul 1 baris di desktop, wrap rapi di mobile 360px
- Teks kontras AAA atas `#110C29`
- CTA terarah ke URL benar

---

### B3. S2 — Testimoni
| | |
|---|---|
| **Depends on** | B2 ✅ |
| **Estimasi** | 45 menit |
| **File** | `src/components/sections/Testimonials.jsx`, `Testimonials.css` |

**Spesifikasi (PRD §5 S2):**
- [ ] `<Section bg="neutral-0" mode="light" spacing="2">`
- [ ] `<h2>` "Testimoni partner kami" — `title-3` bold, center
- [ ] 3 kartu testimoni (teks persis di PRD §5 S2)
- [ ] Struktur kartu: logo (CDN) + paragraf — bg `neutral-50`, radius 16, padding 24, width 400px
- [ ] **Carousel sederhana**: scroll-snap horizontal + tombol prev/next
  - `scroll-snap-type: x mandatory`
  - Tombol: 40×40px, radius full, bg `neutral-0`, border `neutral-200`, ikon `arrow-right` (prev di-rotate)
  - Aksesibel: `aria-label` per tombol, `tabindex` pada track, keyboard ←/→
- [ ] Dots indikator (3 titik) — aktif `primary-600`, nonaktif `neutral-300`
- [ ] Mobile: kartu full-width, 1 terlihat

**Aset CDN:**
```
logo 1: bd213b5d-6602-4e06-025d-3b5b2c03d700
logo 2: 042ad694-5799-4cbf-bcd6-54db92dfc000
logo 3: c2ffa5d8-dba8-4ce9-2683-9e1094b8e600
logo 4: 8bda9c96-3341-459e-f1da-1bf53c2a6b00
```

**Kriteria selesai:**
- Scroll snap berfungsi di mouse & sentuh
- Tombol prev/next memindahkan 1 kartu
- Dots sinkron dengan posisi scroll
- Semua gambar punya `alt="Review provider"`

---

### B4. S3 — 4 Langkah
| | |
|---|---|
| **Depends on** | B3 ✅ |
| **Estimasi** | 35 menit |
| **File** | `src/components/sections/Steps.jsx`, `Steps.css` |

**Spesifikasi (PRD §5 S3):**
- [ ] `<Section bg="neutral-0" mode="light" spacing="2">`
- [ ] `<h2>` "4 langkah mudah daftar program afiliasi" — `title-3` bold, center
- [ ] 4 kartu (judul + deskripsi persis PRD)
- [ ] Nomor langkah: kotak 40×40, radius 6, bg `primary-100`, teks `primary-700` bold
- [ ] Grid: `repeat(4, 1fr)` ≥1025px · `repeat(2, 1fr)` ≥768px · 1 kolom <768px
- [ ] Gap 32px desktop / 24px tablet / 16px mobile
- [ ] Kartu: bg `neutral-0`, border 1px `neutral-200`, radius 16, padding 24, hover border `primary-300` + translateY(-2px)
- [ ] CTA center: "Daftar afiliasi" → `https://affiliates.hostinger.com/`, Button `primary` `lg`

**Kriteria selesai:**
- 4 kolom rata di 1440px, 2 kolom di 768px, 1 kolom di 360px
- Urutan nomor 1→4 benar
- CTA terarah URL benar

---

### B5. S4 + S5 — Heading band & Fitur
| | |
|---|---|
| **Depends on** | B4 ✅ |
| **Estimasi** | 40 menit |
| **File** | `src/components/sections/FeatureHeading.jsx`, `Features.jsx`, `Features.css` |

**S4 — Heading band (PRD §5 S4):**
- [ ] `<Section bg="primary-100" mode="light" spacing="2">`
- [ ] `<h2>` "Affiliate marketing yang mengutamakan pengguna" — `title-2` bold, center, teks `primary-950`

**S5 — Fitur 2 kolom (PRD §5 S5):**
- [ ] `<Section bg="neutral-0" mode="light" spacing="0">`
- [ ] Grid 2 kolom (1fr 1fr), gap 64px; tumpuk jadi 1 kolom <1025px
- [ ] Kolom kiri — 3 blok fitur:
  - Ikon 24px dalam kotak 40×40 radius 6 bg `primary-100`
  - `<h3>` `heading-2` bold
  - Deskripsi `body-1` `neutral-600`
  - Gap antar blok 32px
- [ ] Konten persis PRD §5 S5 (Konversi tinggi / Komisi dari performa / Bisnis afiliasi termudah)
- [ ] Kolom kanan — gambar CDN `b9676229-bc86-42d2-bc8b-26476148bb00`, radius 16, `alt="Affiliate marketing yang mengutamakan pengguna"`
- [ ] Mobile: gambar di bawah teks

**Kriteria selesai:**
- S4 & S5 tampil berurutan, latar sesuai token
- Ikon fitur konsisten 40×40
- Gambar tidak meluber di 360px

---

### B6. S6 + S7 — Banner FAQ & Media afiliasi
| | |
|---|---|
| **Depends on** | B5 ✅ |
| **Estimasi** | 35 menit |
| **File** | `src/components/sections/FaqBanner.jsx`, `MediaAssets.jsx`, shared `CtaBanner.css` |

**Buat `CtaBanner` reusable** (dipakai S6 & S9):
- Props: `title`, `description`, `buttonLabel`, `buttonHref`, `buttonVariant`
- Background `primary-900`, mode dark, radius 32 (bila non-fullbleed), center
- `title-3` bold putih, deskripsi `neutral-200` max-width 640px

**S6 — FAQ (PRD §5 S6):**
- [ ] `<CtaBanner>`: "FAQ Afiliasi" / "Cek pertanyaan dan jawaban seputar cara memulai bisnis afiliasi." / CTA "Cek FAQ" → `https://www.hostinger.com/id/affiliates/faqs` / varian `neutral-on-dark` `lg`

**S7 — Media afiliasi (PRD §5 S7):**
- [ ] `<Section bg="primary-50" mode="light" spacing="2">`
- [ ] `<h2>` "Media afiliasi" — `title-3` bold, center
- [ ] Deskripsi `body-1` `neutral-600`, center
- [ ] CTA "Lihat semua media" → `https://www.hostinger.com/affiliates/assets`, Button `primary` `lg`, center
- [ ] (Opsional) grid thumbnail aset dari CDN bila tersedia — jika tidak, layout teks + CTA saja

**Kriteria selesai:**
- S6 tampil gelap dengan teks kontras AAA
- S7 tampil dengan latar ungu sangat muda
- Kedua CTA menuju URL benar

---

### B7. S8 — Persetujuan Program
| | |
|---|---|
| **Depends on** | B6 ✅ |
| **Estimasi** | 30 menit |
| **File** | `src/components/sections/Agreement.jsx`, `Agreement.css` |

**Spesifikasi (PRD §5 S8):**
- [ ] `<Section bg="neutral-0" mode="light" spacing="2">`
- [ ] Grid 2 kolom, image-kiri atau image-kanan mengikuti asli (**gambar kanan**)
- [ ] `<h2>` "Persetujuan Program Afiliasi" — `title-3` bold
- [ ] Deskripsi `body-1` `neutral-600`
- [ ] CTA "Lihat selengkapnya" → `https://www.hostinger.com/id/legal/perjanjian-program-afiliasi`, Button `primary` `lg`
- [ ] Gambar CDN `9e6f1116-1ad6-469c-b7d7-fc9e071b1a00`, radius 16, `alt="Persetujuan Program Afiliasi"`
- [ ] Tumpuk 1 kolom <1025px

**Kriteria selesai:**
- Layout 2 kolom rapi, tumpuk di mobile
- CTA menuju URL legal benar

---

### B8. S9 — CTA penutup
| | |
|---|---|
| **Depends on** | B7 ✅ |
| **Estimasi** | 15 menit |
| **File** | `src/components/sections/FinalCta.jsx` |

**Spesifikasi (PRD §5 S9):**
- [ ] `<CtaBanner>` (komponen dari B6): "Coba peruntungan Anda di afiliasi" / "Performa semakin bagus, komisi semakin tinggi. Kami bantu hingga afiliasi Anda sukses." / CTA "Daftar Afiliasi" → `https://affiliates.hostinger.com/` / varian `neutral-on-dark` `lg`
- [ ] `<Section bg="primary-900" mode="dark" spacing="2">`

**Kriteria selesai:**
- Identik gaya S6
- CTA menuju `affiliates.hostinger.com`

---

### B9. Rakit urutan section di App
| | |
|---|---|
| **Depends on** | B8 ✅ |
| **Estimasi** | 15 menit |
| **File** | `src/App.jsx` |

**Tugas:**
- [ ] Rakit urutan sesuai PRD §5:
  ```
  Header (placeholder) → Hero → Testimonials → Steps →
  FeatureHeading → Features → FaqBanner → MediaAssets →
  Agreement → FinalCta → Footer (placeholder)
  ```
- [ ] Verifikasi tidak ada section terlewat/tukar
- [ ] Verifikasi background tiap section berurutan benar (gelap → terang → ungu → terang → gelap → ungu muda → terang → gelap)

**Kriteria selesai:**
- Scroll penuh menampilkan 9 section dengan urutan identik halaman asli
- Tidak ada gap/overflow antar section

---

> **🏁 CHECKPOINT B** — Konten utama selesai. Minta persetujuan sebelum Fase C.

---

## FASE C — Shell Halaman

### C1. Header navigasi
| | |
|---|---|
| **Depends on** | Checkpoint B approval |
| **Estimasi** | 50 menit |
| **File** | `src/components/layout/Header.jsx`, `Header.css` |

**Spesifikasi:**
- [ ] Sticky `top:0`, z-index 100, bg `neutral-0`, border-bottom `neutral-150`
- [ ] Backdrop blur saat scroll (`rgb(255 255 255/.9)` + `blur(8px)`)
- [ ] Logo Hostinger (SVG inline, tinggi 24px) → link ke `https://www.hostinger.com/id/`
- [ ] Menu desktop (≥1025px): **Harga · Produk ▾ · Solusi ▾ · Developer ▾ · Artikel ▾**
  - Item `body-2` medium, gap 24px, chevron 18px
  - Dropdown **buka-tutup sederhana** (klik), daftar tautan statis sesuai halaman asli
  - Tutup saat klik di luar / tekan Esc
- [ ] Aksi kanan: tombol "Masuk" (`ghost` sm) + "Daftar" (`primary` sm)
- [ ] Burger icon (<1025px) → panel menu mobile slide-down, item `body-1`, akordeon per grup
- [ ] Aksesibel: `aria-expanded`, `aria-haspopup`, `role="menu"`, fokus terkurung saat terbuka

**Dropdown content (minimal, sesuai halaman asli):**
- Produk: AI dan otomatisasi · Hosting · Domain · Website dan aplikasi · Ecommerce · Email marketing
- Solusi: Buat website · Bisnis online · Automasi · Untuk agency
- Developer: Template AI coding · Hostinger Connector
- Artikel: Blog · Product updates · Tutorial · Knowledge Base

**Kriteria selesai:**
- Dropdown terbuka/tertutup dengan klik & Esc
- Mobile burger berfungsi
- Header tidak menutupi konten (padding-top pada konten bila perlu)

---

### C2. Footer lengkap
| | |
|---|---|
| **Depends on** | C1 ✅ |
| **Estimasi** | 50 menit |
| **File** | `src/components/layout/Footer.jsx`, `Footer.css` |

**Spesifikasi:**
- [ ] `<footer>`, bg `neutral-0`, mode light
- [ ] 7 grup tautan (judul `body-3` bold uppercase `neutral-500`):
  1. **Afiliasi** — Program afiliasi, Program Referral, Educational partnership, Daftar Resmi Agency
  2. **Hosting** — Web hosting, Shared hosting, Hosting untuk WordPress, VPS hosting, Cloud hosting, Hosting untuk WooCommerce, Hosting untuk agensi, Email hosting, Self-hosted n8n, Minecraft hosting
  3. **Domain** — Cari domain murah, Beli domain, Gratis domain, WHOIS, SSL gratis, Transfer domain, Ekstensi domain
  4. **Tool** — AI builder, Drag-and-drop website builder, Ecommerce Website Builder, Template, Migrasi website, API Hostinger, AI Logo Generator, Print on demand, Link in Bio
  5. **Informasi** — Harga, Ulasan, Promo Black Friday, Roadmap, Status sistem, Sitemap, Pusat transparansi keamanan
  6. **Perusahaan** — Tentang Hostinger, Teknologi kami, Blog, Prinsip Hostinger
  7. **Bantuan** — Tutorial, Pengetahuan Dasar, Hostinger Academy, Hubungi kami, Laporkan penyalahgunaan, Cari partner & pakar
- [ ] Ikon sosial: 8 ikon 28×28, gap 12px (X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Reddit, Discord)
- [ ] Divider `neutral-150`
- [ ] Baris legal: Ketentuan Permintaan NPRD · Kebijakan Privasi · Kebijakan Pengembalian Uang · Ketentuan Penggunaan
- [ ] Copyright: `© 2004-2026 Hostinger. Mulai sukses online dengan bantuan AI yang beri Anda kontrol penuh.` + `Harga belum termasuk PPN`
- [ ] Grid: 1 kolom mobile → 3 kolom ≥768px → 6 kolom ≥1025px
- [ ] Hover link → `primary-600`

**Kriteria selesai:**
- Seluruh 7 grup tampil lengkap
- Layout rapi di 3 breakpoint
- Semua link punya `href` valid (boleh `#` untuk halaman non-eksternal)

---

### C3. Banner cookie
| | |
|---|---|
| **Depends on** | C2 ✅ |
| **Estimasi** | 25 menit |
| **File** | `src/components/layout/CookieBanner.jsx`, `CookieBanner.css` |

**Spesifikasi:**
- [ ] Fixed `bottom:0`, full-width, z-index 1000, bg `neutral-0`, border-top `neutral-200`, shadow atas
- [ ] `<h2>` "Kami menjaga informasi pribadi Anda" — `heading-1` bold
- [ ] Paragraf sesuai teks asli (PRD §5 banner cookie), `body-2` `neutral-600`, tautan "Kebijakan Cookie" → `https://www.hostinger.com/id/legal/kebijakan-cookie` (underline, `primary-600`)
- [ ] 3 tombol: **Setujui semua** (`primary` md) · **Tolak semua** (`neutral` md) · **Pengaturan cookie** (`ghost` md)
- [ ] State disimpan di `localStorage` (`h-cookie-consent`) — tidak muncul lagi setelah dipilih
- [ ] `role="dialog"`, `aria-labelledby`, fokus awal ke tombol pertama
- [ ] Mobile: tombol wrap vertikal, max-height 60vh + scroll

**Kriteria selesai:**
- Banner muncul saat pertama buka
- Hilang setelah salah satu tombol diklik dan tetap hilang setelah reload
- Tidak menghalangi konten secara permanen

---

> **🏁 CHECKPOINT C** — Halaman lengkap. Minta persetujuan sebelum Fase D.

---

## FASE D — Perapian

### D1. Responsif menyeluruh
| | |
|---|---|
| **Depends on** | Checkpoint C approval |
| **Estimasi** | 40 menit |
| **File** | seluruh `*.css` |

**Tugas:**
- [ ] Uji di lebar: **360 · 414 · 768 · 1024 · 1280 · 1440 · 1920 px**
- [ ] Perbaiki overflow horizontal (`document.documentElement.scrollWidth <= innerWidth`)
- [ ] Pastikan tiap section punya padding `u-spacing` benar per breakpoint
- [ ] Cek gambar tidak meluber / pecah
- [ ] Cek teks tidak terpotong pada 360px
- [ ] Cek grid berpindah kolom di breakpoint tepat (768, 1025)
- [ ] Header & Cookie banner tidak menutupi konten

**Kriteria selesai:**
- 0 horizontal scroll di semua lebar uji
- Semua section terbaca penuh tanpa tumpang tindih

---

### D2. Aksesibilitas
| | |
|---|---|
| **Depends on** | D1 ✅ |
| **Estimasi** | 35 menit |
| **File** | seluruh `*.jsx` |

**Checklist:**
- [ ] Tepat satu `<h1>` (Hero); `<h2>` tiap section; `<h3>` per kartu
- [ ] Semua gambar punya `alt` bermakna
- [ ] Semua tombol/link punya teks atau `aria-label`
- [ ] Kontras teks lolos WCAG AA (rujuk DESIGN-SYSTEM §3.6)
- [ ] Navigasi keyboard: urutan fokus logis, `:focus-visible` terlihat
- [ ] Carousel & dropdown beroperasi dengan keyboard
- [ ] Cookie banner: `role="dialog"` + `aria-labelledby`
- [ ] Dropdown: `aria-expanded`, `aria-haspopup`
- [ ] ARIA berlebih dihapus (peran semantik HTML diprioritaskan)

**Kriteria selesai:**
- Lighthouse Accessibility ≥ 90
- Bisa navigasi penuh hanya dengan Tab

---

### D3. SEO & meta
| | |
|---|---|
| **Depends on** | D2 ✅ |
| **Estimasi** | 20 menit |
| **File** | `index.html`, `src/App.jsx` |

**Checklist:**
- [ ] `<title>Program Afiliasi Hostinger</title>`
- [ ] Meta description persis: *"Nikmati komisi minimal 40% untuk setiap penjualan yang dinyatakan memenuhi syarat. Daftar Program Afiliasi Hostinger GRATIS dan raih penghasilan online mencapai ratusan juta rupiah sekarang!"*
- [ ] `og:title`, `og:description`, `og:image`, `og:type=website`, `og:locale=id_ID`
- [ ] `twitter:card=summary_large_image`
- [ ] `lang="id-ID"`
- [ ] Canonical link
- [ ] Struktur heading berhirarki benar
- [ ] Alt text seluruh gambar terisi

**Kriteria selesai:**
- Validator meta tag lengkap
- Preview OG bisa diuji (og-debugger)

---

> **🏁 CHECKPOINT D** — Siap QA. Minta persetujuan sebelum Fase E.

---

## FASE E — Final

### E1. QA & bug fixing
| | |
|---|---|
| **Depends on** | Checkpoint D approval |
| **Estimasi** | 45 menit |
| **File** | bervariasi |

**Checklist:**
- [ ] `npm run lint` → 0 error
- [ ] `npm run build` → sukses, 0 warning kritis
- [ ] `npm run preview` → verifikasi hasil build
- [ ] 0 error di console browser
- [ ] Semua CTA dicek satu per satu (tabel PRD §5):
  - S1 → `https://affiliates.hostinger.com/`
  - S3 → `https://affiliates.hostinger.com/`
  - S6 → `https://www.hostinger.com/id/affiliates/faqs`
  - S7 → `https://www.hostinger.com/affiliates/assets`
  - S8 → `https://www.hostinger.com/id/legal/perjanjian-program-afiliasi`
  - S9 → `https://affiliates.hostinger.com/`
- [ ] Semua gambar CDN termuat (cek Network, 0 broken image)
- [ ] `onError` fallback gambar berfungsi
- [ ] Font DM Sans terpakai (cek computed style)
- [ ] Cookie banner: muncul → klik → reload → tetap hilang
- [ ] Uji cross-browser: Chrome, Firefox, Edge

**Kriteria selesai:**
- Seluruh checklist lulus
- Tidak ada bug blocker tersisa

---

### E2. Final review & serah terima
| | |
|---|---|
| **Depends on** | E1 ✅ |
| **Estimasi** | 20 menit |
| **File** | `docs/PRD.md` (update status), `README.md` |

**Tugas:**
- [ ] Update tabel §10 PRD → seluruh tahap `✅`
- [ ] Centang seluruh DoD di PRD §9
- [ ] Centang checklist T1 di DESIGN-SYSTEM §9 & T2 di SUBTASKS
- [ ] Update `README.md`: cara menjalankan (`npm install`, `npm run dev`, `npm run build`)
- [ ] Daftar file yang dibuat/diubah
- [ ] Catatan keputusan desain yang diambil

**Kriteria selesai:**
- Semua dokumen konsisten & status final
- Proyek siap diserahkan/dideploy

---

## Ringkasan Estimasi

| Fase | Subtask | Estimasi |
|---|---|---|
| A — Fondasi | A1–A3 | ~50 menit |
| B — Section | B1–B9 | ~4 jam 15 menit |
| C — Shell | C1–C3 | ~2 jam 5 menit |
| D — Perapian | D1–D3 | ~1 jam 35 menit |
| E — Final | E1–E2 | ~1 jam 5 menit |
| **Total** | **19 subtask** | **~9 jam 55 menit** |

> Estimasi murni waktu kerja, tidak termasuk waktu review/persetujuan antar tahap.

---

## Papan Status

| ID | Subtask | Fase | Status |
|---|---|---|---|
| A1 | Bersihkan template demo | A | ⬜ |
| A2 | Pasang design token | A | ⬜ |
| A3 | Setup font, favicon, meta | A | ⬜ |
| **CK-A** | **Checkpoint A** | A | ⬜ |
| B1 | Komponen UI dasar | B | ⬜ |
| B2 | S1 — Hero | B | ⬜ |
| B3 | S2 — Testimoni | B | ⬜ |
| B4 | S3 — 4 Langkah | B | ⬜ |
| B5 | S4+S5 — Heading & Fitur | B | ⬜ |
| B6 | S6+S7 — FAQ & Media | B | ⬜ |
| B7 | S8 — Persetujuan | B | ⬜ |
| B8 | S9 — CTA penutup | B | ⬜ |
| B9 | Rakit urutan section | B | ⬜ |
| **CK-B** | **Checkpoint B** | B | ⬜ |
| C1 | Header navigasi | C | ⬜ |
| C2 | Footer lengkap | C | ⬜ |
| C3 | Banner cookie | C | ⬜ |
| **CK-C** | **Checkpoint C** | C | ⬜ |
| D1 | Responsif menyeluruh | D | ⬜ |
| D2 | Aksesibilitas | D | ⬜ |
| D3 | SEO & meta | D | ⬜ |
| **CK-D** | **Checkpoint D** | D | ⬜ |
| E1 | QA & bug fixing | E | ⬜ |
| E2 | Final review & serah terima | E | ⬜ |

---

## Checklist Persetujuan T2

- [ ] Pembagian **5 fase / 19 subtask** disetujui
- [ ] Urutan & dependensi antar subtask disetujui
- [ ] Estimasi waktu disetujui
- [ ] 5 checkpoint approval (CK-A … CK-E) disetujui sebagai gerbang
- [ ] Isi tiap subtask (tugas + kriteria selesai) disetujui
- [ ] Aturan "tidak ada kerja sebelum approval" dipertahankan
