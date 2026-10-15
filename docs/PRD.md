# PRD — Program Afiliasi Hostinger (Single Page)

**Versi:** 1.0
**Status:** Sudah Disetujui
**Tanggal:** 15 Oktober 2026
**Path kerja:** `D:\Kerjaan\testing\test-case`


---

## 1. Ringkasan Eksekutif

Membangun ulang halaman **Program Afiliasi Hostinger** (`https://www.hostinger.com/id/afiliasi`) sebagai *single page* modern menggunakan **React + Vite**, dengan cakupan identik terhadap halaman aslinya: header navigasi, 9 section konten, footer lengkap, dan banner cookie.

Halaman ini bertujuan konversi — mengarahkan pengunjung mendaftar sebagai afiliasi Hostinger melalui tombol CTA yang menautkan ke `https://affiliates.hostinger.com/`.

### Sumber Referensi

| Sumber | Status | Kegunaan |
|---|---|---|
| `Program Afiliasi Hostinger.html` (561 KB) | ✅ Tersedia, lengkap | Struktur DOM, urutan section, teks konten, alt text, URL tujuan |
| `https://www.hostinger.com/id/afiliasi` | ✅ Tersedia | Verifikasi konten live, meta tag |
| Stylesheet Hostinger (`entry`, `components`) | ✅ Diambil & dianalisis | Design token: warna, tipografi, spacing, radius |

> **Catatan:** Folder `Program Afiliasi Hostinger_files/` (aset lokal) **tidak ikut tersimpan**, sehingga CSS lokal tidak terbaca. Kebutuhan design token dipenuhi dari stylesheet resmi Hostinger yang diambil langsung.

---

## 2. Tujuan & Target

### 2.1 Tujuan
1. Mereplikasi tampilan dan struktur halaman afiliasi Hostinger secara akurat.
2. Menghasilkan single page yang responsif, cepat, dan aksesibel.
3. Menjaga seluruh CTA mengarah ke tujuan yang benar seperti halaman asli.

### 2.2 Kriteria Sukses
- Seluruh 9 section tampil sesuai urutan dan isi halaman asli.
- Responsif pada breakpoint `768px` dan `1025px` (mengikuti sistem asli).
- Tidak ada *console error* pada proses build dan runtime.
- `npm run build` sukses tanpa error.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 90.
- Semua tahapan kerja mendapat persetujuan pemilik proyek sebelum dikerjakan.

### 2.3 Non-Tujuan
- ❌ Tidak membangun backend, API, atau sistem autentikasi.
- ❌ Tidak membuat sistem CMS untuk konten.
- ❌ Tidak mengimplementasikan carousel drag-swipe kompleks setara aslinya (menggunakan versi sederhana yang fungsional).
- ❌ Tidak mengganti logo/brand Hostinger.

---

## 3. Pengguna & Skenario

| Persona | Kebutuhan | Aksi Utama |
|---|---|---|
| Kreator konten / blogger | Ingin penghasilan dari rekomendasi hosting | Klik "Daftar program afiliasi" |
| Agen / agency | Mengelola banyak klien, butuh komisi berulang | Baca 4 langkah, lalu daftar |
| Pengunjung skeptis | Ingin bukti kepercayaan sebelum daftar | Baca testimoni & FAQ |

---

## 4. Arsitektur Teknis

### 4.1 Stack
| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | React 19.2 | Sudah terpasang di project |
| Build tool | Vite 8.3 | Sudah terpasang, HMR cepat |
| Styling | Plain CSS + CSS Variables (design tokens) | Setara pendekatan asli, tanpa dependensi baru |
| Bahasa | JavaScript (JSX) | Sesuai konfigurasi project |

### 4.2 Struktur Folder Target

```
D:\Kerjaan\testing\test-case\
├── docs\
│   ├── PRD.md                    ← dokumen ini
│   ├── DESIGN-SYSTEM.md          ← color palette, tipografi, spacing
│   └── SUBTASKS.md               ← rincian subtask
├── index.html
├── src\
│   ├── main.jsx
│   ├── App.jsx                   ← perakit halaman
│   ├── styles\
│   │   ├── tokens.css            ← design token (variabel global)
│   │   ├── base.css              ← reset + typography dasar
│   │   └── utilities.css         ← spacing, container
│   ├── components\
│   │   ├── layout\
│   │   │   ├── Header.jsx        ← navigasi atas
│   │   │   ├── Footer.jsx        ← footer lengkap
│   │   │   └── CookieBanner.jsx  ← banner persetujuan cookie
│   │   ├── ui\
│   │   │   ├── Button.jsx        ← CTA (varian primary/neutral)
│   │   │   ├── Section.jsx       ← pembungkus section + bg token
│   │   │   └── Icon.jsx          ← sprite icon
│   │   └── sections\
│   │       ├── Hero.jsx            (S1)
│   │       ├── Testimonials.jsx    (S2)
│   │       ├── Steps.jsx           (S3)
│   │       ├── FeatureHeading.jsx  (S4)
│   │       ├── Features.jsx        (S5)
│   │       ├── FaqBanner.jsx       (S6)
│   │       ├── MediaAssets.jsx     (S7)
│   │       ├── Agreement.jsx       (S8)
│   │       └── FinalCta.jsx        (S9)
│   └── assets\
│       └── (kosong — aset dari CDN)
└── public\
    └── favicon.svg
```

