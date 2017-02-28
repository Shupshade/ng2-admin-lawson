import { Routes, RouterModule }  from '@angular/router';

import { Twentyfirst } from './twentyfirst.component';
import { TwentyTen } from './components/twentyTen/twentyTen.component';
import { TwentyTwenty } from './components/twentyTwenty/twentyTwenty.component';








// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Twentyfirst,
    children: [
      { path: 'twentyTen', component: TwentyTen },
      { path: 'twentyTwenty', component: TwentyTwenty  },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
