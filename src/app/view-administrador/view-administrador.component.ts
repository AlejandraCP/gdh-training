import { Component, OnInit } from '@angular/core';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';

@Component({
  selector: 'app-view-administrador',
  templateUrl: './view-administrador.component.html',
  styleUrls: ['./view-administrador.component.css']
})
export class ViewAdministradorComponent implements OnInit {

  public show: boolean;

  constructor() { }

  ngOnInit() {
    this.show = true;
  }

  toggle() {
    this.show = !this.show;
  }
}
