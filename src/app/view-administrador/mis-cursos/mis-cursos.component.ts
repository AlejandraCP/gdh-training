import { Component, OnInit } from '@angular/core';

import { VerRegistroComponent } from './../ver-registro/ver-registro.component';


@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {

  constructor() { }

  public showRegistro: boolean;
  
    ngOnInit() {
      this.showRegistro = false;
    }
  
    toggleRegistro() {
      this.showRegistro = !this.showRegistro;
    }

}
