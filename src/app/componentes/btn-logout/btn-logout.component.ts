import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-btn-logout',
  templateUrl: './btn-logout.component.html',
  styleUrls: ['./btn-logout.component.css']
})
export class BtnLogoutComponent implements OnInit {

  constructor(private tokenService: TokenService,) { }

  ngOnInit(): void { }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
    //this.login();
  }

}
