import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nuevaTarea: string = '';
  tareas: { texto: string, completada: boolean }[] = [];

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ texto: this.nuevaTarea, completada: false });
      this.nuevaTarea = '';
    }
  }

  mostrarTodas() {
    this.tareas = [...this.tareas];
  }

  mostrarPendientes() {
    this.tareas = this.tareas.filter(tarea => !tarea.completada);
  }

  mostrarCompletadas() {
    this.tareas = this.tareas.filter(tarea => tarea.completada);
  }

  limpiarCompletadas() {
    this.tareas = this.tareas.filter(tarea => !tarea.completada);
  }
}

