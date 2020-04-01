import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {ConvStoreService} from './conversations.service';
import { Conversation } from './models';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ConversationsComponent{
  receiverEmail:string;
  message:string;
  conversations:Conversation[];
  constructor(private conversationservice:ConvStoreService){

  }
  public sendMessage(){

  }
  public removeConversation(){

  }
}
