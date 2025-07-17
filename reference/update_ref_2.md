1. Struktur Folder yang Akan Dibuat
   src/app/
   components/ ← komponen reusable (Button, Modal, Card, dsb)
   pages/ ← halaman utama (Dashboard, Workouts, Plans, Goals, Stats, Auth)
   models/ ← model data TypeScript (Workout, Plan, Goal, dsb)
   services/ ← service untuk data (nanti, jika perlu)
2. Komponen Reusable (components/)
   ButtonComponent
   CardComponent
   ModalComponent
   LoaderComponent
   AlertComponent
   ChartComponent
3. Halaman (pages/)
   dashboard/
   DashboardPageComponent
   workouts/
   WorkoutListPageComponent
   WorkoutDetailPageComponent
   WorkoutFormPageComponent
   plans/
   PlansPageComponent
   goals/
   GoalsPageComponent
   stats/
   StatsPageComponent
   auth/
   LoginPageComponent
   RegisterPageComponent
4. Model Data (models/)
   workout.model.ts
   plan.model.ts
   goal.model.ts
5. Catatan
   Setiap komponen dan halaman akan diberi komentar dokumentasi.
   Kode akan dibuat mudah dibaca dan dipahami.
   Komponen reusable akan digunakan di halaman sesuai kebutuhan.
