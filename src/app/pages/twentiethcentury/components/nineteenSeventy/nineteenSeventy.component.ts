import { Component } from '@angular/core';
import 'style-loader!./nineteenSeventy.scss';

@Component({
  selector: 'nineteen-seventy-component',
  templateUrl: 'nineteenSeventy.html',
})

export class NineteenSeventy {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
