import { Routes, RouterModule }  from '@angular/router';

import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { EighteenTen } from './components/eighteenTen/eighteenTen.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Editors,
    children: [
      { path: 'ckeditor', component: Ckeditor }
      { path: 'eighteenTen', component: EighteenTen }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
