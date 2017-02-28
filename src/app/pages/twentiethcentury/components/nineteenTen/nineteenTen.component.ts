import { Component } from '@angular/core';
import 'style-loader!./nineteenTen.scss';

@Component({
  selector: 'nineteen-ten-component',
  templateUrl: 'nineteenTen.html',
})

export class NineteenTen {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
