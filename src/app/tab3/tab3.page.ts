import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sumIcon = '../../assets/icon/Sum.svg';
  subtractionIcon = '../../assets/icon/Subtraction.svg';
  multiplyIcon = '../../assets/icon/Multiply.svg';
  divideIcon = '../../assets/icon/Divide.svg';

  result: number | string = '';

  constructor() {}

}
