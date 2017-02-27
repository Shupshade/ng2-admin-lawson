import { Component } from '@angular/core';
import 'style-loader!./nineteenTwenty.scss';

@Component({
  selector: 'nineteen-twenty-component',
  templateUrl: 'nineteenTwenty.html',
})

export class NineteenTwenty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
