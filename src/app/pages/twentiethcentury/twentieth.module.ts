import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './twentieth.routing';
import { Twentieth } from './twentieth.component';
import { EighteenTen } from './components/eighteenTen/eighteenTen.component';
import { NineteenTwenty } from './components/nineteenTwenty/nineteenTwenty.component';
/*import { EighteenThirty } from './components/eighteenThirty/eighteenThirty.component';
import { EighteenFourty } from './components/eighteenFourty/eighteenFourty.component';
import { EighteenFifty } from './components/eighteenFifty/eighteenFifty.component';
import { EighteenSixty } from './components/eighteenSixty/eighteenSixty.component';
import { EighteenSeventy } from './components/eighteenSeventy/eighteenSeventy.component';
import { EighteenEighty } from './components/eighteenEighty/eighteenEighty.component';
import { EighteenNinety } from './components/eighteenNinety/eighteenNinety.component';*/



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Twentieth,
    EighteenTen,
    NineteenTwenty,
/*    EighteenThirty,
    EighteenFourty,
    EighteenFifty,
    EighteenSixty,
    EighteenSeventy,
    EighteenEighty,
    EighteenNinety*/
  ]
})
export class TwentiethModule {
}
