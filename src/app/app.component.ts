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
  filtro: string = 'todas'; // Puede ser todas, pendientes o completadas

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ texto: this.nuevaTarea, completada: false });
      this.nuevaTarea = '';
    }
  }

  obtenerTareasFiltradas() {
    if (this.filtro === 'pendientes') {
      return this.tareas.filter(tarea => !tarea.completada);
    } else if (this.filtro === 'completadas') {
      return this.tareas.filter(tarea => tarea.completada);
    }
    return this.tareas;
  }

  mostrarTodas() {
    this.filtro = 'todas';
  }

  mostrarPendientes() {
    this.filtro = 'pendientes';
  }

  mostrarCompletadas() {
    this.filtro = 'completadas';
  }

  limpiarCompletadas() {
    this.tareas = this.tareas.filter(tarea => !tarea.completada);
  }
}