### 4.3 Kebijakan Aset
- **Gambar:** dirujuk langsung ke CDN Hostinger (`https://www.hostinger.com/cdn-cgi/imagedelivery/...`).
- **Ikon:** SVG inline / sprite lokal (`public/icons.svg`).
- **Font:** `DM Sans` via Google Fonts dengan `preconnect`.
- Semua gambar wajib memiliki atribut `alt` deskriptif.

---

## 5. Spesifikasi Konten per Section

### S1 — Hero (`primary-950`, mode gelap)
| Elemen | Nilai |
|---|---|
| H1 | Program Afiliasi Hostinger |
| Subjudul | Daftar program afiliasi kami dan dapatkan komisi besar. Tanpa biaya pendaftaran! |
| CTA | "Daftar program afiliasi" → `https://affiliates.hostinger.com/` |
| Max width judul | 646px |
| Align | Tengah |

### S2 — Testimoni (`neutral-0`, mode terang)
| Elemen | Nilai |
|---|---|
| Judul | Testimoni partner kami |
| Jumlah kartu | 3 (carousel horizontal) |
| Struktur kartu | Logo provider + paragraf ulasan |
| Isi #1 | Kolaborasi kami dengan Hostinger sangat mengesankan. Kemitraan dengan komisi besar dan tentunya saling menguntungkan. Hostinger sangat kami rekomendasikan untuk Anda yang mencari kemitraan jangka panjang. |
| Isi #2 | Kemitraan kami dengan Hostinger sangat memuaskan. Timnya andal, profesional, ramah, dan suportif. Komisi yang diberikan besar dan tepat waktu. Kami senang bisa bekerja sama dengan Hostinger. |
| Isi #3 | Tingkat konversi tinggi, pembayaran tepat waktu, dan bantuan pelanggan cepat. Meningkatkan pendapatan kami secara signifikan. |

### S3 — 4 Langkah (`h-card-grid`, terang)
| Elemen | Nilai |
|---|---|
| Judul | 4 langkah mudah daftar program afiliasi |
| Kartu 1 | **Daftar afiliasi cepat** — Daftar dan buat akun afiliasi tak sampai semenit gratis. Verifikasi akun dan dapatkan akses untuk masuk ke dashboard afiliasi. |
| Kartu 2 | **Lacak performa** — Dapatkan akses ke salah satu control panel afiliasi terbaik. Lacak dan optimasi campaign afiliasi mudah dan praktis. |
| Kartu 3 | **Pasang Banner Afiliasi** — Anda tidak akan memulai dengan tangan kosong. Dapatkan semua media marketing di satu tempat dan bisa disesuaikan dengan keinginan Anda. |
| Kartu 4 | **Klaim komisi afiliasi** — Dapatkan komisi untuk setiap penjualan yang memenuhi syarat. Mulai dari 40% dan akan terus bertambah sesuai total penjualan. |
| CTA | "Daftar afiliasi" → `https://affiliates.hostinger.com/` |
| Layout | Grid 4 kolom (desktop) → 2 kolom (tablet) → 1 kolom (mobile) |

### S4 — Heading Band (`primary-100`)
| Elemen | Nilai |
|---|---|
| H2 | Affiliate marketing yang mengutamakan pengguna |
| Align | Tengah |

### S5 — Fitur 2 Kolom (terang)
| Elemen | Nilai |
|---|---|
| Fitur 1 | **Konversi tinggi** — Brand yang kuat & media promosi yang beragam akan membawa keuntungan bagi member afiliasi. Traffic yang didatangkan kepada kami akan dikonversi. (ikon dolar) |
| Fitur 2 | **Komisi dari performa** — Semakin banyak penjualan, semakin besar komisi Anda. (ikon uang) |
| Fitur 3 | **Bisnis afiliasi termudah** — Tingkatkan konversi dengan paket banner yang dirancang secara profesional, screnshot, dan banyak lagi. (ikon lapisan) |
| Kolom kanan | Gambar `b9676229-bc86-42d2-bc8b-26476148bb00` |
| Layout | 2 kolom → tumpuk di mobile |

