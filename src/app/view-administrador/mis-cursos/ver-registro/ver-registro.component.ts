import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

//services
import { InscripcionesService } from '../../../services/inscripciones.service';
import { UserService } from '../../../services/user.service';
import { MisCursosService } from '../../../services/mis-cursos.service';

@Component({
  selector: 'app-ver-registro',
  templateUrl: './ver-registro.component.html',
  styleUrls: ['./ver-registro.component.css']
})
export class VerRegistroComponent implements OnInit {

  inscripcionList: any[];
  inscripcionSubjectList: any[];
  userList: any[];
  registerList: any[];
  subjectsList: any[];
  subject: {
    name: string,
    month: string,
    numHours: number
  };

  constructor( public inscripcionesService:  InscripcionesService,
               public usersService: UserService,
               public misCursosService: MisCursosService,
               public route: ActivatedRoute ) 
               {
                this.route.params.subscribe( parametros => {
                  this.inscripcionesService.getInscripciones()
                  .snapshotChanges()
                  .subscribe(item => {
                    this.inscripcionList = [];
                    item.forEach(elem => {
                      let x = elem.payload.toJSON();
                      x['$key'] = elem.key; 
                      this.inscripcionList.push(x);
                      this.inscripcionSubjectList = this.inscripcionList.filter(e =>e.curso_id == parseInt(parametros.id)); 
                    });
                  });  

                  this.usersService.getUser()
                  .snapshotChanges()
                  .subscribe( itemUser => {
                    this.userList = [];
                    itemUser.forEach( elemUser => {
                      let x = elemUser.payload.toJSON();
                      x['$key'] = elemUser.key;
                      this.userList.push(x);
                    });
                  });

                  this.misCursosService.getCursos()
                  .snapshotChanges()
                  .subscribe( itemUser => {
                    this.subjectsList = [];
                    itemUser.forEach( elemUser => {
                      let x = elemUser.payload.toJSON();
                      x['$key'] = elemUser.key;
                      this.subjectsList.push(x);
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
