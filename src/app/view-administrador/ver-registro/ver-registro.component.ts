import { Component, OnInit } from '@angular/core';
import { MisCursosComponent } from '.././mis-cursos/mis-cursos.component';

@Component({
  selector: 'app-ver-registro',
  templateUrl: './ver-registro.component.html',
  styleUrls: ['./ver-registro.component.css']
})
export class VerRegistroComponent implements OnInit {

  constructor() { }
  
    public showRegistro: boolean;
    
      ngOnInit() {
        this.showRegistro = true;
      }
    
      toggleRegistro() {
        this.showRegistro = !this.showRegistro;
      }

}
