import { Component } from '@angular/core';
import 'style-loader!./nineteenFifty.scss';

@Component({
  selector: 'nineteen-fifty-component',
  templateUrl: 'nineteenFifty.html',
})

export class NineteenFifty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