### S6 — Banner FAQ (`primary-900`, mode gelap)
| Elemen | Nilai |
|---|---|
| Judul | FAQ Afiliasi |
| Teks | Cek pertanyaan dan jawaban seputar cara memulai bisnis afiliasi. |
| CTA | "Cek FAQ" → `https://www.hostinger.com/id/affiliates/faqs` |

### S7 — Media Afiliasi (`primary-50`)
| Elemen | Nilai |
|---|---|
| Judul | Media afiliasi |
| Teks | Maksimalkan afiliasi Anda dengan branded asset yang kami sediakan. |
| CTA | "Lihat semua media" → `https://www.hostinger.com/affiliates/assets` |

### S8 — Persetujuan Program (terang, 2 kolom)
| Elemen | Nilai |
|---|---|
| Judul | Persetujuan Program Afiliasi |
| Teks | Tertarik bergabung? Baca panduan kami dengan saksama, lalu daftar afiliasi kami! |
| CTA | "Lihat selengkapnya" → `https://www.hostinger.com/id/legal/perjanjian-program-afiliasi` |
| Gambar | `9e6f1116-1ad6-469c-b7d7-fc9e071b1a00` |

### S9 — CTA Penutup (`primary-900`, mode gelap)
| Elemen | Nilai |
|---|---|
| Judul | Coba peruntungan Anda di afiliasi |
| Teks | Performa semakin bagus, komisi semakin tinggi. Kami bantu hingga afiliasi Anda sukses. |
| CTA | "Daftar Afiliasi" → `https://affiliates.hostinger.com/` |

### Header (navigasi atas)
Logo Hostinger · Harga · Produk ▾ · Solusi ▾ · Developer ▾ · Artikel ▾ · tombol CTA "Masuk" + "Daftar"

### Footer (lengkap)
6 grup tautan: **Afiliasi, Hosting, Domain, Tool, Informasi, Perusahaan, Bantuan** — plus baris legal (Ketentuan Permintaan NPRD, Kebijakan Privasi, Kebijakan Pengembalian Uang, Ketentuan Penggunaan), ikon sosial, dan baris copyright:
> © 2004-2026 Hostinger. Mulai sukses online dengan bantuan AI yang beri Anda kontrol penuh. · Harga belum termasuk PPN

### Banner Cookie
Judul "Kami menjaga informasi pribadi Anda" + paragraf penjelasan cookie + 3 tombol: **Setujui semua**, **Tolak semua**, **Pengaturan cookie**.

---

## 6. Design System (Ringkas)

> Rincian lengkap ada di `docs/DESIGN-SYSTEM.md`.

### 6.1 Font
| Peran | Font | Fallback |
|---|---|---|
| Utama | **DM Sans** | `Roboto, sans-serif` |
| Mono | `ui-monospace` | Consolas, monospace |

### 6.2 Palet Warna (diambil dari stylesheet resmi)

**Primary (ungu Hostinger)**
| Token | Hex | Penggunaan |
|---|---|---|
| `--color-primary-50` | `#F5F6FF` | Latar section S7 |
| `--color-primary-100` | `#E6E8FF` | Latar section S4 |
| `--color-primary-200` | `#D9DBFF` | — |
| `--color-primary-300` | `#BCBDFF` | — |
| `--color-primary-400` | `#9D99FF` | — |
| `--color-primary-500` | `#7B66FF` | Banner atas |
| `--color-primary-600` | `#673DE6` | **Brand / tombol utama / link** |
| `--color-primary-700` | `#471EA7` | Hover tombol |
| `--color-primary-800` | `#331C74` | — |
| `--color-primary-900` | `#251951` | Latar S6 & S9 |
| `--color-primary-950` | `#110C29` | Latar Hero S1 |

**Neutral**
| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| `--color-neutral-0` | `#FFFFFF` | | `--color-neutral-500` | `#797980` |
| `--color-neutral-50` | `#F8F9FA` | | `--color-neutral-600` | `#58585E` |
| `--color-neutral-100` | `#F5F5F6` | | `--color-neutral-700` | `#36363B` |
| `--color-neutral-200` | `#DEDEE2` | | `--color-neutral-800` | `#222225` |
| `--color-neutral-300` | `#C6C6CC` | | `--color-neutral-900` | `#18181A` |
| `--color-neutral-400` | `#9D9EA4` | | `--color-neutral-950` | `#101011` |

**Semantik:** `success #009E5B` · `warning #E69800` · `danger #E73A47`

