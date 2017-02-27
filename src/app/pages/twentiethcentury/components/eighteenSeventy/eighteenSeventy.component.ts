import { Component } from '@angular/core';
import 'style-loader!./eighteenSeventy.scss';

@Component({
  selector: 'eighteen-seventy-component',
  templateUrl: './eighteenSeventy.html',
})

export class EighteenSeventy {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
