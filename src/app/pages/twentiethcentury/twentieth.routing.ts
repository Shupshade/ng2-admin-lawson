import { Routes, RouterModule }  from '@angular/router';

import { Twentieth } from './twentieth.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { EighteenTen } from './components/eighteenTen/eighteenTen.component';


import { NineteenTwenty } from './components/nineteenTwenty/nineteenTwenty.component';
/*import { EighteenThirty } from './components/eighteenThirty/eighteenThirty.component';
import { EighteenFourty } from './components/eighteenFourty/eighteenFourty.component';
import { EighteenFifty } from './components/eighteenFifty/eighteenFifty.component';
import { EighteenSixty } from './components/eighteenSixty/eighteenSixty.component';
import { EighteenSeventy } from './components/eighteenSeventy/eighteenSeventy.component';
import { EighteenEighty } from './components/eighteenEighty/eighteenEighty.component';
import { EighteenNinety } from './components/eighteenNinety/eighteenNinety.component';

*/



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Twentieth,
    children: [
      { path: 'eighteenTen', component: EighteenTen },
      { path: 'nineteenTwenty', component: NineteenTwenty  }/*,
      { path: 'eighteenThirty', component: EighteenThirty  },
      { path: 'eighteenFourty', component: EighteenFourty  },
      { path: 'eighteenFifty', component: EighteenFifty  },
      { path: 'eighteenSixty', component: EighteenSixty  },
      { path: 'eighteenSeventy', component: EighteenSeventy  },
      { path: 'eighteenEighty', component: EighteenEighty  },
      { path: 'eighteenNinety', component: EighteenNinety  }*/
    ]
  }
];

export const routing = RouterModule.forChild(routes);
