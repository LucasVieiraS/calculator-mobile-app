/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable quote-props */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sumIcon = '../../assets/icon/Sum.svg';
  subtractionIcon = '../../assets/icon/Subtraction.svg';
  multiplyIcon = '../../assets/icon/Multiply.svg';
  divideIcon = '../../assets/icon/Divide.svg';

  result: number | string = '';
  input: string = '';


  constructor() {}

  // UTIL
  isNum(id: string) {
    return !isNaN(parseFloat(id));
  }

  // CALCULATIONS
  doCalculation(input) {

  }

  // BOILER
  verifyDigit(event) {
    const id = event.target.id;
    if (this.isNum(id)) {
      this.input += id;
    } else {

    }
  }

}
