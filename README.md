# 🎭 Porto Kholil — Playwright Test Automation Portfolio

> **QA Automation Portfolio** menggunakan [Playwright](https://playwright.dev/) untuk menguji website [AutomationExercise.com](https://automationexercise.com) — mencakup API testing, UI testing, dan End-to-End testing.

---

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Struktur Proyek](#struktur-proyek)
- [Tech Stack](#tech-stack)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Test](#menjalankan-test)
- [Laporan Test](#laporan-test)
- [API yang Diuji](#api-yang-diuji)
- [Cakupan Test](#cakupan-test)

---

## 📖 Tentang Proyek

Proyek ini adalah **portofolio QA Automation** yang dibuat menggunakan Playwright dengan TypeScript. Proyek ini mendemonstrasikan kemampuan pengujian otomatis di tiga layer:

| Layer | Deskripsi |
|-------|-----------|
| **API Testing** | Menguji REST API endpoint secara langsung |
| **UI Testing** | Menguji antarmuka pengguna melalui browser |
| **E2E Testing** | Menguji alur pengguna secara menyeluruh dari awal hingga akhir |

**Target aplikasi:** [https://automationexercise.com](https://automationexercise.com)

---

## 📁 Struktur Proyek

```
porto-kholil/
├── api-clients/                  # API Client classes (abstraksi request)
│   ├── AccountsApi.ts            # Create, update, delete akun
│   ├── AuthApi.ts                # Verifikasi login
│   ├── BrandsApi.ts              # Daftar brand/merek
│   └── ProductsApi.ts            # Produk dan pencarian produk
│
├── config/                       # Konfigurasi tambahan
├── data/                         # Data test (JSON fixtures)
├── fixtures/                     # Playwright fixtures kustom
│
├── pages/                        # Page Object Model (POM)
│   ├── CartPage.ts               # Halaman keranjang belanja
│   ├── CheckoutPage.ts           # Halaman checkout
│   ├── LoginPage.ts              # Halaman login
│   ├── ProductsPage.ts           # Halaman daftar produk
│   └── RegisterPage.ts           # Halaman registrasi
│
├── tests/
│   ├── API/                      # API test specs
│   │   ├── accounts/             # Test akun (create, update, delete)
│   │   ├── auth/                 # Test autentikasi (login)
│   │   └── products/             # Test produk (list, search)
│   │
│   ├── UI/                       # UI test specs
│   │   ├── auth/                 # Test login/register UI
│   │   ├── cart/                 # Test keranjang belanja UI
│   │   └── products/             # Test pencarian produk UI
│   │
│   └── e2e/                      # End-to-End test specs
│       ├── purchase-flow.spec.ts          # Alur pembelian produk
│       └── register-and-purchase.spec.ts  # Register lalu beli
│
├── utils/                        # Helper & utility functions
│   ├── api-helpers.ts            # Helper HTTP (getJson, postForm)
│   ├── assertions.ts             # Custom assertions
│   ├── constants.ts              # URL, endpoint, timeout constants
│   ├── logger.ts                 # Logger utility
│   └── test-data.ts              # Generator data test
│
├── .env                          # Environment variables (tidak di-commit)
├── .env.example                  # Template environment variables
├── playwright.config.ts          # Konfigurasi Playwright
├── package.json
└── tsconfig.json
```

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| [Playwright](https://playwright.dev/) | ^1.64.0 | Framework test otomasi |
| [TypeScript](https://www.typescriptlang.org/) | via `@types/node` | Bahasa pemrograman |
| [dotenv](https://github.com/motdotla/dotenv) | ^18.0.6 | Manajemen environment variables |
| [ESLint](https://eslint.org/) | ^10.12.0 | Linter kode |
| [Prettier](https://prettier.io/) | ^3.9.9 | Code formatter |

---

## ✅ Prasyarat

Pastikan hal berikut sudah terpasang di komputer kamu:

- **Node.js** versi 18 atau lebih baru → [Download](https://nodejs.org/)
- **npm** (sudah termasuk dalam Node.js)

---

## 🚀 Instalasi

```bash
# 1. Clone repositori ini
git clone https://github.com/kholilakhmad/porto-kholil.git
cd porto-kholil

# 2. Install dependencies
npm install

# 3. Install browser Playwright
npx playwright install
```

---

## ⚙️ Konfigurasi

Buat file `.env` di root proyek berdasarkan `.env.example`:

```bash
cp .env.example .env
```

Isi variabel berikut di file `.env`:

```env
# URL dasar aplikasi yang diuji
BASE_URL=https://automationexercise.com

# URL API (opsional, default menggunakan BASE_URL)
API_URL=https://automationexercise.com
```

> **Catatan:** File `.env` sudah ada di `.gitignore` dan tidak akan ter-commit ke repositori.

---

## ▶️ Menjalankan Test

### Semua test

```bash
npm test
# atau
npx playwright test
```

### Per layer test

```bash
# Hanya API tests
npm run test:api

# Hanya UI tests
npm run test:ui

# Hanya E2E tests
npm run test:e2e
```

### Berdasarkan tag

```bash
# Jalankan hanya test bertag @smoke
npm run test:smoke
```

### Mode UI (Playwright UI Mode)

```bash
npx playwright test --ui
```

### Mode Debug

```bash
npx playwright test --debug
```

### Satu file test spesifik

```bash
npx playwright test tests/API/products/get-products.spec.ts
```

---

## 📊 Laporan Test

Setelah test selesai, buka laporan HTML:

```bash
npm run report
# atau
npx playwright show-report
```

Laporan mencakup:
- ✅ Status setiap test (passed/failed/skipped)
- 📸 Screenshot saat test gagal
- 🎥 Video rekaman saat test gagal
- 🔍 Trace viewer untuk debugging langkah per langkah

---

## 🌐 API yang Diuji

Semua endpoint berasal dari [AutomationExercise.com API](https://automationexercise.com/api_list):

| Endpoint | Method | Deskripsi |
|----------|--------|-----------|
| `/api/productsList` | GET | Daftar semua produk |
| `/api/brandsList` | GET | Daftar semua brand |
| `/api/searchProduct` | POST | Cari produk berdasarkan keyword |
| `/api/verifyLogin` | POST | Verifikasi kredensial login |
| `/api/createAccount` | POST | Membuat akun baru |
| `/api/updateAccount` | PUT | Memperbarui data akun |
| `/api/deleteAccount` | DELETE | Menghapus akun |
| `/api/getUserDetailByEmail` | GET | Detail pengguna berdasarkan email |

---

## 🧪 Cakupan Test

### API Tests (`tests/API/`)

| Feature | Test Case |
|---------|-----------|
| Products | GET product list, Search products |
| Auth | Verify login (valid/invalid credentials) |
| Accounts | Create account, Update account, Delete account |

### UI Tests (`tests/UI/`)

| Feature | Test Case |
|---------|-----------|
| Products | Search product by keyword |
| Auth | Login, Register |
| Cart | Add to cart, View cart |

### E2E Tests (`tests/e2e/`)

| Flow | Deskripsi |
|------|-----------|
| Purchase Flow | Cari produk → Tambah ke cart → Checkout |
| Register & Purchase | Register akun baru → Beli produk → Verifikasi order |

---

## 📐 Arsitektur & Pola Desain

Proyek ini menggunakan beberapa pola desain yang umum di QA automation:

- **Page Object Model (POM)** — Memisahkan logika interaksi UI ke dalam class `pages/`
- **API Client Pattern** — Abstraksi HTTP request ke dalam class `api-clients/`
- **Data-Driven Testing** — Menggunakan data JSON dari `data/` untuk parameterisasi test
- **Utility/Helper Pattern** — Fungsi reusable di `utils/` untuk request, assertion, dan data

---

## 👤 Author

**Kholil Ahmad**
- GitHub: [@kholilakhmad](https://github.com/kholilakhmad)
- Repository: [porto-kholil](https://github.com/kholilakhmad/porto-kholil)

---

## 📄 Lisensi

Proyek ini menggunakan lisensi **ISC**.