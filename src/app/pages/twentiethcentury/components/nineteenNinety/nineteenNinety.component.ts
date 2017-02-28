import { Component } from '@angular/core';
import 'style-loader!./nineteenNinety.scss';

@Component({
  selector: 'nineteen-ninety-component',
  templateUrl: 'nineteenNinety.html',
})

export class NineteenNinety {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
