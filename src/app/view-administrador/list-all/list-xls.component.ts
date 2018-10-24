import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-list-xls',
  templateUrl: './list-xls.component.html',
  styleUrls: ['./list-xls.component.css']
})
export class ListXlsComponent implements OnInit {
  public showRegistro: boolean;
  sessionList: any[];

  constructor(public coursesService: CoursesService) { }

    ngOnInit() {
      this.showRegistro = true;
      this.sessionList = [];
      this.coursesService.getGroup('sesion1')
      .snapshotChanges()
      .subscribe( item => {
        item.forEach(element => {
          let y = element.payload.toJSON();
          y['$key'] = element.key;
          this.sessionList.push(y);
        });
      })

      this.coursesService.getGroup('sesion2')
      .snapshotChanges()
      .subscribe( item => {
        item.forEach(element => {
          let y = element.payload.toJSON();
          y['$key'] = element.key;
          this.sessionList.push(y);
        });
      })

      this.coursesService.getGroup('sesion3')
      .snapshotChanges()
      .subscribe( item => {
        item.forEach(element => {
          let y = element.payload.toJSON();
          y['$key'] = element.key;
          this.sessionList.push(y);
        });
      })

      this.coursesService.getGroup('sesion4')
      .snapshotChanges()
      .subscribe( item => {
        item.forEach(element => {
          let y = element.payload.toJSON();
          y['$key'] = element.key;
          this.sessionList.push(y);
        });
      })
      console.log(this.sessionList);
      
    }
  
    toggleRegistro() {
      this.showRegistro = !this.showRegistro;
    }

}
