# 🔄 Flow Sistem Workout Tracker App

## 📋 Daftar Isi

1. [User Journey Overview](#user-journey-overview)
2. [Authentication Flow](#authentication-flow)
3. [Workout Management Flow](#workout-management-flow)
4. [Plans & Templates Flow](#plans--templates-flow)
5. [Goals Management Flow](#goals-management-flow)
6. [Statistics & Analytics Flow](#statistics--analytics-flow)
7. [Data Flow Architecture](#data-flow-architecture)

---

## 🚀 User Journey Overview

### **First Time User**

```
Landing Page → Register → Login → Dashboard → Tutorial → Start Using App
```

### **Returning User**

```
Login → Dashboard → Navigate to Desired Feature → Perform Actions → View Results
```

---

## 🔐 Authentication Flow

### **Register Process**

```
Register Page → Fill Form → Validation → Success → Redirect to Login
```

**Detail Steps:**

1. User mengakses `/register`
2. Mengisi form: nama, email, password, konfirmasi password
3. Validasi client-side (required fields, password match, email format)
4. Submit data ke backend (simulasi)
5. Success message → Redirect ke `/login`

### **Login Process**

```
Login Page → Fill Credentials → Validation → Success → Redirect to Dashboard
```

**Detail Steps:**

1. User mengakses `/login`
2. Mengisi email dan password
3. Validasi credentials
4. Set authentication token/session
5. Redirect ke `/` (dashboard)

### **Logout Process**

```
Any Page → Logout Button → Clear Session → Redirect to Login
```

---

## 💪 Workout Management Flow

### **Add New Workout**

```
Dashboard → "Tambah Latihan" Button → Workout Form → Fill Details → Save → Success → Redirect to Workout List
```

**Detail Steps:**

1. **Dashboard** (`/`) → Klik "Tambah Latihan"
2. **Workout Form** (`/workouts/new`) → Form input:
   - Nama latihan (required)
   - Jenis latihan (Strength/Cardio/Flexibility/Sports)
   - Tanggal latihan
   - Durasi (required)
   - Catatan (optional)
3. **Validation** → Client-side validation
4. **Save** → Simpan ke database (simulasi)
5. **Success** → Alert "Latihan berhasil disimpan!"
6. **Redirect** → Kembali ke `/workouts`

### **View Workout List**

```
Dashboard → "Latihan" Menu → Workout List → Filter/Search → View Details
```

**Detail Steps:**

1. **Dashboard** → Klik "Latihan" atau akses `/workouts`
2. **Workout List** → Tampilkan semua latihan dengan:
   - Filter by type (Strength/Cardio/dll)
   - Filter by date (Hari ini/Minggu ini/Bulan ini)
   - Search by name
3. **Actions** → Setiap workout memiliki tombol:
   - Detail → Lihat detail lengkap
   - Edit → Edit workout

### **View Workout Detail**

```
Workout List → "Detail" Button → Workout Detail Page → View Info → Actions
```

**Detail Steps:**

1. **Workout List** → Klik "Detail" pada workout tertentu
2. **Workout Detail** (`/workouts/:id`) → Tampilkan:
   - Header dengan nama, tanggal, durasi, jenis
   - Catatan latihan
   - Daftar exercise dengan set, reps, weight
   - Quick stats (total latihan, total set, durasi)
3. **Actions** → Tombol Edit, Delete, Share

### **Edit Workout**

```
Workout Detail → "Edit" Button → Workout Form (Pre-filled) → Modify → Save → Success
```

**Detail Steps:**

1. **Workout Detail** → Klik "Edit"
2. **Edit Form** (`/workouts/:id/edit`) → Form dengan data yang sudah ada
3. **Modify** → Edit field yang diinginkan
4. **Save** → Update data
5. **Success** → Redirect ke workout detail

### **Delete Workout**

```
Workout Detail → "Delete" Button → Confirmation → Delete → Success → Redirect to List
```

**Detail Steps:**

1. **Workout Detail** → Klik "Delete"
2. **Confirmation** → Modal/Alert "Yakin ingin menghapus?"
3. **Delete** → Hapus dari database
4. **Success** → Redirect ke `/workouts`

---

## 📋 Plans & Templates Flow

### **View Weekly Schedule**

```
Dashboard → "Jadwal" Menu → Plans Page → View Weekly Schedule → Status Tracking
```

**Detail Steps:**

1. **Dashboard** → Klik "Jadwal" atau akses `/plans`
2. **Weekly Schedule** → Tampilkan 7 hari dengan:
   - Status: Completed (✅), Today (🔥), Upcoming (⏳)
   - Plan name per hari
   - Visual indicators (color-coded)
3. **Quick Stats** → Template aktif, latihan minggu ini, tingkat penyelesaian

### **Create Template**

```
Plans Page → "Buat Template" Button → Template Form → Fill Details → Save → Success
```

**Detail Steps:**

1. **Plans Page** → Klik "Buat Template"
2. **Template Form** → Input:
   - Nama template
   - Jenis latihan
   - Hari yang dipilih
   - Daftar exercise
3. **Save** → Simpan template
4. **Success** → Template muncul di list

### **Use Template**

```
Template List → "Gunakan" Button → Apply to Schedule → Success
```

**Detail Steps:**

1. **Template List** → Pilih template
2. **Apply** → Pilih hari untuk menerapkan template
3. **Success** → Template diterapkan ke jadwal

---

## 🎯 Goals Management Flow

### **Create New Goal**

```
Dashboard → "Target" Menu → Goals Page → "Buat Goal" Button → Goal Form → Save
```

**Detail Steps:**

1. **Dashboard** → Klik "Target" atau akses `/goals`
2. **Goals Page** → Klik "Buat Goal"
3. **Goal Form** → Input:
   - Nama target
   - Jenis target (Strength/Cardio/Weight/Custom)
   - Target value
   - Current value
   - Unit (kg, km, reps, dll)
   - Deadline
4. **Save** → Goal tersimpan dengan status "in-progress"

### **Update Goal Progress**

```
Goals List → "Update Progress" Button → Progress Form → Update → Save
```

**Detail Steps:**

1. **Goals List** → Pilih goal
2. **Update Progress** → Input current value baru
3. **Calculate** → Sistem hitung progress percentage
4. **Update Status** → Jika 100% → status "completed"
5. **Save** → Update goal

### **View Goal Progress**

```
Goals Page → Goal Cards → Progress Bars → Status Indicators
```

**Detail Steps:**

1. **Goals Page** → Tampilkan semua goals
2. **Progress Visualization** → Progress bar dengan percentage
3. **Status Colors** → Green (completed), Blue (in-progress), Red (overdue)
4. **Quick Stats** → Total goals, tercapai, dalam progres, rata-rata

---

## 📊 Statistics & Analytics Flow

### **View Dashboard Stats**

```
Dashboard → Quick Stats Cards → Overview → Navigate to Detailed Stats
```

**Detail Steps:**

1. **Dashboard** → Tampilkan quick stats:
   - Total latihan
   - Total jam
   - Current streak
   - Longest streak
2. **Click Stats** → Navigate ke halaman stats detail

### **Detailed Statistics**

```
Dashboard → "Statistik" Menu → Stats Page → Charts & Analytics
```

**Detail Steps:**

1. **Dashboard** → Klik "Statistik" atau akses `/stats`
2. **Key Stats** → 6 cards dengan metrics utama
3. **Charts Section** → 2 charts:
   - Weekly Activity Chart
   - Workout Types Distribution
4. **Insights** → Rekomendasi dan analisis

### **Export Data**

```
Stats Page → "Export Data" Button → Choose Format → Download
```

**Detail Steps:**

1. **Stats Page** → Klik "Export Data"
2. **Format Selection** → PDF, Excel, CSV
3. **Generate Report** → Compile data
4. **Download** → File download

---

## 🔄 Data Flow Architecture

### **Frontend → Backend Communication**

```
User Action → Component → Service → HTTP Request → Backend API → Database
```

### **Data Storage Structure**

```
Database Tables:
├── users
│   ├── id, name, email, password_hash, created_at
├── workouts
│   ├── id, user_id, name, type, date, duration, notes, created_at
├── exercises
│   ├── id, workout_id, name, sets, reps, weight, notes
├── goals
│   ├── id, user_id, name, type, target, current, unit, deadline, status
├── templates
│   ├── id, user_id, name, type, day, created_at
└── template_exercises
    ├── id, template_id, name, sets, reps, weight
```

### **State Management Flow**

```
Component State → Service State → Local Storage → Backend Sync
```

---

## 🎯 User Experience Flow

### **Onboarding Flow**

```
Landing → Register → Login → Welcome Tutorial → Dashboard → First Workout
```

### **Daily Usage Flow**

```
Login → Dashboard → Check Today's Plan → Add Workout → Update Goals → View Progress
```

### **Weekly Review Flow**

```
Dashboard → Stats → Weekly Overview → Goal Progress → Plan Adjustment
```

---

## 🔧 Error Handling Flow

### **Form Validation Errors**

```
User Input → Validation Check → Error Display → User Correction → Re-validation
```

### **Network Errors**

```
API Request → Network Error → Retry Logic → Fallback UI → User Notification
```

### **Data Not Found**

```
Request Data → Not Found → Empty State → User Guidance → Alternative Actions
```

---

## 📱 Responsive Flow

### **Mobile Navigation**

```
Dashboard → Bottom Navigation → Feature Pages → Back Navigation
```

### **Desktop Navigation**

```
Dashboard → Top Menu → Feature Pages → Breadcrumb Navigation
```

---

**Flow ini memberikan panduan lengkap untuk pengembangan dan testing aplikasi Workout Tracker App** 🚀
