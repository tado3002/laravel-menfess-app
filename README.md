# 📨 Menfess App

Aplikasi web Menfess (pesan anonim ) berbasis Laravel + React (SPA) dengan autentikasi Google dan Laravel Sanctum.

---

## 🚀 Features

- Autentikasi menggunakan Google OAuth
- Kirim pesan (menfess) secara anonim atau teridentifikasi
- Daftar menfess real-time (tanpa reload, berkat Inertia)
- SPA (Single Page Application) dengan Laravel + React + Inertia.js

---

## 🛠️ Tech Stack

- **Backend**: Laravel 12, Sanctum, Socialite (Google OAuth)
- **Frontend**: React + Javascript + Inertia.js + Vite
- **Queue**: Laravel Queue Listener
- **Database**: MySQL (bisa diganti sesuai kebutuhan)

---

## 📦 Instalasi

### 1. Clone repository

```bash
git clone https://github.com/username/menfess-app.git
cd menfess-app
````

### 2. Install dependency

```bash
composer install
npm install
```

### 3. Copy `.env`

```bash
cp .env.example .env
```

### 4. Generate app key dan migrasi database

```bash
php artisan key:generate
php artisan migrate
```

### 5. Konfigurasi Google OAuth

Daftarkan app-mu di [Google Cloud Console](https://console.cloud.google.com/), lalu masukkan ke dalam `.env`:

```env
GOOGLE_CLIENT_ID=xxxxxx
GOOGLE_CLIENT_SECRET=xxxxxx
GOOGLE_REDIRECT_URI=http://localhost:8000/auth-google-callback
```

### 6. Jalankan aplikasi

```bash
composer run dev
```

Ini akan menjalankan:

* Laravel server di `http://127.0.0.1:8000`
* React (Vite) di `http://localhost:5173`
* Laravel queue listener
* Log pail

---

## ✅ Fitur Tambahan (Opsional)

* Autentikasi fallback: login manual dengan email google
* REST API publik untuk integrasi eksternal

---

## 📂 Struktur Folder Penting

```
resources/
  js/
    Pages/         // Halaman React (Inertia)
    Components/    // Komponen UI (Form, List, dll)

routes/
  web.php          // Route Laravel

app/
  Http/
    Controllers/   // Controller Laravel
  Models/          // Model Eloquent (Menfess, User, dll)
```

