# 💪 Workout Tracker App

Aplikasi web modern untuk melacak dan mengelola aktivitas fitness harian. Dibangun dengan Angular 20 dan Tailwind CSS untuk pengalaman pengguna yang optimal.

## 🚀 Fitur Utama

### 📊 Dashboard

- **Ringkasan Harian**: Statistik latihan hari ini
- **Quick Stats**: Total latihan, jam latihan, streak, dan target
- **Progress Cards**: Visualisasi progres fitness
- **Quick Actions**: Tombol cepat untuk menambah latihan

### 🏋️ Manajemen Latihan

- **Daftar Latihan**: Tampilan semua sesi latihan dengan filter
- **Tambah Latihan**: Form lengkap untuk mencatat latihan baru
- **Detail Latihan**: Informasi detail setiap sesi latihan
- **Edit & Hapus**: Kelola data latihan dengan mudah
- **Kategori Latihan**: Strength, Cardio, Flexibility, Sports

### 📋 Template & Jadwal

- **Jadwal Mingguan**: Rencana latihan 7 hari
- **Template Latihan**: Simpan dan gunakan ulang rutinitas
- **Status Tracking**: Completed, Today, Upcoming
- **Exercise List**: Daftar latihan per template

### 🎯 Goal Management

- **Target Fitness**: Set dan track target pribadi
- **Progress Bars**: Visualisasi progres menuju target
- **Deadline Tracking**: Pantau waktu pencapaian
- **Goal Categories**: Strength, Cardio, Weight, Custom

### 📈 Statistik & Analisis

- **Performance Charts**: Grafik performa latihan
- **Weekly Activity**: Aktivitas mingguan
- **Workout Types**: Distribusi jenis latihan
- **Insights**: Rekomendasi dan analisis

### 🔐 Autentikasi

- **Login**: Masuk dengan email dan password
- **Register**: Daftar akun baru
- **Social Login**: Google dan Facebook
- **Form Validation**: Validasi input yang aman

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: Angular 20
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Angular CLI
- **Package Manager**: npm
- **Language**: TypeScript
- **Architecture**: Standalone Components

## 📁 Struktur Project

```
src/
├── app/
│   ├── components/          # Komponen reusable
│   │   ├── button.component.ts
│   │   ├── card.component.ts
│   │   ├── alert.component.ts
│   │   └── chart.component.ts
│   ├── pages/              # Halaman aplikasi
│   │   ├── dashboard-page.component.ts
│   │   ├── workout-list-page.component.ts
│   │   ├── workout-form-page.component.ts
│   │   ├── workout-detail-page.component.ts
│   │   ├── plans-page.component.ts
│   │   ├── goals-page.component.ts
│   │   ├── stats-page.component.ts
│   │   ├── login-page.component.ts
│   │   └── register-page.component.ts
│   ├── app.routes.ts       # Konfigurasi routing
│   ├── app.component.ts    # Root component
│   └── app.config.ts       # Konfigurasi aplikasi
├── styles.css              # Global styles dengan Tailwind
└── index.html              # Entry point
```

## 🚀 Cara Menjalankan

### Prerequisites

- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd workout-tracker-app

# Install dependencies
npm install
```

### Development Server

```bash
# Jalankan development server
ng serve
```

Buka browser dan akses `http://localhost:4200/`. Aplikasi akan auto-reload saat ada perubahan file.

### Build Production

```bash
# Build untuk production
ng build
```

File hasil build akan tersimpan di folder `dist/`.

## 🎨 Fitur UI/UX

### Design System

- **Color Themes**: Setiap halaman memiliki color theme yang berbeda
- **Gradient Headers**: Header menarik dengan gradient colors
- **Responsive Design**: Optimized untuk mobile dan desktop
- **Interactive Elements**: Hover effects dan smooth transitions
- **Modern Cards**: Rounded corners, shadows, dan proper spacing

### Navigation

- **Intuitive Routing**: Navigasi yang mudah dipahami
- **Breadcrumbs**: Indikator lokasi di aplikasi
- **Floating Actions**: Tombol aksi yang mudah diakses
- **Back Navigation**: Tombol kembali di setiap halaman detail

## 📱 Halaman yang Tersedia

1. **Dashboard** (`/`) - Beranda dengan ringkasan
2. **Workout List** (`/workouts`) - Daftar semua latihan
3. **Add Workout** (`/workouts/new`) - Tambah latihan baru
4. **Workout Detail** (`/workouts/:id`) - Detail latihan
5. **Edit Workout** (`/workouts/:id/edit`) - Edit latihan
6. **Plans** (`/plans`) - Template dan jadwal latihan
7. **Goals** (`/goals`) - Target dan progres fitness
8. **Stats** (`/stats`) - Statistik dan analisis
9. **Login** (`/login`) - Halaman masuk
10. **Register** (`/register`) - Halaman daftar

## 🔧 Development

### Code Scaffolding

```bash
# Generate component baru
ng generate component component-name

# Generate service baru
ng generate service service-name

# Lihat semua opsi
ng generate --help
```

### Testing

```bash
# Unit tests
ng test

# E2E tests
ng e2e
```

## 📝 Data Structure

### Workout Model

```typescript
interface Workout {
  id: number;
  name: string;
  type: "Strength" | "Cardio" | "Flexibility" | "Sports";
  date: string;
  duration: string;
  notes?: string;
  exercises?: Exercise[];
}
```

### Goal Model

```typescript
interface Goal {
  id: number;
  name: string;
  type: string;
  target: number;
  current: number;
  unit: string;
  deadline: string;
  status: "completed" | "in-progress" | "overdue";
}
```

## 🎯 Roadmap

### Fitur yang Akan Datang

- [ ] **Backend Integration**: API untuk menyimpan data
- [ ] **User Profiles**: Profil pengguna dengan foto
- [ ] **Social Features**: Share latihan dengan teman
- [ ] **Notifications**: Reminder latihan
- [ ] **Export Data**: Export data ke PDF/Excel
- [ ] **Dark Mode**: Tema gelap
- [ ] **Mobile App**: Aplikasi mobile dengan Ionic

### Performance Improvements

- [ ] **Lazy Loading**: Load halaman sesuai kebutuhan
- [ ] **Caching**: Cache data untuk performa lebih baik
- [ ] **PWA**: Progressive Web App features
- [ ] **Offline Support**: Bekerja tanpa internet

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Acknowledgments

- **Angular Team** untuk framework yang luar biasa
- **Tailwind CSS** untuk utility-first CSS framework
- **Community** untuk dukungan dan feedback

---

**Dibuat dengan ❤️ untuk komunitas fitness Indonesia**
