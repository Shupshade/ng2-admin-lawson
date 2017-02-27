import { Component } from '@angular/core';
import 'style-loader!./eighteenThirty.scss';

@Component({
  selector: 'eighteen-thirty-component',
  templateUrl: './eighteenThirty.html',
})

export class EighteenThirty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
