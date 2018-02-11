import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from 'app/model/message';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messageName: string;
  messageText: string;
  messages: Message[];
  id: number;
  chatToAdd: Message = {
    name: '',
    text: ''

  }

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }


  loadData() {
    this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.http.get(`api/tiding/${this.id}/messages`).subscribe(
        (res: any) => {
          this.messages = res;

        }
      )
    })
  }

  addMessage() {
    this.chatToAdd.text = this.messageText;
    this.chatToAdd.name = this.messageName;
    this.http.post(`api/tiding/${this.id}/messages`, this.chatToAdd).subscribe(
      (res: Response) => {
        this.resetChatText();
        this.loadData();
      })
  }

  resetChatText() {
    this.messageName = '';
    this.messageText = '';

  }

}
