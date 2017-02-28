import { Component } from '@angular/core';
import 'style-loader!./nineteenEighty.scss';

@Component({
  selector: 'nineteen-eighty-component',
  templateUrl: 'nineteenEighty.html',
})

export class NineteenEighty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
