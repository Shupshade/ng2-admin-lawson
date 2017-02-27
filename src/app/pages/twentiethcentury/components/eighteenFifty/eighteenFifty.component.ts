import { Component } from '@angular/core';
import 'style-loader!./eighteenFifty.scss';

@Component({
  selector: 'eighteen-fifty-component',
  templateUrl: './eighteenFifty.html',
})

export class EighteenFifty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
