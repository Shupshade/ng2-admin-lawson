import { Component } from '@angular/core';
import 'style-loader!./eighteenTen.scss';

@Component({
  selector: 'eighteen-ten-component',
  templateUrl: './eighteenTen.html',
})

export class EighteenTen {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
