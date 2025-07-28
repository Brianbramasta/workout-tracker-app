import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Define interfaces for our data models
export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  type: string;
  date: string;
  duration: string;
  notes?: string;
  exercises: Exercise[];
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];
  private workoutsSubject = new BehaviorSubject<Workout[]>([]);

  constructor() {
    this.loadFromLocalStorage();
  }

  // Load workouts from localStorage
  private loadFromLocalStorage(): void {
    const storedWorkouts = localStorage.getItem('workouts');
    if (storedWorkouts) {
      this.workouts = JSON.parse(storedWorkouts);
      this.workoutsSubject.next([...this.workouts]);
    }
  }

  // Save workouts to localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  // Get all workouts as an observable
  getWorkouts(): Observable<Workout[]> {
    return this.workoutsSubject.asObservable();
  }

  // Get a single workout by ID
  getWorkoutById(id: string): Workout | undefined {
    return this.workouts.find(workout => workout.id === id);
  }

  // Add a new workout
  addWorkout(workout: Omit<Workout, 'id' | 'createdAt'>): Workout {
    const newWorkout: Workout = {
      ...workout,
      id: this.generateId(),
      createdAt: new Date().toISOString()
    };

    this.workouts.push(newWorkout);
    this.workoutsSubject.next([...this.workouts]);
    this.saveToLocalStorage();

    return newWorkout;
  }

  // Update an existing workout
  updateWorkout(id: string, workout: Partial<Workout>): Workout | null {
    const index = this.workouts.findIndex(w => w.id === id);
    if (index === -1) return null;

    const updatedWorkout = { ...this.workouts[index], ...workout };
    this.workouts[index] = updatedWorkout;

    this.workoutsSubject.next([...this.workouts]);
    this.saveToLocalStorage();

    return updatedWorkout;
  }

  // Delete a workout
  deleteWorkout(id: string): boolean {
    const initialLength = this.workouts.length;
    this.workouts = this.workouts.filter(workout => workout.id !== id);

    if (this.workouts.length !== initialLength) {
      this.workoutsSubject.next([...this.workouts]);
      this.saveToLocalStorage();
      return true;
    }

    return false;
  }

  // Generate a simple ID
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
