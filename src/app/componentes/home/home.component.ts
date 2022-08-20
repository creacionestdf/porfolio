import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogeed=false;
  constructor(private tokenService:TokenService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogeed=true;
    }else{
      this.isLogeed=false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
    this.login();
  }

  login(){
    this.router.navigate(['/login']);
  }
}
