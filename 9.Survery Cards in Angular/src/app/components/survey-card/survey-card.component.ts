import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

//This is the type that is returned.
//it contains a number (event.value) and the question (to help the users of this component know which card this belongs to)
interface ReturnObj {
  value: Number;
  question: String;
}

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss'],
})
export class SurveyCardComponent implements OnInit {

  constructor() {
  }

  //I hope I did these right, I had a lot of trouble implementing them, and this is the only way I could get it to work.
  @Input() question: string = "input question";
  @Input() minValue: Number = 0;
  @Input() maxValue: number = 100;
  @Input() units: string = "";

  @Output() result = new EventEmitter<ReturnObj>();

  ngOnInit(): void {
  }

  sliderChanged(event: MatSliderChange) {
    console.log(event.value);

    // emits the value to the parent
    if (event.value) {
      const returnObj = { value: event.value, question: this.question };
      this.result.emit(returnObj);
    }
  }

}