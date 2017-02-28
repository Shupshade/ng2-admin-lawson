import { Component } from '@angular/core';
import 'style-loader!./nineteenSixty.scss';

@Component({
  selector: 'nineteen-sixty-component',
  templateUrl: 'nineteenSixty.html',
})

export class NineteenSixty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
