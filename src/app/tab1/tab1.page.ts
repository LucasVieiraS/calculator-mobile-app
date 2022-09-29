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
      this.notify((this.value1 == null && 'Value 1 is null') ||
      ( this.value2 == null && 'Value 2 is null') ||
      (this.value1 == null && this.value2 == null) && 'Both are null');
    }
    return this.value1 != null || this.value2 != null;
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
    this.result = this.value1 > this.value2 && 'Verdade' || 'Falso';
  }

  lt() {
    if (!this.canOperate()) { return; }
    this.result = this.value1 < this.value2 && 'Verdade' || 'Falso';
  }
}
