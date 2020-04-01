import { Injectable } from "@angular/core";
import { Observable, fromEvent, from ,merge} from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class ConnectionMonitor{
  private connectionService :Observable<boolean>;
  constructor(){
    const offline$ = fromEvent(window,'offline').pipe(mapTo(false));
    const online$= fromEvent(window,'online').pipe(mapTo(true));
    this.connectionService = merge(
      offline$,online$
    )
  }
  monitor():Observable<boolean>{
    return this.connectionService;
  }
}
