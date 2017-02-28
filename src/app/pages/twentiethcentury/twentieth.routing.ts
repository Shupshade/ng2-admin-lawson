import { Routes, RouterModule }  from '@angular/router';

import { Twentieth } from './twentieth.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { NineteenTen } from './components/nineteenTen/nineteenTen.component';


import { NineteenTwenty } from './components/nineteenTwenty/nineteenTwenty.component';
import { NineteenThirty } from './components/nineteenThirty/nineteenThirty.component';
import { NineteenFourty } from './components/nineteenFourty/nineteenFourty.component';
import { NineteenFifty } from './components/nineteenFifty/nineteenFifty.component';
import { NineteenSixty } from './components/nineteenSixty/nineteenSixty.component';
import { NineteenSeventy } from './components/nineteenSeventy/nineteenSeventy.component';
import { NineteenEighty } from './components/nineteenEighty/nineteenEighty.component';
import { NineteenNinety } from './components/nineteenNinety/nineteenNinety.component';





// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Twentieth,
    children: [
      { path: 'nineteenTen', component: NineteenTen },
      { path: 'nineteenTwenty', component: NineteenTwenty  },
      { path: 'nineteenThirty', component: NineteenThirty  },
      { path: 'nineteenFourty', component: NineteenFourty  },
      { path: 'nineteenFifty', component: NineteenFifty  },
      { path: 'nineteenSixty', component: NineteenSixty  },
      { path: 'nineteenSeventy', component: NineteenSeventy  },
      { path: 'nineteenEighty', component: NineteenEighty  },
      { path: 'nineteenNinety', component: NineteenNinety  }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
