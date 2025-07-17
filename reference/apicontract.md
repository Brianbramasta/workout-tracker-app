# 📄 Workout Tracker App – API Contract

## 🔐 AUTHENTICATION (Optional)

### POST /api/auth/register

Register user baru  
**Request Body:**

```json
{
  "email": "user@mail.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "id": "u123",
  "email": "user@mail.com",
  "token": "jwt_token_here"
}
```

---

### POST /api/auth/login

Login user  
**Request Body:**

```json
{
  "email": "user@mail.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "token": "jwt_token_here"
}
```

---

### GET /api/auth/profile

Ambil informasi user yang sedang login  
**Headers:** Authorization: Bearer <token>  
**Response:**

```json
{
  "id": "u123",
  "email": "user@mail.com"
}
```

---

## 🏋️ WORKOUTS

### POST /api/workouts

Tambahkan sesi latihan  
**Request Body:**

```json
{
  "type": "gym",
  "date": "2025-07-14",
  "exercises": [
    {
      "name": "Bench Press",
      "sets": 3,
      "reps": 10,
      "weight": 60
    },
    {
      "name": "Push-up",
      "sets": 3,
      "reps": 15
    }
  ],
  "notes": "Latihan bagus"
}
```

**Response:**

```json
{
  "id": "w123",
  "message": "Workout created successfully"
}
```

---

### GET /api/workouts

Ambil semua workout user dengan filter  
**Query Params:** from, to, type=gym|run  
**Response:**

```json
[
  {
    "id": "w123",
    "type": "gym",
    "date": "2025-07-14",
    "exercises": [...],
    "notes": "Latihan bagus"
  }
]
```

---

### GET /api/workouts/:id

Ambil detail satu sesi workout  
**Response:**

```json
{
  "id": "w123",
  "type": "run",
  "date": "2025-07-13",
  "exercises": [
    {
      "name": "Running",
      "distance": 5,
      "duration": 30
    }
  ],
  "notes": "Lari sore"
}
```

---

### PUT /api/workouts/:id

Edit sesi workout  
**Request Body:** (sama seperti POST)

---

### DELETE /api/workouts/:id

Hapus sesi workout  
**Response:**

```json
{ "message": "Workout deleted" }
```

---

## 📆 PLANS

### POST /api/plans

Tambah template plan  
**Request Body:**

```json
{
  "name": "Push Day A",
  "days": {
    "monday": ["Bench Press", "Incline DB Press"],
    "wednesday": ["Barbell Row", "Pull Up"],
    "friday": ["Squat", "Leg Press"]
  }
}
```

**Response:**

```json
{
  "id": "plan123",
  "message": "Plan created"
}
```

---

### GET /api/plans

Ambil semua template plan  
**Response:**

```json
[
  {
    "id": "plan123",
    "name": "Push Day A",
    "days": {
      "monday": ["Bench Press", "Incline DB Press"],
      "wednesday": ["Barbell Row", "Pull Up"],
      "friday": ["Squat", "Leg Press"]
    }
  }
]
```

---

### POST /api/plans/apply

Terapkan plan ke tanggal tertentu  
**Request Body:**

```json
{
  "planId": "plan123",
  "startDate": "2025-07-15"
}
```

**Response:**

```json
{ "message": "Plan applied to calendar" }
```

---

## 🎯 GOALS

### POST /api/goals

Buat target latihan  
**Request Body:**

```json
{
  "type": "Squat",
  "target": 100,
  "unit": "kg",
  "deadline": "2025-09-01"
}
```

**Response:**

```json
{
  "id": "goal123",
  "message": "Goal created"
}
```

---

### GET /api/goals

Ambil semua goal  
**Response:**

```json
[
  {
    "id": "goal123",
    "type": "Squat",
    "target": 100,
    "current": 85,
    "unit": "kg",
    "deadline": "2025-09-01"
  }
]
```

---

### PATCH /api/goals/:id/progress

Update progres goal  
**Request Body:**

```json
{
  "current": 90
}
```

**Response:**

```json
{ "message": "Goal progress updated" }
```

---

## 📊 STATS

### GET /api/stats/summary?month=2025-07

Ambil ringkasan statistik per bulan  
**Response:**

```json
{
  "totalSessions": 12,
  "runDistance": 35,
  "mostFrequentExercise": "Push-up",
  "daysActive": 9
}
```

---

## ⚠️ Error Response Format

```json
{
  "error": true,
  "message": "Invalid data"
}
```
