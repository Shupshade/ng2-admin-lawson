import { Component } from '@angular/core';
import 'style-loader!./nineteenNineNine.scss';

@Component({
  selector: 'nineteen-nine-nine-component',
  templateUrl: 'nineteenNineNine.html',
})

export class NineteenNineNine {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
