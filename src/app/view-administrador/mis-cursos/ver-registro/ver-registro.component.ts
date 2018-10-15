import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

//services
import { InscripcionesService } from '../../../services/inscripciones.service';

@Component({
  selector: 'app-ver-registro',
  templateUrl: './ver-registro.component.html',
  styleUrls: ['./ver-registro.component.css']
})
export class VerRegistroComponent implements OnInit {

  inscripcionList: any[];
  inscripcionCursoList: any[];

  constructor( public inscripcionesService:  InscripcionesService,
               public route: ActivatedRoute ) 
               {
                this.route.params.subscribe( parametros => {
                  console.log(parametros);
                  this.inscripcionesService.getInscripciones()
                  .snapshotChanges()
                  .subscribe(item => {
                    this.inscripcionList = [];
                    item.forEach(elem => {
                      let x = elem.payload.toJSON();
                      x['$key'] = elem.key;
                      this.inscripcionesService.getInscripcionesCurso(elem.key)
                        .snapshotChanges()
                        .subscribe(item1 => {
                          this.inscripcionCursoList = [];
                          item1.forEach(e => {
                            let y = e.payload.toJSON();
                            y['$key'] = e.key;
                            this.inscripcionCursoList.push(y);
                          });
                          let result = this.inscripcionCursoList.reduce(function(res, obj) {
                            return (obj.sesionId < res.sesionId) ? obj : res;
                          }); 
                          this.inscripcionCursoList.forEach(element => {
                          
                              if (!this.inscripcionList.includes(x)) {
                                this.inscripcionList.push(x)
                              }
                          });                    
                        });   
                    });
                  });  
                });
               }
  
    public showRegistro: boolean;
    
      ngOnInit() {
        this.showRegistro = true;
      }
    
      toggleRegistro() {
        this.showRegistro = !this.showRegistro;
      }

}
