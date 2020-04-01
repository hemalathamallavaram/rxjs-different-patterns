import { Component, OnInit } from '@angular/core';
import {StatusService} from './status.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  title = 'rxjs-online-test';
  online=true;
  loggedIn=false;
  constructor(private statusService:StatusService,private router:Router){
    this.statusService.getOnlineStatus().subscribe((status)=>{
      this.online = status;
    });
    this.statusService.isUserLoggedIn().subscribe((status)=>{
      this.loggedIn = status;
    });
  }
  public ngOnInit(){

  }
  onClick(){
    console.log('login here')
    this.statusService.setLoginStatus(!this.loggedIn);
    this.router.navigate(['/user'])
  }

}
