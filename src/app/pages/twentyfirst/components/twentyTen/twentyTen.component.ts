import { Component } from '@angular/core';
import 'style-loader!./twentyTen.scss';

@Component({
  selector: 'twenty-ten-component',
  templateUrl: 'twentyTen.html',
})

export class TwentyTen {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
