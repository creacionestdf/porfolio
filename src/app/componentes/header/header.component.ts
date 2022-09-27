import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
   
  public isLogeed: boolean = false;
  public notLogin:boolean = true;
   
  constructor(private tokenService: TokenService) {   }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogeed = true;
      this.notLogin = false;
    } else {
      this.isLogeed = false;
      this.notLogin = true;
    }
  }
 
  /*
  login(): void {
    this.router.navigate(['/login']);
  }*/
}
