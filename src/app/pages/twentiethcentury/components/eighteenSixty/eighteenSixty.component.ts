import { Component } from '@angular/core';
import 'style-loader!./eighteenSixty.scss';

@Component({
  selector: 'eighteen-sixty-component',
  templateUrl: './eighteenSixty.html',
})

export class EighteenSixty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
