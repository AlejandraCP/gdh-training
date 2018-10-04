import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from './../services/auth-admin.service';

import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';

@Component({
  selector: 'app-view-administrador',
  templateUrl: './view-administrador.component.html',
  styleUrls: ['./view-administrador.component.css']
})
export class ViewAdministradorComponent implements OnInit {

  constructor(
    public authAdminService: AuthAdminService
  ) { }
  public show: boolean;

  ngOnInit() {
    this.show = false;
  }

  toggle() {
    this.show = !this.show;
  }

  logOut() {
    this.authAdminService.logout();
  }
}
