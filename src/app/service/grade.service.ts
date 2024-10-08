import { Injectable } from "@angular/core";

import { Grade } from "../interface/grade.interface";

@Injectable({
  providedIn: 'root'
})

export class GradeService {
  private grades: Grade[] = [
    { id: 29, grade: '2 Bloon', spanishGrade: '2 puntos', group: 'LARGOS' },
    { id: 76, grade: '2P - 42 cm', spanishGrade: '2 puntos 42 CM', group: 'CORTOS' },
    { id: 151, grade: 'XCLASS', spanishGrade: 'Por Clasificar', group: '30S' },
    { id: 260, grade: 'Super Select M', spanishGrade: 'Super Select Minador', group: 'DERROGACIÓN' }
  ];

  getGrades(): Grade[] {
    return this.grades;
  }
  addGrade(NewGrade: Grade): void{
    this.grades.push(NewGrade);
  }
  aditGrade(id: number, updatedGrade: Grade): void{
    const index = this.grades.findIndex(grade => grade.id === id);
  if (index !== -1 ){
    this.grades[index] = updatedGrade;
  }
}

deletedGrade(id: number): void {
  this.grades = this.grades.filter(grade => grade.id !== id);
}
}
