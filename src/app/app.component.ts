import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {StatusService} from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'rxjs-online-test';

  constructor(){

  }
  public ngOnInit(){

  }

}
