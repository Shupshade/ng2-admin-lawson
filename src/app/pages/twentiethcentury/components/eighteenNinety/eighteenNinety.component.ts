import { Component } from '@angular/core';
import 'style-loader!./eighteenNinety.scss';

@Component({
  selector: 'eighteen-ninety-component',
  templateUrl: './eighteenNinety.html',
})

export class EighteenNinety {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
