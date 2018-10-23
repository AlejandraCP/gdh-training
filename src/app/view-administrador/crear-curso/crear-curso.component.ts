import { Component, OnInit } from '@angular/core';
import { BoolSelectExpoService } from './../../services/bool-select-expo.service';
import { CreateTeacherService } from './../../services/create-teacher.service';
import { CountersService } from './../../services/counters.service';
import { NgForm } from '@angular/forms';
import { TeacherModel } from './../../models/teacher';
import { MisCursosService } from './../../services/mis-cursos.service';
import { CursoModel } from './../../models/cursos';



@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css', './../../view-user-home/view-user-home.component.css']
})
export class CrearCursoComponent implements OnInit {
  public boolSelectList: any[];
  public teacherList: any[];
  public counterList: any[];
  public cursosList: any[];

  constructor( 
    public boolSelectExpoService : BoolSelectExpoService,
    public createTeacherService : CreateTeacherService,
    public counterService: CountersService,
    public misCursosService: MisCursosService
    ) { }

  date
  ngOnInit() {
    // get list change box teacher
    this.boolSelectExpoService.getBoolSelect()
      .snapshotChanges()
      .subscribe(item => {
        this.boolSelectList = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x['$key'] = elem.key;
          this.boolSelectList.push(x)
        })        
    });
    
  // get list teacher
    this.createTeacherService.getTeachers()
      .snapshotChanges()
      .subscribe(item => {
        this.teacherList = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x['$key'] = elem.key;
          this.teacherList.push(x)
        })    
        // console.log(this.teacherList);
    });

    // get list counter
    this.counterService.getCounters()
      .snapshotChanges()
      .subscribe(item => {
        this.counterList = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x['$key'] = elem.key;
          this.counterList.push(x)
        })    
        // console.log(this.counterList);
    });

    // get list courses
    this.misCursosService.getCursos()
      .snapshotChanges()
      .subscribe(item => {
        this.cursosList = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x['$key'] = elem.key;
          this.cursosList.push(x)
        })  
        console.log(this.cursosList);
          
    });

  }

  show() {
    console.log(this.date)
  }

  boxOption(key, create, option, select) {
    create = false;
    option = true;
    select = false;
    this.boolSelectExpoService.updateBoolAny(key,create, option, select)
  }

  boxCreate(key, create, option, select) {
    create = true;
    option = false;
    select = false;
    this.boolSelectExpoService.updateBoolAny(key,create, option, select)
  }

  boxSelect(key, create, option, select) {
    create = false;
    option = false;
    select = true;
    this.boolSelectExpoService.updateBoolAny(key,create, option, select)
  }

  resetForm(teacherForm?: NgForm) {
    if (teacherForm != null) {
      teacherForm.reset();
      this.createTeacherService.newTeacher = new TeacherModel();
    }
  }

  onSubmit(teacherForm: NgForm) {
    if (teacherForm.value.$key == null){
      teacherForm.value.expositorId = this.counterList[0].teacherId + 1; 
      this.counterService.updateTeacherId(this.counterList[0].$key,teacherForm.value.expositorId)
      this.createTeacherService.insertTeacher(teacherForm.value)
    } else {
      this.createTeacherService.updateTeacher(teacherForm.value);
    }
    this.resetForm(teacherForm);
  }
}
