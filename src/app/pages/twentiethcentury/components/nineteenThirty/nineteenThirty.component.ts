import { Component } from '@angular/core';
import 'style-loader!./nineteenThirty.scss';

@Component({
  selector: 'nineteen-thirty-component',
  templateUrl: 'nineteenThirty.html',
})

export class NineteenThirty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
