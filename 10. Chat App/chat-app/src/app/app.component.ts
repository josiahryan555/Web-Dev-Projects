import { Component } from '@angular/core';

interface messageInfo {
  user: String;
  message: String;
  // time:
  // color?
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';
  public userName: String = "";
  public message: String = "";
  public messages: messageInfo[] = [];

  public submitMessage = () => {
    let m: messageInfo = { user: this.userName, message: this.message };
    this.messages.push(m);
    console.log(this.userName, "sent:", this.message);
  }
}
