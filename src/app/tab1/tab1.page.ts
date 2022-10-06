import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  result: number | string = 0;

  value1;
  value2;

  sumIcon = '../../assets/icon/Sum.svg';
  subtractionIcon = '../../assets/icon/Subtraction.svg';
  multiplyIcon = '../../assets/icon/Multiply.svg';
  divideIcon = '../../assets/icon/Divide.svg';

  constructor(private toastController: ToastController) {}

  async notify(_message: string) {
    const toast = await this.toastController.create({
      message: _message,
      duration: 3000
    });

    await toast.present();
  }

  canOperate() {
    if (this.value1 == null || this.value2 == null) {
      this.notify(
        ( this.value1 == null && 'Valor 1 não pode ser nulo.' )
        ||
        ( this.value2 == null && 'Valor 2 não pode ser nulo.' )
      );
    }
    return this.value1 != null && this.value2 != null;
  }

  // OPERATORS
  sum() {
    if (!this.canOperate()) { return; }
    this.result = this.value1 + this.value2;
  }

  sub() {
    if (!this.canOperate()) { return; }
    this.result = this.value1 - this.value2;
  }

  mult() {
    if (!this.canOperate()) { return; }
    this.result = this.value1 * this.value2;
  }

  divi() {
    if (!this.canOperate()) { return; }
    this.result = this.value1 / this.value2;
  }

  // MORE/LESS THAN
  mt() {
    if (!this.canOperate()) { return; }
    this.result = this.value1 === this.value2 && `${this.value1} = ${this.value2}`
    || (this.value1 > this.value2 && `${this.value1} > ${this.value2}` || `${this.value1} < ${this.value2}`) ;
  }

  lt() {
    if (!this.canOperate()) { return; }
    this.result = this.value1 === this.value2 && `${this.value1} = ${this.value2}`
    || (this.value1 > this.value2 && `${this.value1} > ${this.value2}` || `${this.value1} < ${this.value2}`) ;
  }
}
