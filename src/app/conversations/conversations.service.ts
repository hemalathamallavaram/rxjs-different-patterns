import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject,interval} from 'rxjs';
import { Conversation } from './models';

@Injectable({providedIn: 'root'})
export class ConvStoreService {

  private readonly _conversations = new BehaviorSubject<Conversation[]>([]);

  readonly conversations$ = this._conversations.asObservable();


  // the getter will return the last value emitted in _todos subject
  get conversations(): Conversation[] {
    return this._conversations.getValue();
  }


  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  set conversations(val: Conversation[]) {
    this._conversations.next(val);
  }

  addMessages(content: string) {
    //new messages have to be added here
    this.conversations = [];
  }

}
