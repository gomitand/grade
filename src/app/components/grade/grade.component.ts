import { Component, OnInit } from '@angular/core';
import { GradeService } from 'src/app/service/grade.service';
import { Grade } from 'src/app/interface/grade.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades',
  standalone: true,
  templateUrl: './grade.component.html',
  styleUrls: ['./component.css'],
  imports: [
    FormsModule,
    CommonModule
  ]

})
export class GradesComponent implements OnInit {
  grades: Grade[] = [];

  constructor(private gradeService: GradeService) {}

  ngOnInit(): void {
    this.grades = this.gradeService.getGrades();
  }

  addGrade(): void {
    // Generador de ID automatico
    const newId = this.grades.length + 1;
    this.gradeService.addGrade({ id: newId, grade: '', spanishGrade: '', group: '' });
    // Recargar los grados
    this.grades = this.gradeService.getGrades();
  }

  editGrade(id: number): void {
    // Aquí puedes implementar la lógica para editar,
  }

  deleteGrade(id: number): void {
    this.gradeService.deletedGrade(id);
     // Recargar los grados
    this.grades = this.gradeService.getGrades();
  }
}
