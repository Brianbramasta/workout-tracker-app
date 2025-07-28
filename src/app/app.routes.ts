import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { WorkoutListPageComponent } from './pages/workoutlist/workout-list-page.component';
import { WorkoutDetailPageComponent } from './pages/workoutdetail/workout-detail-page.component';
import { WorkoutFormPageComponent } from './pages/workoutform/workout-form-page.component';
import { PlansPageComponent } from './pages/plans/plans-page.component';
import { GoalsPageComponent } from './pages/goals/goals-page.component';
import { StatsPageComponent } from './pages/stats/stats-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';

export const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'workouts', component: WorkoutListPageComponent },
  { path: 'workouts/new', component: WorkoutFormPageComponent },
  { path: 'workouts/:id/edit', component: WorkoutFormPageComponent },
  { path: 'workouts/:id', component: WorkoutDetailPageComponent },
  { path: 'plans', component: PlansPageComponent },
  { path: 'goals', component: GoalsPageComponent },
  { path: 'stats', component: StatsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent }
];
