import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from './../services/auth-admin.service';

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
