import { Component } from '@angular/core';
import 'style-loader!./eighteenEighty.scss';

@Component({
  selector: 'eighteen-eighty-component',
  templateUrl: './eighteenEighty.html',
})

export class EighteenEighty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
