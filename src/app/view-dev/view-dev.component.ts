import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from './../services/auth-firebase.service';
import { element } from 'protractor';
import { NgForm } from '@angular/forms';
import { CoursesService } from './../services/courses.service';
import { UserGDH } from './../models/cursosGDH';

@Component({
  selector: 'app-view-dev',
  templateUrl: './view-dev.component.html',
  styleUrls: ['./view-dev.component.css']
})
export class ViewDevComponent implements OnInit {
  public isLogin: boolean;
  public emailUser: string;
  public show: boolean;
  public userList: any[];
  public userListS1: any[];
  public userListS2: any[];
  public userListS3: any[];
  public userListS4: any[];

  // select
  public optionSesions: any[];
  public selectedValue: any;


  newUser: UserGDH = new UserGDH();

  constructor(
    private authFirebaseService: AuthFirebaseService,
    public coursesServices: CoursesService
  ) { }

  ngOnInit() {

    this.optionSesions = [
      { id: 1, sesion: 'sesion1' },
      { id: 2, sesion: 'sesion2' },
      { id: 3, sesion: 'sesion3' },
      { id: 4, sesion: 'sesion4' }
    ]


    this.isLogin = false;
    this.authFirebaseService.getAuth().subscribe(auth => {
      if (auth) {
        this.emailUser = auth.email;
        this.isLogin = true;
        if (auth.email === 'mllamocca@inteligogroup.com' || auth.email === 'acabrera@inteligogroup.com') {
          this.show = true;
        } else if (auth.email == undefined || auth.email == null) {
          this.show = false;
        }
      }
    });
  }

  selectSesion(x) {
  }

  logoutUser() {
    this.authFirebaseService.logout();
  }

  resetForm(userForm?: NgForm) {
    if (userForm != null) {
      userForm.reset();
      this.coursesServices.newUser = new UserGDH();
    }
  }

  onSubmit(userForm: NgForm) {
    if (userForm.value.$key == null) {
      userForm.value.asistencia = false;
      userForm.value.mesCapacitacion = 'Noviembre';
      userForm.value.numHoras = 3.0; 
      userForm.value.nombreCurso = 'Tu Bienestar Profesional';
      userForm.value.codigo = ' - ';
      userForm.value.division = ' - ';
      userForm.value.departamento = ' - ';
      if (userForm.value.sesion === 'sesion1') {
        this.coursesServices.InsertUserS1(userForm.value)
      } else if (userForm.value.sesion === 'sesion2') {
        this.coursesServices.InsertUserS2(userForm.value)
      } else if (userForm.value.sesion === 'sesion3') {
        this.coursesServices.InsertUserS3(userForm.value)
      } else if (userForm.value.sesion === 'sesion4') {
        this.coursesServices.InsertUserS4(userForm.value)
      }
    }
    this.resetForm(userForm);
  }
}
