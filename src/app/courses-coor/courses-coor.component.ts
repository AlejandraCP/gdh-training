import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../services/courses.service';
import { element } from 'protractor';


@Component({
  selector: 'app-courses-coor',
  templateUrl: './courses-coor.component.html',
  styleUrls: ['./courses-coor.component.css']
})
export class CoursesCoorComponent implements OnInit {

  public cursos: any[];
  public cursoList: any[];

  constructor(public coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCursos().subscribe(cursos => {
      this.cursos = cursos
      console.log(this.cursos);
    })
  }

  getList() {
    this.coursesService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
      console.log(this.cursos)
      this.cursoList = [];
      this.cursos.forEach( elem => {
        let x = elem.payload.toJSON();
        x['$key'] = elem.key;
        this.cursoList.push(x)
        console.log(x);        
      })  
    })
  }
}
