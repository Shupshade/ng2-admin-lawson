import { Component } from '@angular/core';
import 'style-loader!./eighteenFourty.scss';

@Component({
  selector: 'eighteen-fourty-component',
  templateUrl: './eighteenFourty.html',
})

export class EighteenFourty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
