import { Component } from '@angular/core';
import 'style-loader!./eighteenNineNine.scss';

@Component({
  selector: 'eighteen-ninenine-component',
  templateUrl: 'eighteenNineNine.html',
})

export class EighteenNineNine {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
