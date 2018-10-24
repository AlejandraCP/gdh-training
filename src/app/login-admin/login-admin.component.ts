import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from './../services/auth-admin.service';
import { Router } from '@angular/router';
import { Site } from '@microsoft/microsoft-graph-types';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  public email: string;
  public password: string;
  public err: any;

  constructor(
    private authAdminService: AuthAdminService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this.authAdminService.login(this.email, this.password)
    .then(res => {
      this.authAdminService.getAuth().subscribe(auth => {
        if(
          auth.email === 'administrador@inteligogroup.com'
        ) {
          this.router.navigate(['/administrador']);
        } else if (
          auth.email === 'coor@inteligogroup.com'
        ) {
          this.router.navigate(['coor']);
        } else if (
          auth.email === 'acabrera@inteligogroup.com' ||
          auth.email === 'mllamocca@inteligogroup.com'
        ) {
          this.router.navigate(['/dev']);
        }       
      })      
    })
    .catch(err => {
      this.err = err.code;
      if(this.err !== undefined) {
        this.err = 'Correo o contraseña inválida';
      }
    })
  }

}
