import { Component } from '@angular/core';
import { Sex, Student, SchoolSubject } from 'src/app/models/alumnos.interface';

const TOTAL_HOURS = 50;
const STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Miguel',
    lastname: 'Campos',
    sex: Sex.Female,
    age: 25,
    subjects: [
      {
        name: 'Math',
        hours: 5
      },
      {
        name: 'Spanish',
        hours: 4
      }
    ],
    paid: true
  },
  {
    id: '2',
    name: 'Pepe',
    lastname: 'García',
    sex: Sex.Female,
    age: 25,
    subjects: [
      {
        name: 'Math',
        hours: 10
      },
      {
        name: 'Spanish',
        hours: 30
      }
    ],
    paid: false
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns = ['id', 'name', 'lastName','sex','age','subjects','paid'];
  studentList = STUDENTS;
  
  getSubjectNames(subjects: SchoolSubject[]) {
    let sName: String = "";
    for(const s of subjects){
      sName = sName + s.name + " ";
    }
    return sName.trim();
  }

  checkColumnId: boolean = true;
  checkColumnName: boolean = true;
  checkColumnSurname: boolean = true;
  checkColumnSubjects: boolean = true;
  
  checkboxClicked() {
    this.displayedColumns = [];
    if (this.checkColumnId) {
      this.displayedColumns.push('id');
    }
    if (this.checkColumnName) {
      this.displayedColumns.push('name');
    }
    if (this.checkColumnSurname) {
      this.displayedColumns.push('lastname');
    }
    if (this.checkColumnSubjects) {
      this.displayedColumns.push('subjects');
    }
  }

}
