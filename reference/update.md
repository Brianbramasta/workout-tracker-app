Berikut adalah **rancangan detail modul dan fitur** untuk aplikasi **Workout Tracker App** berbasis Angular. Tujuannya agar development nanti jadi lebih terarah dan efisien.

---

## 🧱 STRUKTUR MODUL

Berbasis **modular Angular**, aplikasi ini akan dibagi menjadi beberapa fitur utama:

### 1. `auth` – Modul Autentikasi (Opsional)

- Login, Register (dengan Firebase/Auth0 atau localStorage)
- Route guard untuk halaman utama

### 2. `dashboard` – Modul Beranda & Ringkasan

- Ringkasan latihan hari ini/minggu ini
- Kalender latihan
- Target dan progres

### 3. `workouts` – Modul Latihan

- Input latihan harian
- Lihat histori latihan
- Lihat detail satu sesi latihan
- Edit/hapus latihan

### 4. `plans` – Modul Jadwal Latihan

- Atur jadwal mingguan (Push/Pull/Legs, dsb)
- Simpan template (misal: Push Day A)
- Assign ke hari tertentu

### 5. `goals` – Modul Target Fitness

- Buat goal pribadi (misal: “lari 5km”, “squat 100kg”)
- Pantau progres menuju goal

### 6. `stats` – Modul Statistik

- Visualisasi data latihan (chart)
- Ringkasan performa bulanan

### 7. `shared` – Modul Komponen Reusable

- Button, Modal, Card, Alert, Loader, dan ChartComponent

---

## 🔍 RINCIAN FITUR PER MODUL

### 📌 Modul `workouts`

> Fokus: Catat, simpan, dan kelola data latihan harian

#### Komponen:

- `WorkoutFormComponent`
- `WorkoutListComponent`
- `WorkoutDetailComponent`

#### Fitur:

- [ ] Tambah latihan (jenis, set, rep, beban, catatan)
- [ ] Tambah latihan lari (jarak, durasi, pace, rute opsional)
- [ ] Edit/hapus entri
- [ ] Tampilkan daftar latihan dengan filter (tanggal/jenis)

---

### 📌 Modul `plans`

> Fokus: Menyusun rencana mingguan latihan dan template

#### Komponen:

- `WeeklyPlannerComponent`
- `TemplateManagerComponent`

#### Fitur:

- [ ] Buat rencana mingguan
- [ ] Simpan sebagai template (misal: Push Day A)
- [ ] Load template ke tanggal tertentu
- [ ] Edit/hapus jadwal

---

### 📌 Modul `goals`

> Fokus: Tetapkan dan lacak goal latihan

#### Komponen:

- `GoalFormComponent`
- `GoalProgressComponent`

#### Fitur:

- [ ] Buat goal: (jenis, target, tanggal selesai)
- [ ] Progress bar & status
- [ ] Tandai selesai
- [ ] Statistik goal tercapai

---

### 📌 Modul `dashboard`

> Fokus: Beranda ringkasan progres

#### Komponen:

- `TodaySummaryComponent`
- `WeeklyProgressChartComponent`
- `UpcomingWorkoutComponent`

#### Fitur:

- [ ] Ringkasan latihan hari ini
- [ ] Days streak (jumlah hari berturut-turut aktif)
- [ ] Chart progres latihan per minggu
- [ ] Latihan berikutnya (dari jadwal)

---

### 📌 Modul `stats`

> Fokus: Visualisasi dan histori

#### Komponen:

- `PerformanceChartComponent`
- `WorkoutHistoryTableComponent`

#### Fitur:

- [ ] Chart progres per latihan (misal: squat dari 40kg → 100kg)
- [ ] Statistik latihan per minggu/bulan
- [ ] Rata-rata volume latihan

---

### 📌 Modul `auth` (jika digunakan)

> Fokus: Login, register, dan proteksi halaman

#### Fitur:

- [ ] Register pengguna baru
- [ ] Login pengguna
- [ ] Proteksi route menggunakan `AuthGuard`

---

## 📁 CONTOH STRUKTUR FOLDER

```
src/
├── app/
│   ├── auth/
│   ├── dashboard/
│   ├── workouts/
│   ├── plans/
│   ├── goals/
│   ├── stats/
│   └── shared/
│       ├── components/
│       ├── services/
│       └── models/
```

---

## ✅ Checklist Awal Development

| Persiapan                                        | Status |
| ------------------------------------------------ | ------ |
| Buat desain wireframe / UI sederhana             | ☐      |
| Buat model data TypeScript (Workout, Goal, Plan) | ☐      |
| Tentukan apakah pakai backend atau localStorage  | ☐      |
| Setup Angular project (`ng new`)                 | ☐      |
| Setup module routing dan struktur folder         | ☐      |
| Setup styling (Tailwind CSS / Angular Material)  | ☐      |

---

Kalau kamu mau, saya bisa bantu:

- Buatkan model data TypeScript-nya
- Buat wireframe UI di Figma / Excalidraw
- Setup project starter Angular dengan struktur ini

> Ingin lanjut ke bagian mana dulu, Brian? Saya bisa bantu buatkan langsung biar kamu tinggal mulai develop.
