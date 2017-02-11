import { Component } from '@angular/core';
import 'style-loader!./eighteenTwenty.scss';

@Component({
  selector: 'eighteen-twenty-component',
  templateUrl: './eighteenTwenty.html',
})

export class EighteenTwenty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
