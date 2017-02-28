import { Component } from '@angular/core';
import 'style-loader!./nineteenFourty.scss';

@Component({
  selector: 'nineteen-fourty-component',
  templateUrl: 'nineteenFourty.html',
})

export class NineteenFourty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
