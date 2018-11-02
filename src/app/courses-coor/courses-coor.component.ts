import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./../services/courses.service";
import { element } from "protractor";
import { AuthAdminService } from "./../services/auth-admin.service";

@Component({
  selector: "app-courses-coor",
  templateUrl: "./courses-coor.component.html",
  styleUrls: ["./courses-coor.component.css"]
})
export class CoursesCoorComponent implements OnInit {
  public cursos: any[];
  public cursoList: any[];
  public userSesion1: any[];
  public userSesion2: any[];
  public userSesion3: any[];
  public userSesion4: any[];
  public sesions: boolean;
  public sesion1Box: boolean;
  public sesion2Box: boolean;
  public sesion3Box: boolean;
  public sesion4Box: boolean;

  constructor(
    public coursesService: CoursesService,
    public authAdminservice: AuthAdminService
  ) {}

  ngOnInit() {
    this.sesions = true;
    this.sesion1Box = false;
    this.sesion2Box = false;
    this.sesion3Box = false;
    this.sesion4Box = false;

    // get list sesion1
    this.coursesService
      .getGroup("sesion1")
      .snapshotChanges()
      .subscribe(item => {
        this.userSesion1 = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x["$key"] = elem.key;
          this.userSesion1.push(x);
        });
        this.userSesion1.sort(
          (a, b) => (a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)
        );
      });

    // get list sesion2
    this.coursesService
      .getGroup("sesion2")
      .snapshotChanges()
      .subscribe(item => {
        this.userSesion2 = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x["$key"] = elem.key;
          this.userSesion2.push(x);
        });
        this.userSesion2.sort(
          (a, b) => (a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)
        );
      });

    // get list sesion3
    this.coursesService
      .getGroup("sesion3")
      .snapshotChanges()
      .subscribe(item => {
        this.userSesion3 = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x["$key"] = elem.key;
          this.userSesion3.push(x);
        });
        this.userSesion3.sort(
          (a, b) => (a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)
        );
      });

    // get list sesion4
    this.coursesService
      .getGroup("sesion4")
      .snapshotChanges()
      .subscribe(item => {
        this.userSesion4 = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x["$key"] = elem.key;
          this.userSesion4.push(x);
        });
        this.userSesion4.sort(
          (a, b) => (a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)
        );
      });
  }

  changeToShow(sesion) {
    this.sesions = false;
    switch (sesion) {
      case "sesion1":
        this.sesion1Box = true;
        break;
      case "sesion2":
        this.sesion2Box = true;
        break;
      case "sesion3":
        this.sesion3Box = true;
        break;
      case "sesion4":
        this.sesion4Box = true;
        break;
      default:
        break;
    }
  }

  changeToHide(sesion) {
    this.sesions = true;
    switch (sesion) {
      case "sesion1":
        this.sesion1Box = false;
        break;
      case "sesion2":
        this.sesion2Box = false;
        break;
      case "sesion3":
        this.sesion3Box = false;
        break;
      case "sesion4":
        this.sesion4Box = false;
        break;
      default:
        break;
    }
  }

  showSesions() {
    this.sesions = true;
  }

  updateUserAsistS1($key: string, boolAssist: boolean) {
    this.coursesService.updateAsistenciaS1($key, !boolAssist);
  }

  updateUserAsistS2($key: string, boolAssist: boolean) {
    this.coursesService.updateAsistenciaS2($key, !boolAssist);
  }

  updateUserAsistS3($key: string, boolAssist: boolean) {
    this.coursesService.updateAsistenciaS3($key, !boolAssist);
  }

  updateUserAsistS4($key: string, boolAssist: boolean) {
    this.coursesService.updateAsistenciaS4($key, !boolAssist);
  }

  sortOrder(a, b) {
    // console.log(b.nombre);

    return a.nombres.toLowerCase() - b.nombre.toLowerCase();
  }

  logOut() {
    this.authAdminservice.logout();
  }
}
