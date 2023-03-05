import { Component } from '@angular/core';
import { constants } from 'fs/promises';

//This is the type that is returned.
//it contains a number (event.value) and the question (to help the users of this component know which card this belongs to)
interface ReturnObj {
  value: Number;
  question: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'hw9';

  //quesiton 1 set up info
  public question1 = "How many meters are in a kilometer?";
  public min1 = 0;
  public max1 = 1000;
  public unit1 = "meters";
  public question1Value: Number = this.min1;

  //quesiton 2 set up info (no units)
  public question2 = "What is your favorite number between 1-3?";
  public min2 = 1;
  public max2 = 3;
  public question2Value: Number = this.min2;

  //quesiton 3 set up info
  public question3 = "How many seconds are in a minute?";
  public min3 = 0;
  public max3 = 100;
  public unit3 = "seconds";
  public question3Value: Number = this.min3;

  //recieves emited value from the cards and updates the display
  public gotResult = (returnObj: ReturnObj) => {
    console.log("app.component.ts", returnObj.value);
    console.log(returnObj.question);
    this.displayResults(returnObj);
  }

  // updates questionXValue which is displayed in app.component.html
  private displayResults(returnObj: ReturnObj) {
    const question = returnObj.question;
    const value = returnObj.value;

    // updates questionXValue which is displayed in app.component.html
    question === this.question1 ? this.question1Value = value : {};
    question === this.question2 ? this.question2Value = value : {};
    question === this.question3 ? this.question3Value = value : {};
  }
}