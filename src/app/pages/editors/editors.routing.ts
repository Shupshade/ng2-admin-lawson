import { Routes, RouterModule }  from '@angular/router';

import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { EighteenTen } from './components/eighteenTen/eighteenTen.component';
import { EighteenTwenty } from './components/eighteenTwenty/eighteenTwenty.component';
import { EighteenThirty } from './components/eighteenThirty/eighteenThirty.component';
import { EighteenFourty } from './components/eighteenFourty/eighteenFourty.component';
import { EighteenFifty } from './components/eighteenFifty/eighteenFifty.component';
import { EighteenSixty } from './components/eighteenSixty/eighteenSixty.component';
import { EighteenSeventy } from './components/eighteenSeventy/eighteenSeventy.component';
import { EighteenEighty } from './components/eighteenEighty/eighteenEighty.component';
import { EighteenNinety } from './components/eighteenNinety/eighteenNinety.component';
import { EighteenNineNine } from './components/eighteenNineNine/eighteenNineNine.component';





// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Editors,
    children: [
      { path: 'ckeditor', component: Ckeditor },
      { path: 'nineteenTen', component: EighteenTen },
      { path: 'nineteenTwenty', component: EighteenTwenty  },
      { path: 'nineteenThirty', component: EighteenThirty  },
      { path: 'nineteenFourty', component: EighteenFourty  },
      { path: 'nineteenFifty', component: EighteenFifty  },
      { path: 'nineteenSixty', component: EighteenSixty  },
      { path: 'nineteenSeventy', component: EighteenSeventy  },
      { path: 'nineteenEighty', component: EighteenEighty  },
      { path: 'nineteenNinety', component: EighteenNinety  },
      { path: 'nineteenNineNine', component: EighteenNineNine  }

    ]
  }
];

export const routing = RouterModule.forChild(routes);