### 6.3 Skala Tipografi
| Token | Mobile | Desktop | Line-height | Weight |
|---|---|---|---|---|
| `title-0` | 48px | 56px | 64px | 399 / 599 |
| `title-1` | 36px | 48px | 56px | 399 / 599 |
| `title-2` | 32px | 36px | 44px | 399 / 599 |
| `title-3` | 24px | 32px | 40px | 399 / 599 |
| `heading-1` | 20px | 24px | 32px | 599 |
| `heading-2` | 18px | 20px | 28px | 599 |
| `heading-3` | 18px | 18px | 26px | 599 |
| `body-1` | 16px | 16px | 24px | 399 |
| `body-2` | 14px | 14px | 20px | 399 |
| `body-3` | 12px | 12px | 16px | 399 |

`letter-spacing` judul: `-0.005em` · body: `0`

### 6.4 Spacing & Radius
```
spacing: 2xs 8 · xs 12 · sm 16 · md 24 · lg 32 · xl 40 · 2xl 48 · 3xl 64 · 4xl 80
radius:  xs 4 · sm 8 · md 12 · lg 16 · xl 24 · 2xl 32 · full 999
section padding (u-spacing-2): 56px → 64px (≥768px) → 80px (≥1025px)
```

### 6.5 Breakpoint
`≥768px` (tablet) · `≥1025px` (desktop)

---

## 7. Aksesibilitas & SEO

**Aksesibilitas**
- Semua CTA berupa `<a>` atau `<button>` dengan `aria-label` bila teks tidak eksplisit.
- Kontras teks memenuhi WCAG AA (4.5:1 body, 3:1 large text).
- Struktur heading berhirarki: satu `<h1>` di Hero, `<h2>` per section, `<h3>` per kartu.
- Carousel dapat dioperasikan dengan keyboard (`tabindex`, tombol prev/next).
- Banner cookie dapat ditutup dan tidak menghalangi konten secara permanen.

**SEO**
- `<title>Program Afiliasi Hostinger</title>`
- Meta description: *Nikmati komisi minimal 40% untuk setiap penjualan yang dinyatakan memenuhi syarat. Daftar Program Afiliasi Hostinger GRATIS dan raih penghasilan online mencapai ratusan juta rupiah sekarang!*
- Open Graph + Twitter card image: `https://www.hostinger.com/id/og-image.png`
- `lang="id-ID"`

---

## 8. Risiko & Mitigasi

| # | Risiko | Dampak | Mitigasi |
|---|---|---|---|
| 1 | CDN Hostinger berubah/mati | Gambar tidak tampil | Catat URL asli di PRD; siapkan fallback `onError` |
| 2 | Font DM Sans gagal dimuat | Layout bergeser | Sediakan fallback `Roboto, sans-serif` + `font-display: swap` |
| 3 | Template demo menumpuk | Konflik styling | Hapus konten demo bawaan saat subtask setup |
| 4 | Perbedaan rendering `mode-dark` vs `mode-light` | Kontras salah | Terapkan token warna per section sesuai tabel S1–S9 |
| 5 | Scope melebar (footer lengkap kompleks) | Terlambat | Pecah jadi subtask kecil + approval per tahap |

---

## 9. Definisi Selesai (DoD)

- [ ] Semua design token terpasang di `src/styles/tokens.css`.
- [ ] 9 section ter-render sesuai urutan S1–S9.
- [ ] Header, Footer, Cookie Banner terpasang.
- [ ] Semua CTA menuju URL benar (tabel per section).
- [ ] Responsif di 360px, 768px, 1024px, 1440px.
- [ ] Tidak ada *console error*.
- [ ] `npm run build` sukses.
- [ ] Tidak ada komponen/kelas CSS sisa dari template demo.
- [ ] **Setiap tahap mendapat persetujuan pemilik proyek.**

---

## 10. Persetujuan Tahapan

| Tahap | Keluaran | Status |
|---|---|---|
| T0 | PRD ini | ⏳ **Menunggu persetujuan** |
| T1 | `DESIGN-SYSTEM.md` (palet, font, komponen) | ⬜ |
| T2 | `SUBTASKS.md` (rincian pekerjaan kecil) | ⬜ |
| T3 | Setup project & design token | ⬜ |
| T4 | Implementasi section S1–S9 | ⬜ |
| T5 | Header, Footer, Cookie Banner | ⬜ |
| T6 | Responsif + aksesibilitas + QA | ⬜ |
| T7 | Final review & build | ⬜ |

> **Aturan kerja:** Tidak ada kode/dokumen lanjutan yang dikerjakan sebelum tahap sebelumnya disetujui.
