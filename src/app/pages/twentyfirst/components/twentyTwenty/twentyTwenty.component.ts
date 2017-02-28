import { Component } from '@angular/core';
import 'style-loader!./twentyTwenty.scss';

@Component({
  selector: 'twenty-twenty-component',
  templateUrl: 'twentyTwenty.html',
})

export class TwentyTwenty {
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
